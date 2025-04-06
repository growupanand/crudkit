import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-indigo-600">CRUD</span>Kit
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 mb-10 max-w-3xl mx-auto">
          Automate CRUD operations with Drizzle, tRPC, and React Query
        </p>
        <div className="bg-slate-800 text-white rounded-lg p-4 md:p-6 max-w-lg mx-auto text-left mb-10 font-mono text-sm">
          <p>npm install crudkit</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="https://crudkit-docs.vercel.app/"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Documentation
          </Link>
          <Link
            href="https://www.npmjs.com/package/crudkit"
            className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
          >
            NPM Package
          </Link>
        </div>
      </div>
    </section>
  );
}
