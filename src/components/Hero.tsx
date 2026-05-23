'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          document.querySelectorAll<HTMLSpanElement>('.stat-number').forEach(stat => {
            const target = parseFloat(stat.dataset.target || '0');
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                stat.textContent = String(target);
                clearInterval(timer);
              } else {
                stat.textContent = String(Math.floor(current));
              }
            }, 20);
          });
        }
      });
    }, { threshold: 0.5 });

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-32 pb-16 px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,212,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 hero-grid-bg" />
      
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <i className="fas fa-cloud absolute text-primary/20 text-3xl top-[20%] left-[10%] animate-float" style={{ animationDelay: '0s' }}></i>
        <i className="fas fa-server absolute text-primary/20 text-3xl top-[60%] left-[15%] animate-float" style={{ animationDelay: '1s' }}></i>
        <i className="fas fa-network-wired absolute text-primary/20 text-3xl top-[30%] right-[10%] animate-float" style={{ animationDelay: '2s' }}></i>
        <i className="fas fa-lock absolute text-primary/20 text-3xl top-[70%] right-[15%] animate-float" style={{ animationDelay: '3s' }}></i>
        <i className="fas fa-code absolute text-primary/20 text-3xl top-[45%] left-[5%] animate-float" style={{ animationDelay: '4s' }}></i>
        <i className="fas fa-shield-virus absolute text-primary/20 text-3xl top-[15%] right-[20%] animate-float" style={{ animationDelay: '5s' }}></i>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[900px]">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-5 py-2 rounded-full text-sm text-primary mb-8">
          <i className="fas fa-bolt"></i>
          Cloud & Security Solutions
        </div>

        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.1] mb-6">
          Enterprise IT Solutions <span className="gradient-text">Made Simple</span>
        </h1>

        <p className="text-xl text-text-secondary max-w-[600px] mx-auto mb-10">
          AWS, Azure, DevOps automation, and enterprise-grade cybersecurity. From startup to enterprise, we deliver robust cloud infrastructure and security solutions tailored to your business.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/contact" className="gradient-primary text-white px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,212,255,0.4)] transition-all duration-300">
            <i className="fas fa-calendar-check"></i>
            Schedule Consultation
          </a>
          <a href="/case-studies" className="bg-transparent text-text-primary px-10 py-4 rounded-full font-semibold text-lg border-2 border-white/10 inline-flex items-center gap-2 hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300">
            <i className="fas fa-briefcase"></i>
            View Case Studies
          </a>
        </div>

        <div ref={statsRef} className="flex justify-center gap-12 mt-16 flex-wrap">
          <div className="text-center">
            <span className="stat-number text-[2.5rem] font-extrabold text-primary" data-target="15">0</span>
            <span className="text-[2.5rem] font-extrabold text-primary">+</span>
            <span className="block text-text-secondary text-sm">Years Combined Experience</span>
          </div>
          <div className="text-center">
            <span className="stat-number text-[2.5rem] font-extrabold text-primary" data-target="50">0</span>
            <span className="text-[2.5rem] font-extrabold text-primary">+</span>
            <span className="block text-text-secondary text-sm">Projects Delivered</span>
          </div>
          <div className="text-center">
            <span className="stat-number text-[2.5rem] font-extrabold text-primary" data-target="99.9">0</span>
            <span className="text-[2.5rem] font-extrabold text-primary">%</span>
            <span className="block text-text-secondary text-sm">Uptime Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
