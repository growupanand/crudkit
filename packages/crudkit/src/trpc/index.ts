import type { TRPCBuilder } from "@trpc/server";
import { eq } from "drizzle-orm";
import type { Table } from "drizzle-orm";
import type { drizzle } from "drizzle-orm/neon-serverless";
import type { PgInsertValue } from "drizzle-orm/pg-core";
import { z } from "zod";
import { generateSchemas } from "../schema";
import type { RouterConfig } from "../types";

const CRUDRoutes = ["create", "getAll", "getById", "update", "patch", "delete"] as const;

const CRUDRoutesConfig: Record<(typeof CRUDRoutes)[number], "public" | "protected"> = {
  create: "protected",
  getAll: "public",
  getById: "public",
  update: "protected",
  patch: "protected",
  delete: "protected",
} as const;

export function generateRouter<
  TTable extends Table,
  TContext extends { db: ReturnType<typeof drizzle> },
  TTrpc extends ReturnType<TRPCBuilder<TContext, object>["create"]> = ReturnType<
    TRPCBuilder<TContext, object>["create"]
  >,
>(
  config: RouterConfig<TTable>,
  helpers: {
    createTRPCRouter: TTrpc["router"];
    publicProcedure: TTrpc["procedure"];
    protectedProcedure: TTrpc["procedure"];
  },
) {
  const { table, customProcedures = {} } = config;
  const { createTRPCRouter, publicProcedure, protectedProcedure } = helpers;

  const { insertSchema, selectSchema, updateSchema, patchSchema } = generateSchemas(config);

  const getProcedure = (type: (typeof CRUDRoutes)[number]) => {
    const requiresAuth = CRUDRoutesConfig[type] === "protected";
    const baseProcedure = requiresAuth ? protectedProcedure : publicProcedure;
    return baseProcedure;
  };

  const router = {
    // Create
    create: getProcedure("create")
      .input(insertSchema)
      .mutation(async ({ input, ctx }) => {
        const [result] = await ctx.db
          .insert(table)
          .values(input as PgInsertValue<TTable>)
          .returning();

        return result;
      }),

    // Get all
    getAll: getProcedure("getAll").query(async ({ ctx }) => {
      return await ctx.db.select().from(
        table as any, // TODO: Fix type
      );
    }),

    // Get one
    getById: getProcedure("getById")
      .input(
        z.object({
          id: z.string().min(1),
        }),
      )
      .query(async ({ input, ctx }) => {
        const [result] = await ctx.db
          .select()
          .from(table as any)
          .where(
            eq(
              (table as any).id, // TODO: Fix type
              input.id,
            ),
          )
          .limit(1);

        return result;
      }),

    // Update
    update: getProcedure("update")
      .input(
        updateSchema.extend({
          id: z.string().min(1),
        }),
      )
      .mutation(async ({ input, ctx }) => {
        const { id, ...data } = input as z.infer<typeof updateSchema> & { id: string };
        const [result] = await ctx.db
          .update(table)
          .set({
            ...data,
            updatedAt: new Date(),
          })
          .where(
            eq(
              (table as any).id, // TODO: Fix type
              id,
            ),
          )
          .returning();

        return result;
      }),

    // Patch (partial update)
    patch: getProcedure("patch")
      .input(
        patchSchema.extend({
          id: z.string().min(1),
        }),
      )
      .mutation(async ({ input, ctx }) => {
        const { id, ...data } = input as z.infer<typeof patchSchema> & { id: string };
        const [result] = await ctx.db
          .update(table)
          .set({
            ...data,
            updatedAt: new Date(),
          })
          .where(
            eq(
              (table as any).id, // TODO: Fix type
              id,
            ),
          )
          .returning();

        return result;
      }),

    // Delete
    delete: getProcedure("delete")
      .input(
        z.object({
          id: z.string().min(1),
        }),
      )
      .mutation(async ({ input, ctx }) => {
        const [result] = await ctx.db
          .delete(table)
          .where(
            eq(
              (table as any).id, // TODO: Fix type
              input.id,
            ),
          )
          .returning();

        return result;
      }),
  };

  const procedures = { ...router, ...customProcedures };
  return createTRPCRouter(procedures);
}
