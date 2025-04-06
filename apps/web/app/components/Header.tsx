import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">CRUD</span>
            <span className="text-2xl font-bold">Kit</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="https://crudkit-docs.vercel.app/getting-started/installation"
              className="text-slate-700 hover:text-indigo-600"
            >
              Docs
            </Link>
            <Link
              href="https://crudkit-docs.vercel.app/guides/basic-usage"
              className="text-slate-700 hover:text-indigo-600"
            >
              Guides
            </Link>
            <Link
              href="https://crudkit-docs.vercel.app/api/schema"
              className="text-slate-700 hover:text-indigo-600"
            >
              API
            </Link>
            <Link
              href="https://crudkit-docs.vercel.app/examples/basic-crud"
              className="text-slate-700 hover:text-indigo-600"
            >
              Examples
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/growupanand/crudkit"
              className="text-slate-700 hover:text-indigo-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
