'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '66be0380-68b3-4ef9-bdb6-946b8c788c8b',
          subject: `New Contact from ${formData.name} — Cloudswag`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-20">
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,212,255,0.1)_0%,transparent_50%)]" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <h1 className="text-5xl font-extrabold mb-6">Contact <span className="gradient-text">Us</span></h1>
          <p className="text-xl text-text-secondary">
            Have questions? Let&apos;s discuss how we can help transform your infrastructure.
          </p>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-extrabold mb-8">Get in <span className="text-primary">Touch</span></h2>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary text-xl">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-0.5">Email Us</h4>
                    <p className="text-text-secondary text-sm">info@cloudswag.com</p>
                    <p className="text-text-secondary text-sm">support@cloudswag.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary text-xl">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-0.5">Call Us</h4>
                    <p className="text-text-secondary text-sm">+91 (8921) 086-692</p>
                    <p className="text-text-secondary text-sm">Mon - Fri: 9am - 6pm IST</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary text-xl">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-0.5">Visit Us</h4>
                    <p className="text-text-secondary text-sm">Kottayam</p>
                    <p className="text-text-secondary text-sm">Kerala, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary text-xl">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-0.5">Follow Us</h4>
                    <p className="text-text-secondary text-sm">LinkedIn · Twitter · GitHub</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-bg-card border border-white/10 rounded-[20px] p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Business Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your infrastructure needs and challenges..."
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full gradient-primary text-white py-4 rounded-xl font-semibold hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === 'sending' ? (
                    <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                  ) : status === 'success' ? (
                    <><i className="fas fa-check"></i> Message Sent!</>
                  ) : status === 'error' ? (
                    <><i className="fas fa-exclamation-triangle"></i> Failed — Try Again</>
                  ) : (
                    <><i className="fas fa-paper-plane"></i> Send Message</>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-green-400 text-sm text-center mt-2">Thank you! We&apos;ll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center mt-2">Something went wrong. Please try again or email us directly.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
