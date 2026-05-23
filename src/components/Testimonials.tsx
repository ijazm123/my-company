export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc',
      text: 'Cloudswag Technologies reduced our AWS costs by 35% while improving performance. Outstanding service and deep technical expertise!',
      role: 'CTO',
      initials: 'JS',
    },
    {
      name: 'Sarah Johnson',
      company: 'DataFlow Solutions',
      text: 'Their DevOps expertise transformed our entire deployment pipeline. Reduced deployment time from hours to minutes.',
      role: 'Engineering Director',
      initials: 'SJ',
    },
    {
      name: 'Michael Chen',
      company: 'SecureNet Systems',
      text: 'Professional, responsive, and deeply knowledgeable. They handled our security audit and compliance perfectly.',
      role: 'VP Operations',
      initials: 'MC',
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-8 bg-gradient-to-b from-bg-dark via-bg-card/50 to-bg-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-4">
            Trusted by <span className="text-primary">Leading Enterprises</span>
          </h2>
          <p className="text-text-secondary max-w-[600px] mx-auto text-lg">
            Trusted by leading enterprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-bg-card border border-white/10 rounded-[20px] p-8 hover:-translate-y-1 hover:border-primary/20 transition-all duration-300">
              <div className="text-accent text-sm mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-text-secondary italic mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] rounded-full gradient-primary flex items-center justify-center font-bold text-white text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-text-secondary text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
