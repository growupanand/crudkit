import type { Table } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import type { TableConfig } from "../types";

export function generateSchemas<T extends Table>(config: TableConfig<T>) {
  const { table } = config;

  const insertSchema = createInsertSchema(table);
  const selectSchema = createSelectSchema(table);
  const updateSchema = selectSchema.extend({
    id: z.string().min(1),
  });
  const patchSchema = selectSchema.partial().extend({
    id: z.string().min(1),
  });

  return {
    insertSchema,
    selectSchema,
    updateSchema,
    patchSchema,
  };
}
