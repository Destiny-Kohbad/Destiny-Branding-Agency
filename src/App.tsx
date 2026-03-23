/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  ArrowRight, 
  Palette, 
  Video, 
  Globe, 
  ShoppingCart, 
  CheckCircle2, 
  Star, 
  Mail, 
  Phone, 
  Instagram, 
  Twitter, 
  Facebook,
  Menu,
  X,
  ChevronRight,
  Zap,
  ShieldCheck,
  Clock,
  Smartphone,
  TrendingUp,
  Cpu,
  Search,
  Rocket
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tight">
          NIGERIA<span className="text-amber-500">BRANDING</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/2349137769312" 
            target="_blank" 
            rel="noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-black px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/2349137769312" 
              target="_blank" 
              rel="noreferrer"
              className="bg-amber-500 text-black text-center py-3 rounded-xl font-bold mt-2"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, items, delay }: { icon: any, title: string, items: string[], delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass p-8 rounded-3xl hover:border-amber-500/50 transition-all group"
  >
    <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-gray-400">
          <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const BenefitCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex gap-5">
    <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-500">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const ProcessStep = ({ number, title, description, icon: Icon, delay }: { number: string, title: string, description: string, icon: any, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative pl-12 pb-12 last:pb-0"
  >
    <div className="absolute left-0 top-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold z-10">
      {number}
    </div>
    <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-white/10 last:hidden" />
    <div className="glass p-8 rounded-3xl ml-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
          <Icon size={24} />
        </div>
        <h4 className="text-2xl font-bold">{title}</h4>
      </div>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, role, content }: { name: string, role: string, content: string }) => (
  <div className="glass p-8 rounded-3xl">
    <div className="flex gap-1 text-amber-500 mb-6">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-lg text-gray-300 italic mb-8 leading-relaxed">"{content}"</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
        {name[0]}
      </div>
      <div>
        <h5 className="font-bold">{name}</h5>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Nigeria Branding Agency, my name is ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/2349137769312?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-bold tracking-wide mb-6 border border-amber-500/20"
            >
              #1 DIGITAL AGENCY IN NIGERIA
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8"
            >
              We Help Nigerian Businesses <span className="text-gradient">Grow Online</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
            >
              From eye-catching graphics to high-converting websites and video ads — we help your brand stand out and make more sales.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="https://wa.me/2349137769312" 
                target="_blank" 
                rel="noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105"
              >
                <MessageCircle size={24} />
                Chat on WhatsApp
              </a>
              <a 
                href="#contact" 
                className="glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 transition-all"
              >
                Get Started
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Premium Services</h2>
            <p className="text-xl text-gray-400">Everything you need to build a powerful online presence that actually brings in customers.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Palette}
              title="Graphics Design"
              items={["Social media flyers", "Business flyers", "Logo design", "Branding kits", "Ad creatives"]}
              delay={0.1}
            />
            <ServiceCard 
              icon={Video}
              title="Video Editing"
              items={["Promotional video ads", "Social media videos", "YouTube editing", "Product videos"]}
              delay={0.2}
            />
            <ServiceCard 
              icon={Globe}
              title="Web Design"
              items={["Business websites", "Landing pages", "Portfolio websites", "SEO Optimization"]}
              delay={0.3}
            />
            <ServiceCard 
              icon={ShoppingCart}
              title="E-commerce"
              items={["Online stores", "Payment integration", "Product pages", "Checkout systems"]}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Why Nigerian Brands <span className="text-amber-500">Trust Us</span>
              </h2>
              <div className="grid gap-10">
                <BenefitCard 
                  icon={TrendingUp}
                  title="Increase Sales & Visibility"
                  description="We don't just make things look pretty; we design with a focus on getting you more customers and sales."
                />
                <BenefitCard 
                  icon={Zap}
                  title="Fast & Reliable Service"
                  description="We respect your time. Get your designs and websites delivered on schedule without compromising quality."
                />
                <BenefitCard 
                  icon={Smartphone}
                  title="Mobile-First Strategy"
                  description="Most Nigerians browse on mobile. We ensure your website looks perfect and loads fast on every phone."
                />
                <BenefitCard 
                  icon={ShieldCheck}
                  title="Affordable for Local Businesses"
                  description="Premium quality doesn't have to break the bank. We offer pricing that works for Nigerian entrepreneurs."
                />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square glass rounded-[40px] overflow-hidden relative z-10">
                <img 
                  src="https://picsum.photos/seed/agency/800/800" 
                  alt="Agency Work" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass p-8 rounded-3xl text-center max-w-xs">
                    <div className="text-5xl font-bold text-amber-500 mb-2">100+</div>
                    <div className="text-gray-300 font-medium uppercase tracking-widest text-sm">Happy Clients in Nigeria</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Helps */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">How We Help Your Business</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Build Trust", desc: "A professional brand image makes customers trust you instantly." },
              { title: "Get More Customers", desc: "High-converting designs turn random scrollers into paying clients." },
              { title: "Automate Sales", desc: "Your website works 24/7, taking orders while you sleep." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/2">
                <div className="text-amber-500 font-bold text-4xl mb-6">0{i+1}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section id="process" className="py-24 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Our Creative <span className="text-amber-500">Process</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We follow a proven strategy to ensure every project we touch turns into a success story for your brand.
              </p>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <ProcessStep 
                number="1" 
                title="Discovery & Strategy" 
                description="We start by understanding your business goals, target audience, and competitors in the Nigerian market." 
                icon={Search}
                delay={0.1}
              />
              <ProcessStep 
                number="2" 
                title="Creative Design" 
                description="Our designers craft modern, eye-catching visuals and user interfaces that resonate with your brand identity." 
                icon={Palette}
                delay={0.2}
              />
              <ProcessStep 
                number="3" 
                title="Development & Refinement" 
                description="We build high-performance websites and edit high-impact videos with attention to every single detail." 
                icon={Cpu}
                delay={0.3}
              />
              <ProcessStep 
                number="4" 
                title="Launch & Growth" 
                description="We launch your project and provide the tools you need to scale your business and get more customers." 
                icon={Rocket}
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-brand-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Chidi Okafor" 
              role="CEO, Lagos Fashion Hub" 
              content="Nigeria Branding Agency transformed our online store. Our sales increased by 40% in the first month after the new website launch!" 
            />
            <TestimonialCard 
              name="Amina Bello" 
              role="Founder, Northern Delights" 
              content="The logo and social media flyers they designed are top-notch. I get compliments from my customers every day." 
            />
            <TestimonialCard 
              name="Tunde Johnson" 
              role="Real Estate Agent" 
              content="Fast delivery and very professional. The video ad they made for my new property listing went viral on Instagram." 
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[40px] overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16 bg-amber-500 text-black">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Let's Build Your Brand Together</h2>
                <p className="text-xl mb-12 opacity-90">Ready to take your business to the next level? Send us a message and we'll get back to you within 24 hours.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-widest opacity-70">Email Us</div>
                      <div className="text-xl font-bold">destinyayeni14@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-widest opacity-70">Call / WhatsApp</div>
                      <div className="text-xl font-bold">09137769312</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 md:p-16">
                <form onSubmit={handleWhatsAppSend} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">How can we help?</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <button 
                      type="submit"
                      className="bg-amber-500 hover:bg-amber-600 text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
                    >
                      <MessageCircle size={20} />
                      Send to WhatsApp
                    </button>
                    <a 
                      href={`mailto:destinyayeni14@gmail.com?subject=Inquiry from Website&body=Name: ${formData.name}%0D%0AMessage: ${formData.message}`}
                      className="glass hover:bg-white/10 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
                    >
                      <Mail size={20} />
                      Send Email
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <a href="#" className="text-2xl font-display font-bold tracking-tight mb-6 block">
                NIGERIA<span className="text-amber-500">BRANDING</span>
              </a>
              <p className="text-gray-400 text-lg max-w-sm mb-8">
                Helping Nigerian businesses grow with world-class design, video, and web solutions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase tracking-widest text-sm text-amber-500">Quick Links</h5>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">Why Us</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase tracking-widest text-sm text-amber-500">Contact Info</h5>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Mail size={18} />
                  destinyayeni14@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} />
                  09137769312
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={18} />
                  Nigeria
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Nigeria Branding Agency. All rights reserved. Designed by Destiny Ayeni.
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/2349137769312"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20"
      >
        <MessageCircle size={32} fill="currentColor" />
      </motion.a>
    </div>
  );
}
