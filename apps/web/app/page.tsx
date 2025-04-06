import { CodeBlock } from "@/components/CodeBlock";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CodeExample />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}

function CodeExample() {
  const schemaCode = `// schema.ts
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
});`;

  const usageCode = `// Create a CRUD instance
import { createCrud } from 'crudkit';
import { db } from './db';
import { users } from './schema';

const usersCrud = createCrud({
  table: users,
  db: db,
});

// Generate a tRPC router
const usersRouter = usersCrud.createRouter({
  createTRPCRouter,
  publicProcedure,
});`;

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Simplified API, Powerful Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">1. Define your schema</h3>
            <CodeBlock code={schemaCode} language="typescript" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">2. Create your CRUD API</h3>
            <CodeBlock code={usageCode} language="typescript" />
          </div>
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <section className="py-16 bg-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to simplify your CRUD operations?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          CrudKit helps you build type-safe, efficient data management features in minutes instead
          of hours.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="https://crudkit-docs.vercel.app/getting-started/installation"
            className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/growupanand/crudkit"
            className="px-6 py-3 bg-indigo-700 text-white font-medium rounded-lg hover:bg-indigo-800 transition-colors"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
