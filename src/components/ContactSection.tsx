'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('sending');
    setTimeout(() => {
      setSubmitState('sent');
      setTimeout(() => {
        setSubmitState('idle');
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      }, 2000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-4">
              Let&apos;s Talk <span className="text-primary">Security</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Ready to transform your infrastructure? Our team of experts is here to help you design, secure, and optimize your cloud environment.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary text-xl">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5">Email Us</h4>
                  <p className="text-text-secondary text-sm">hello@nexusguard.io</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary text-xl">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5">Call Us</h4>
                  <p className="text-text-secondary text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary text-xl">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5">Visit Us</h4>
                  <p className="text-text-secondary text-sm">100 Cyber Avenue, San Francisco, CA 94105</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary text-xl">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5">Support Hours</h4>
                  <p className="text-text-secondary text-sm">24/7/365 Global Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg-card border border-white/10 rounded-[20px] p-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Business Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="contact-company" className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="contact-service" className="block text-sm font-medium mb-2">Service Interest</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all"
                >
                  <option value="" className="bg-bg-card">Select a service</option>
                  <option value="cloud" className="bg-bg-card">Cloud Infrastructure</option>
                  <option value="devops" className="bg-bg-card">DevOps Automation</option>
                  <option value="network" className="bg-bg-card">Network Engineering</option>
                  <option value="security" className="bg-bg-card">Cybersecurity</option>
                  <option value="data" className="bg-bg-card">Data Protection</option>
                  <option value="monitoring" className="bg-bg-card">Observability & Monitoring</option>
                  <option value="multiple" className="bg-bg-card">Multiple Services</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Tell us about your project</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your infrastructure needs and challenges..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] transition-all resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={submitState !== 'idle'}
                className="w-full gradient-primary text-white py-4 rounded-xl font-semibold hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {submitState === 'idle' && <><i className="fas fa-paper-plane"></i> Send Message</>}
                {submitState === 'sending' && <><i className="fas fa-spinner fa-spin"></i> Sending...</>}
                {submitState === 'sent' && <><i className="fas fa-check"></i> Message Sent!</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
