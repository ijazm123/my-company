export default function CTA() {
  return (
    <section className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/10 rounded-[30px] p-16 relative overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,212,255,0.05)_0%,transparent_70%)] animate-spin [animation-duration:20s]" />
        <div className="relative z-10">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-4">Ready to Transform Your Infrastructure?</h2>
          <p className="text-text-secondary text-lg mb-8 max-w-[500px] mx-auto">
            Get expert guidance on AWS, Azure, DevOps, and security. Schedule a free consultation with our team.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="gradient-primary text-white px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,212,255,0.4)] transition-all duration-300">
              <i className="fas fa-calendar-check"></i>
              Schedule Free Consultation
            </a>
            <a href="/contact" className="bg-transparent text-text-primary px-10 py-4 rounded-full font-semibold text-lg border-2 border-white/10 inline-flex items-center gap-2 hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300">
              <i className="fas fa-envelope"></i>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
