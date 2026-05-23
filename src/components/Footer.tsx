export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-card border-t border-white/10 pt-16 pb-8 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="/" className="text-2xl font-extrabold text-primary flex items-center gap-2 mb-4">
              <i className="fas fa-cloud text-[1.8rem]"></i>
              Cloudswag Technologies
            </a>
            <p className="text-text-secondary leading-relaxed mt-4">
              Enterprise cloud infrastructure, DevOps automation, and cybersecurity solutions.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-text-secondary hover:text-primary transition-colors">AWS Solutions</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-primary transition-colors">Azure Services</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-primary transition-colors">DevOps</a></li>
              <li><a href="#services" className="text-text-secondary hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-text-secondary hover:text-primary transition-colors">About</a></li>
              <li><a href="/case-studies" className="text-text-secondary hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:info@cloudswagtech.com" className="text-text-secondary hover:text-primary transition-colors">Email: info@cloudswagtech.com</a></li>
              <li><a href="tel:+1234567890" className="text-text-secondary hover:text-primary transition-colors">Phone: +1 (234) 567-890</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-wrap justify-between items-center gap-4 text-text-secondary text-sm">
          <p>&copy; {currentYear} Cloudswag Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
