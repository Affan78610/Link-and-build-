import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart3, Database, Globe, Layers, Mail, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-[1024px] mx-auto px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group font-extrabold text-xl tracking-tighter">
          <span className="text-primary">linkandbuild.io</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.href ? "text-primary" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary">
            Free Audit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary text-center">
                Free Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-[1024px] mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-20">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6 font-extrabold text-xl tracking-tighter">
            <span className="text-primary">linkandbuild.io</span>
          </Link>
          <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-sm">
            The high-authority link building agency built for SaaS, SEO agencies, and performance-driven brands. No PBNs, only real traffic.
          </p>
          <div className="flex gap-4">
             {/* Social placeholders */}
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
               <Globe size={18} />
             </div>
             <a href="mailto:affanshaihk@linkandbuild.io" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
               <Mail size={18} />
             </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-display text-lg font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/services" className="hover:text-white transition-colors">Guest Posting</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Niche Edits</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">SaaS Link Building</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Agency Scalability</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/blog" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Our Process</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Guide</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Link Audit</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2026 linkandbuild.io - High Authority Backlinks. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="#" className="hover:text-white transition-colors">Terms</Link>
          <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };
