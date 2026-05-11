export default function Features() {
  const features = [
    {
      title: 'Multi-Cloud Expertise',
      description: 'Seamless integration across AWS and Azure platforms',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for your infrastructure',
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce cloud spend by up to 40% with intelligent resource management',
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security and compliance by default',
    },
    {
      title: 'Scalability',
      description: 'Infrastructure that grows with your business needs',
    },
    {
      title: 'Expert Team',
      description: 'Certified cloud architects with 50+ completed projects',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">Industry-leading expertise and results</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
