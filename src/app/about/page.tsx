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
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,212,255,0.1)_0%,transparent_50%)]" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">About <span className="gradient-text">Cloudswag Technologies</span></h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            Cloudswag Technologies is a modern IT services company specializing in cloud infrastructure, DevOps automation, and enterprise cybersecurity.
            Our team of four specialists brings combined expertise in AWS, Azure, network security, and intelligent operations to help businesses of all sizes transform their infrastructure.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-16 text-center">Our <span className="text-primary">Team</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-bg-card border border-white/10 rounded-[20px] p-8 card-hover relative overflow-hidden group">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-text-secondary font-semibold text-sm mb-3">Focus: {member.expertise}</p>
                <p className="text-text-secondary mb-4">{member.bio}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold mb-2">Certifications:</p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    {member.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-center"><i className="fas fa-check text-success text-xs mr-2"></i>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-gradient-to-b from-bg-dark via-bg-card/50 to-bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-12">Our <span className="text-primary">Values</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-bg-card border border-white/10 rounded-[20px] p-8 card-hover relative overflow-hidden">
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary text-xl mb-4">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-text-secondary">We deliver high-quality solutions that exceed expectations and drive measurable results.</p>
            </div>
            <div className="bg-bg-card border border-white/10 rounded-[20px] p-8 card-hover relative overflow-hidden">
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary text-xl mb-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-text-secondary">We stay ahead of technology trends and implement cutting-edge solutions for our clients.</p>
            </div>
            <div className="bg-bg-card border border-white/10 rounded-[20px] p-8 card-hover relative overflow-hidden">
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary text-xl mb-4">
                <i className="fas fa-shield-halved"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Reliability</h3>
              <p className="text-text-secondary">We build systems that are secure, scalable, and designed for 24/7 enterprise operations.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
