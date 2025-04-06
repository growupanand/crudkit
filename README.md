# CrudKit

CrudKit is a powerful library that automates CRUD (Create, Read, Update, Delete) operations with Drizzle ORM, tRPC, and React Query.

## Features

- 🚀 **Simplified CRUD Operations** - Automate repetitive CRUD logic
- 🔄 **tRPC Integration** - Seamless type-safe API with tRPC
- ⚡ **React Query Support** - Efficient data fetching and caching
- 🛠️ **Drizzle ORM** - Type-safe SQL query builder
- 📊 **Zod Validation** - Runtime type checking and validation

## Installation

```bash
npm install crudkit
# or
yarn add crudkit
# or
pnpm add crudkit
```

## Quick Example

```tsx
import { createCrud } from 'crudkit';
import { db } from './db';
import { users } from './schema';

const usersCrud = createCrud({
  table: users,
  db: db,
});

// Now you can use usersCrud in your tRPC router
```

## Documentation

Full documentation is available at [docs.crudkit.dev](https://docs.crudkit.dev) with guides on:

- [Installation](https://docs.crudkit.dev/getting-started/installation)
- [Quick Start](https://docs.crudkit.dev/getting-started/quick-start)
- [Basic Usage](https://docs.crudkit.dev/guides/basic-usage)
- [API Reference](https://docs.crudkit.dev/api/schema)
- [Examples](https://docs.crudkit.dev/examples/basic-crud)

## Repository Structure

This repository is a Turborepo monorepo with the following structure:

- `apps/docs`: Documentation site built with Next.js and Nextra
- `apps/web`: Demo application showcasing CrudKit usage
- `packages/crudkit`: Core library package

## Development

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Setup

```bash
# Clone the repository
git clone https://github.com/growupanand/crudkit.git
cd crudkit

# Install dependencies
pnpm install
```

### Development Commands

```bash
# Run development server for all packages
pnpm dev

# Run docs site only (available at http://localhost:3001)
pnpm --filter docs dev

# Build all packages
pnpm build

# Run tests
pnpm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © CrudKit