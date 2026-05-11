export default function CTA() {
  return (
    <section className="py-20 gradient-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
        <p className="text-xl mb-8 opacity-90">
          Get expert guidance on AWS, Azure, DevOps, and security. Schedule a free consultation with our team.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
            Schedule Free Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
