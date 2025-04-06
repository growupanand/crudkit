import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CrudKit</h3>
            <p className="text-slate-400">
              Automate CRUD operations with Drizzle, tRPC, and React Query
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Documentation</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link
                  href="https://crudkit-docs.vercel.app/getting-started/installation"
                  className="hover:text-white"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  href="https://crudkit-docs.vercel.app/getting-started/quick-start"
                  className="hover:text-white"
                >
                  Quick Start
                </Link>
              </li>
              <li>
                <Link
                  href="https://crudkit-docs.vercel.app/guides/basic-usage"
                  className="hover:text-white"
                >
                  Basic Usage
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="https://www.npmjs.com/package/crudkit" className="hover:text-white">
                  NPM Package
                </Link>
              </li>
              <li>
                <Link href="https://github.com/growupanand/crudkit" className="hover:text-white">
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link
                  href="https://crudkit-docs.vercel.app/examples/basic-crud"
                  className="hover:text-white"
                >
                  Examples
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="https://crudkit-docs.vercel.app/" className="hover:text-white">
                  License
                </Link>
              </li>
              <li>
                <Link href="https://github.com/growupanand/crudkit" className="hover:text-white">
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>MIT {new Date().getFullYear()} © CRUDKit</p>
        </div>
      </div>
    </footer>
  );
}
