import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, Phone, Send, ShieldCheck, Star } from 'lucide-react';
import { SEO } from '../components/Core';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Our Link Building Experts"
        description="Get a free backlink audit and strategy roadmap. Talk to a linkandbuild.io consultant today and start scaling your domain authority."
      />

      <section className="section-padding pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Let’s <span className="text-gradient">Scale</span> Your Rankings.</h1>
            <p className="text-xl text-gray-600 mb-12">
              Whether you're a SaaS founder or an agency owner, we’re here to help you get the highest authority placements on the web.
            </p>

            <div className="space-y-10">
              <a href="mailto:affanshaihk@linkandbuild.io" className="flex gap-6 group hover:translate-x-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Direct Outreach</h4>
                  <p className="text-slate-600 font-medium tracking-tight">affanshaihk@linkandbuild.io</p>
                </div>
              </a>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Live Strategy</h4>
                  <p className="text-slate-600">Consultations available via Zoom/Slack.</p>
                </div>
              </div>
            </div>

            {/* Testimonial Snippet */}
            <div className="mt-20 p-8 glass-card rounded-[2rem] border border-gray-100">
               <div className="flex gap-1 mb-4">
                 {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
               </div>
               <p className="text-lg text-slate-700 italic mb-6">"linkandbuild.io is the only agency we trust for our enterprise SaaS portfolio. They understand the nuances of tech SEO like no other."</p>
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                 <div>
                   <p className="font-bold">Marcus Thorne</p>
                   <p className="text-sm text-gray-500">Director of Growth @ TechStack</p>
                 </div>
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="mb-10 text-center">
              <h3 className="text-2xl font-bold mb-2">Get Your Free Link Audit</h3>
              <p className="text-gray-500">We respond to all inquiries in under 24 hours.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                   <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700 ml-1">Work Email</label>
                   <input type="email" placeholder="john@saas.com" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                 </div>
               </div>
               
               <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-700 ml-1">Website URL</label>
                 <input type="url" placeholder="https://yourbrand.com" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
               </div>

               <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-700 ml-1">Service of Interest</label>
                 <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium appearance-none">
                    <option>Guest Posting</option>
                    <option>Niche Edits</option>
                    <option>SaaS Authority Links</option>
                    <option>All Services / Agency Bulk</option>
                 </select>
               </div>

               <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                 <textarea rows={4} placeholder="What are your ranking goals?" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"></textarea>
               </div>

               <button className="w-full py-5 bg-primary text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary-hover active:scale-95 transition-all flex items-center justify-center gap-2">
                 Send Inquiry <Send size={18} />
               </button>
               
               <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-2">
                 <ShieldCheck size={14} /> Your data is safe and will never be shared. No SPAM.
               </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
