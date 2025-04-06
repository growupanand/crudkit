
# CrudKit

CrudKit is a powerful library that automates CRUD (Create, Read, Update, Delete) operations with Drizzle ORM, tRPC, and React Query. It eliminates boilerplate code and provides a type-safe, efficient way to handle database operations in your TypeScript applications.

## Features

- 🚀 **Simplified CRUD Operations** - Automate repetitive CRUD logic
- 🔄 **tRPC Integration** - Seamless type-safe API with tRPC
- ⚡ **React Query Support** - Efficient data fetching and caching
- 🛠️ **Drizzle ORM** - Type-safe SQL query builder support
- 📊 **Zod Validation** - Runtime type checking and validation
- 🧰 **Customizable** - Extend with custom procedures and validations

## Installation

```bash
npm install crudkit
# or
yarn add crudkit
# or
pnpm add crudkit
```

### Peer Dependencies

CrudKit requires the following peer dependencies:

- React >=17.0.0
- Drizzle ORM >=0.28.0
- tRPC >=10.0.0
- React Query (via tRPC)
- Zod >=3.0.0

You can install them with:

```bash
npm install drizzle-orm @trpc/server @trpc/client @trpc/react-query zod
```

## Basic Usage

### Define Your Schema

```typescript
// schema.ts
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
});
```

### Create a tRPC Router

```typescript
// api/routers/users.ts
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc';
import { generateRouter } from 'crudkit';
import { db } from '../db';
import { users } from '../schema';

export const usersRouter = generateRouter(
  {
    table: users,
  },
  {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
  }
);

// Merge with your main router
// api/root.ts
import { createTRPCRouter } from './trpc';
import { usersRouter } from './routers/users';

export const appRouter = createTRPCRouter({
  users: usersRouter,
});

export type AppRouter = typeof appRouter;
```

### Generate React Query Hooks

```typescript
// hooks/use-users.ts
import { generateReactQueryHooks } from 'crudkit';
import { trpc } from '../utils/trpc';
import { users } from '../schema';

export const useUsers = generateReactQueryHooks(
  {
    routerPath: 'users',
  },
  trpc
);
```

### Use the Hooks in Your Components

```tsx
// components/UsersList.tsx
import { useUsers } from '../hooks/use-users';

export function UsersList() {
  const { data, isLoading } = useUsers.useGetAll();
  const { create, isLoading: isCreating } = useUsers.useCreate();

  const handleCreateUser = () => {
    create({
      name: 'John Doe',
      email: 'john@example.com',
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Users</h1>
      <button onClick={handleCreateUser} disabled={isCreating}>
        Add User
      </button>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Documentation

For comprehensive documentation, visit [docs.crudkit.dev](https://docs.crudkit.dev) with guides on:

- [Installation](https://docs.crudkit.dev/getting-started/installation)
- [Quick Start](https://docs.crudkit.dev/getting-started/quick-start)
- [Basic Usage](https://docs.crudkit.dev/guides/basic-usage)
- [API Reference](https://docs.crudkit.dev/api/schema)
- [Examples](https://docs.crudkit.dev/examples/basic-crud)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © CrudKit
