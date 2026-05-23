export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams and startups',
      price: '$499',
      period: '/month',
      featured: false,
      features: [
        'Cloud infrastructure setup',
        'Basic CI/CD pipeline',
        'Network monitoring',
        'Email support',
        'Weekly security scans',
        '10 TB data transfer',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      description: 'For growing businesses with complex needs',
      price: '$1,499',
      period: '/month',
      featured: true,
      features: [
        'Everything in Starter',
        'Advanced DevOps automation',
        'Kubernetes management',
        '24/7 priority support',
        'Daily threat intelligence',
        'SOC 2 compliance support',
        '50 TB data transfer',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      price: 'Custom',
      period: '',
      featured: false,
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom SLA & architecture',
        'On-premise deployment',
        'Advanced threat hunting',
        'Compliance auditing',
        'Unlimited data transfer',
      ],
      cta: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-4">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-text-secondary max-w-[600px] mx-auto text-lg">
            Choose the plan that fits your infrastructure needs. All plans include 24/7 support and a 99.9% uptime SLA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-bg-card border rounded-[20px] p-10 text-center transition-all duration-400 relative ${
                plan.featured
                  ? 'border-primary scale-105 shadow-[0_20px_40px_rgba(0,212,255,0.1)] hover:scale-105 hover:-translate-y-2.5'
                  : 'border-white/10 hover:-translate-y-2.5 hover:border-primary/30'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-white px-5 py-1 rounded-full text-xs font-bold tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <div className="text-xl font-bold mb-2">{plan.name}</div>
              <div className="text-text-secondary text-sm mb-6">{plan.description}</div>
              <div className="text-5xl font-extrabold mb-2">
                {plan.price}
                {plan.period && <span className="text-base text-text-secondary font-normal">{plan.period}</span>}
              </div>

              <ul className="text-left my-8 space-y-0">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="py-3 border-b border-white/10 last:border-b-0 flex items-center gap-3 text-text-secondary"
                  >
                    <i className="fas fa-check text-primary"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.featured
                    ? 'gradient-primary text-white border-none hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)]'
                    : 'bg-transparent text-text-primary border-2 border-white/10 hover:border-primary hover:bg-primary/10'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
