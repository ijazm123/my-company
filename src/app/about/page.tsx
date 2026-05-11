export default function AboutPage() {
  const team = [
    {
      name: 'AWS Cloud Expert',
      role: 'Cloud Infrastructure Lead',
      expertise: 'AWS Architecture & Migration',
      bio: 'Deep expertise in designing and implementing scalable AWS infrastructure. Specializes in EC2, RDS, S3, and cost optimization strategies. Certified AWS Solutions Architect.',
      certifications: ['AWS Solutions Architect', 'AWS DevOps Engineer', 'AWS Security Specialist'],
    },
    {
      name: 'Azure Cloud Expert',
      role: 'Multi-Cloud Specialist',
      expertise: 'Azure Services & Hybrid Cloud',
      bio: 'Expert in Azure cloud services, hybrid deployments, and app modernization. Proficient in Azure DevOps, infrastructure, and compliance requirements.',
      certifications: ['Azure Administrator', 'Azure Solutions Architect', 'Azure Security Engineer'],
    },
    {
      name: 'Cybersecurity & Networking Expert',
      role: 'Security & Network Architect',
      expertise: 'Enterprise Security & Network Design',
      bio: 'Veteran in cybersecurity with focus on threat detection, network architecture, and regulatory compliance. Leads security audits and compliance implementations.',
      certifications: ['CISSP', 'Certified Ethical Hacker', 'CompTIA Security+'],
    },
    {
      name: 'DevOps & AIOps Expert',
      role: 'Automation & Operations Lead',
      expertise: 'DevOps, CI/CD & Intelligent Operations',
      bio: 'Automation specialist implementing CI/CD pipelines, IaC, and AIOps solutions. Expert in Kubernetes, Terraform, and monitoring platforms.',
      certifications: ['Kubernetes Administrator', 'Terraform Associate', 'Linux Administrator'],
    },
  ];

  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About TechCore</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            TechCore is a modern IT services company specializing in cloud infrastructure, DevOps automation, and enterprise cybersecurity. 
            Our team of four specialists brings combined expertise in AWS, Azure, network security, and intelligent operations to help businesses of all sizes transform their infrastructure.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Team</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 font-semibold text-sm mb-3">Focus: {member.expertise}</p>
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Certifications:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {member.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-center"><span className="text-blue-600 mr-2">✓</span>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">We deliver high-quality solutions that exceed expectations and drive measurable results.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">We stay ahead of technology trends and implement cutting-edge solutions for our clients.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">We build systems that are secure, scalable, and designed for 24/7 enterprise operations.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
