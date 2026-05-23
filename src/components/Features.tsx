export default function Features() {
  const features = [
    { icon: 'fa-cloud', title: 'Multi-Cloud Expertise', description: 'Seamless integration across AWS and Azure platforms' },
    { icon: 'fa-headset', title: '24/7 Support', description: 'Round-the-clock monitoring and support for your infrastructure' },
    { icon: 'fa-chart-line', title: 'Cost Optimization', description: 'Reduce cloud spend by up to 40% with intelligent resource management' },
    { icon: 'fa-shield-halved', title: 'Security First', description: 'Enterprise-grade security and compliance by default' },
    { icon: 'fa-expand', title: 'Scalability', description: 'Infrastructure that grows with your business needs' },
    { icon: 'fa-users', title: 'Expert Team', description: 'Certified cloud architects with 50+ completed projects' },
  ];

  return (
    <section id="features" className="py-24 px-8 bg-gradient-to-b from-bg-dark via-bg-card/50 to-bg-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-4">
            Why Choose <span className="text-primary">Cloudswag Technologies</span>?
          </h2>
          <p className="text-text-secondary max-w-[600px] mx-auto text-lg">
            Industry-leading expertise and results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-bg-card border border-white/10 rounded-[20px] p-8 card-hover relative overflow-hidden group text-center">
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[15px] flex items-center justify-center text-2xl text-primary mb-6 mx-auto transition-all duration-300 group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:scale-110">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
