export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc',
      text: 'TechCore reduced our AWS costs by 35% while improving performance. Outstanding service and deep technical expertise!',
      role: 'CTO',
    },
    {
      name: 'Sarah Johnson',
      company: 'DataFlow Solutions',
      text: 'Their DevOps expertise transformed our entire deployment pipeline. Reduced deployment time from hours to minutes.',
      role: 'Engineering Director',
    },
    {
      name: 'Michael Chen',
      company: 'SecureNet Systems',
      text: 'Professional, responsive, and deeply knowledgeable. They handled our security audit and compliance perfectly.',
      role: 'VP Operations',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by leading enterprises</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6 italic">{`"${testimonial.text}"`}</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
