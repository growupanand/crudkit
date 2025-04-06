import type { Table } from "drizzle-orm";

export type GetTableKeys<T extends Table> = keyof T["_"]["columns"];

export interface TableConfig<T extends Table> {
  table: T;
}

export interface RouterConfig<T extends Table> extends TableConfig<T> {
  customProcedures?: Record<string, any>;
}

export interface ReactQueryConfig<T extends Table> {
  routerPath: T["_"]["name"];
}
