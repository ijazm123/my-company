export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">TechCore</h3>
            <p className="text-sm">Enterprise cloud infrastructure, DevOps automation, and cybersecurity solutions.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">AWS Solutions</a></li>
              <li><a href="#" className="hover:text-white transition">Azure Services</a></li>
              <li><a href="#" className="hover:text-white transition">DevOps</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:info@techcore.io" className="hover:text-white transition">info@techcore.io</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm">
            © {currentYear} TechCore. All rights reserved. | 
            <a href="#" className="hover:text-white ml-2 transition">Privacy Policy</a> | 
            <a href="#" className="hover:text-white ml-2 transition">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
