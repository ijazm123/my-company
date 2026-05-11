export default function Services() {
  const services = [
    {
      icon: '☁️',
      title: 'AWS Cloud Solutions',
      description: 'Complete AWS expertise from architecture design to production optimization.',
      features: ['Architecture Design & Migration', 'EC2, RDS, S3 Optimization', 'Cost Optimization & Monitoring', 'AWS Security Best Practices'],
    },
    {
      icon: '🔷',
      title: 'Azure Cloud Solutions',
      description: 'Enterprise Azure services for hybrid and multi-cloud environments.',
      features: ['Azure Infrastructure Setup', 'App Migration & Modernization', 'Azure DevOps Integration', 'Compliance & Identity Management'],
    },
    {
      icon: '⚙️',
      title: 'DevOps & AIOps',
      description: 'Modern automation, CI/CD pipelines, and intelligent operations management.',
      features: ['CI/CD Pipeline Automation', 'Infrastructure as Code (Terraform)', 'Kubernetes & Container Orchestration', 'Monitoring & AIOps Implementation'],
    },
    {
      icon: '🔒',
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security audits, threat detection, and regulatory compliance.',
      features: ['Penetration Testing & Assessment', 'Network Security Architecture', 'SOC2 & ISO27001 Compliance', 'Incident Response & Threat Mgmt'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive cloud and infrastructure solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center">
                    <span className="text-blue-600 mr-2">✓</span> {feature}
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
