export function Features() {
  const features = [
    {
      icon: "🚀",
      title: "Simplified CRUD Operations",
      description: "Automate repetitive CRUD logic and eliminate boilerplate code",
    },
    {
      icon: "🔄",
      title: "tRPC Integration",
      description: "Seamless type-safe API with tRPC for end-to-end type safety",
    },
    {
      icon: "⚡",
      title: "React Query Support",
      description: "Efficient data fetching and caching for optimal performance",
    },
    {
      icon: "🛠️",
      title: "Drizzle ORM",
      description: "Type-safe SQL query builder for database operations",
    },
    {
      icon: "📊",
      title: "Zod Validation",
      description: "Runtime type checking and validation for secure data handling",
    },
    {
      icon: "🧰",
      title: "Customizable",
      description: "Extend with custom procedures and validations as needed",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose CrudKit?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
