import type { Table } from "drizzle-orm";
import type { ReactQueryConfig } from "../types";

export function generateReactQueryHooks<T extends Table>(
  config: ReactQueryConfig<T>,
  trpc: any, // TODO: Fix type
) {
  const { routerPath } = config;

  return {
    // Create
    useCreate: () => {
      const mutation = trpc[routerPath].create.useMutation();

      return {
        ...mutation,
        create: mutation.mutate,
        createAsync: mutation.mutateAsync,
      };
    },
    // Get all with pagination
    useGetAll: () => {
      return trpc[routerPath].getAll.useQuery();
    },

    // Get one by ID
    useGetById: (id: string) => {
      return trpc[routerPath].getById.useQuery({ id });
    },

    // Update
    useUpdate: () => {
      const mutation = trpc[routerPath].update.useMutation();

      return {
        ...mutation,
        update: mutation.mutate,
        updateAsync: mutation.mutateAsync,
      };
    },

    // Patch
    usePatch: () => {
      const mutation = trpc[routerPath].patch.useMutation();

      return {
        ...mutation,
        patch: mutation.mutate,
        patchAsync: mutation.mutateAsync,
      };
    },

    // Delete
    useDelete: () => {
      const mutation = trpc[routerPath].delete.useMutation();

      return {
        ...mutation,
        delete: mutation.mutate,
        deleteAsync: mutation.mutateAsync,
      };
    },
  };
}
