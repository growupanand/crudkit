import type { AnyRouter } from "@trpc/server";
import type { Table } from "drizzle-orm";
import type { z } from "zod";

export interface TableConfig<T extends Table> {
  table: T;
  extraCreateValidation?: Record<string, z.ZodType<any>>;
  extraUpdateValidation?: Record<string, z.ZodType<any>>;
  omitFieldsFromCreate?: string[];
  omitFieldsFromUpdate?: string[];
  requireFields?: string[];
  relationFields?: Record<string, string>; // fieldName -> foreignTableName
}

export interface RouterConfig<T extends Table> extends TableConfig<T> {
  routerName: string;
  requiresAuth?: boolean;
  customProcedures?: Record<string, any>;
  rateLimitConfig?: {
    create?: string;
    update?: string;
    delete?: string;
  };
}

export interface ReactQueryConfig<T extends Table, R extends AnyRouter> {
  table: T;
  router: R;
  routerPath: string;
}
