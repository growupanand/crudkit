import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Fun floating elements in background */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[15%] animate-float-slow opacity-20">
          {}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0L26.3 13.7H40L28.8 22.1L35.1 35.8L20 27.4L4.9 35.8L11.2 22.1L0 13.7H13.7L20 0Z"
              fill="#6366F1"
            />
          </svg>
        </div>
        <div className="absolute top-[70%] right-[20%] animate-float opacity-20">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="30" rx="6" fill="#F472B6" />
          </svg>
        </div>
        <div className="absolute bottom-[15%] left-[30%] animate-float-fast opacity-20">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.5" cy="12.5" r="12.5" fill="#34D399" />
          </svg>
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-3xl mx-auto text-center z-10">
        <div className="mb-8 text-indigo-400 font-mono text-sm animate-pulse">
          It's alive! It's alive!
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-indigo-400">CRUD</span>
          <span className="text-white">Kit</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Automate CRUD operations so you can spend more time on{" "}
          <span className="line-through">Twitter</span> important things.
        </p>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 mb-10 text-left font-mono text-sm relative group overflow-hidden">
          <div className="absolute top-2 right-3 flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className="text-gray-400 mb-1">$ what-should-i-use-for-crud</p>
          <p className="text-white">
            <span className="text-green-400">➜</span> npm install crudkit
          </p>
          <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity" />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="https://crudkit-docs.vercel.app/"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-500/20"
          >
            Read the Docs
          </Link>
          <Link
            href="https://www.npmjs.com/package/crudkit"
            className="px-6 py-3 bg-gray-800 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-all"
          >
            NPM Package
          </Link>
        </div>

        <div className="mt-16 text-gray-500 text-sm">
          <p>No CRUDs were harmed in the making of this library</p>
        </div>
      </div>
    </div>
  );
}
