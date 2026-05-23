export default function Services() {
  const services = [
    {
      icon: 'fa-aws',
      iconPrefix: 'fab',
      title: 'AWS Cloud Solutions',
      description: 'Complete AWS expertise from architecture design to production optimization.',
      features: ['Architecture Design & Migration', 'EC2, RDS, S3 Optimization', 'Cost Optimization & Monitoring', 'AWS Security Best Practices'],
    },
    {
      icon: 'fa-microsoft',
      iconPrefix: 'fab',
      title: 'Azure Cloud Solutions',
      description: 'Enterprise Azure services for hybrid and multi-cloud environments.',
      features: ['Azure Infrastructure Setup', 'App Migration & Modernization', 'Azure DevOps Integration', 'Compliance & Identity Management'],
    },
    {
      icon: 'fa-gears',
      iconPrefix: 'fas',
      title: 'DevOps & AIOps',
      description: 'Modern automation, CI/CD pipelines, and intelligent operations management.',
      features: ['CI/CD Pipeline Automation', 'Infrastructure as Code (Terraform)', 'Kubernetes & Container Orchestration', 'Monitoring & AIOps Implementation'],
    },
    {
      icon: 'fa-shield-halved',
      iconPrefix: 'fas',
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security audits, threat detection, and regulatory compliance.',
      features: ['Penetration Testing & Assessment', 'Network Security Architecture', 'SOC2 & ISO27001 Compliance', 'Incident Response & Threat Mgmt'],
    },
  ];

  return (
    <section id="services" className="py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-text-secondary max-w-[600px] mx-auto text-lg">
            Comprehensive cloud and infrastructure solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-bg-card border border-white/10 rounded-[20px] p-10 card-hover relative overflow-hidden group">
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[15px] flex items-center justify-center text-2xl text-primary mb-6 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:scale-110">
                <i className={`${service.iconPrefix} ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-text-secondary text-sm flex items-center gap-2">
                    <i className="fas fa-check text-success text-xs"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
