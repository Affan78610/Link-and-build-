import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, CheckCircle2, ChevronRight, Database, ExternalLink, Globe, Layers, LayoutDashboard, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { SEO } from '../components/Core';
import { cn } from '../lib/utils';

const Home = () => {
  return (
    <>
      <SEO 
        title="High Authority Link Building Services"
        description="Scale your rankings with linkandbuild.io. Real traffic, high DR/DA backlinks, and SaaS-focused link building. No PBNs, only ROI."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12 bg-white">
        <div className="section-padding relative z-10 px-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="pill mb-4"
              >
                Better Authority, Lower Cost
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-[48px] font-extrabold leading-[1.1] mb-5 tracking-[-1.5px] text-slate-900"
              >
                Build Authority. <br/><span className="text-primary">Not Just Links.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed"
              >
                Elite SaaS & Agency-grade link building that actually scales rankings. We build real links from sites with real traffic.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-6 mb-10"
              >
                <button className="btn-primary px-8 py-4 text-base">
                  Get High Authority Backlinks
                </button>
                <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                  Turnaround: 7-10 Days
                </div>
              </motion.div>

              <div className="flex gap-6 items-center pt-8 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-slate-900 leading-none">DR 40-90+</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-1">Authority Range</span>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-slate-900 leading-none">0% PBNs</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-1">Safe & Natural</span>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-slate-900 leading-none">5,000+</span>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-1">Links Placed</span>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="visual-card">
                <div className="flex justify-between items-center mb-5">
                  <span className="font-bold text-sm text-slate-900">Organic Growth Visualization</span>
                  <span className="text-slate-400 text-xs font-semibold">Domain Rating (DR)</span>
                </div>
                <div className="h-[120px] flex items-end gap-3 mb-5 px-2">
                  {[20, 35, 30, 50, 45, 75, 100, 110].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      className={cn(
                        "flex-1 rounded-t-sm transition-all duration-500",
                        i >= 6 ? "bg-primary" : "bg-slate-100"
                      )}
                    />
                  ))}
                </div>
                <div className="bg-slate-50 p-4 rounded-lg flex justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">New Referring Domains</div>
                    <div className="text-xl font-extrabold text-primary">+248</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Growth Velocity</div>
                    <div className="text-xl font-extrabold text-slate-900">12.4%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid (Minimal Style) */}
      <section className="section-padding px-10">
        <div className="grid md:grid-cols-3 gap-5">
           {[
             { title: 'Guest Posting', icon: '✍️', desc: 'High-quality editorial mentions on niche-relevant websites with real monthly traffic.' },
             { title: 'Niche Edits', icon: '🎯', desc: 'Secure powerful contextual backlinks by adding your link into existing, aged high-authority articles.' },
             { title: 'SaaS Backlinks', icon: '☁️', desc: 'The gold standard. Hard-to-get links from leading tech platforms and SaaS directories.' }
           ].map((service, i) => (
             <div key={i} className="p-10 border border-slate-200 rounded-xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
               <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                 {service.icon}
               </div>
               <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
               <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Comparison Section (Minimal Table) */}
      <section className="section-padding px-10 pt-10">
        <div className="max-w-[1024px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-4xl font-extrabold tracking-tighter text-slate-900">
              The Authority <br/><span className="text-primary">Standard.</span>
            </h2>
            <p className="text-slate-600 max-w-sm">How linkandbuild.io compares to the average "link vendor" on the market.</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Vetting Metric</th>
                  <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest leading-none text-center">Typical Vendor</th>
                  <th className="px-8 py-5 text-xs font-bold text-primary uppercase tracking-widest leading-none text-center">Our Agency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { m: 'Site Traffic', v: 'Low/Bot', lb: 'Verified Real' },
                  { m: 'Link Type', v: 'PBN/Spam', lb: 'White Hat' },
                  { m: 'Turnaround', v: 'Unknown', lb: '7-10 Days' },
                  { m: 'Reporting', v: 'Manual PDF', lb: 'Live Dashboard' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-slate-900">{row.m}</td>
                    <td className="px-8 py-6 text-center text-slate-400 font-medium">{row.v}</td>
                    <td className="px-8 py-6 text-center text-primary font-extrabold flex items-center justify-center gap-2">
                       <ShieldCheck size={16} /> {row.lb}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 rounded-[3rem] my-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Why linkandbuild.io?</h2>
            <p className="text-slate-600">The standard vs. our authority standard.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
               <thead>
                 <tr className="border-b border-slate-200">
                   <th className="py-6 text-left font-display text-slate-400 uppercase text-xs tracking-widest">Feature</th>
                   <th className="py-6 text-center font-display text-slate-400 uppercase text-xs tracking-widest">Typical Agency</th>
                   <th className="py-6 text-center font-display text-primary uppercase text-xs tracking-widest bg-primary/5 rounded-t-2xl">linkandbuild.io</th>
                 </tr>
               </thead>
               <tbody>
                 {[
                   { f: 'Traffic Sites', t: 'Fake/PBNs', lb: '100% Real Traffic' },
                   { f: 'Content Quality', t: 'AI-Generated', lb: 'Hand-written by Experts' },
                   { f: 'Turnaround', t: '30-45 Days', lb: '14-21 Days' },
                   { f: 'Pricing', t: '2-3x Markup', lb: 'Direct/Wholesale' },
                   { f: 'Transparency', t: 'Black Box', lb: 'Live Dashboard' },
                 ].map((row, i) => (
                   <tr key={i} className="border-b border-slate-100 group">
                     <td className="py-5 font-semibold text-slate-700">{row.f}</td>
                     <td className="py-5 text-center text-slate-400">{row.t}</td>
                     <td className="py-5 text-center font-bold text-slate-900 bg-primary/5 flex items-center justify-center gap-2">
                       <CheckCircle2 size={16} className="text-green-500" /> {row.lb}
                     </td>
                   </tr>
                 ))}
               </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3 Step Process */}
      <section className="section-padding">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Scaling Your SEO in 3 Steps</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0"></div>
          
          {[
            { step: '01', title: 'Consult & Audit', desc: 'We analyze your target URLs and competitors to build a custom link gap analysis.' },
            { step: '02', title: 'Curated Selection', desc: 'You approve the sites from our real-time database or let our experts handle the vetting.' },
            { step: '03', title: 'Live Rankings', desc: 'Links go live, content gets indexed, and you watch your DR and rankings climb.' }
          ].map((item, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-primary flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/10">
                <span className="text-2xl font-bold font-display text-primary">{item.step}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA (Minimal) */}
      <section className="section-padding py-32 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-extrabold tracking-tighter mb-6 text-slate-900">Ready to build <span className="text-primary">Real</span> authority?</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">Join 200+ brands scaling their organic traffic with premium, non-spammy backlinks.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="btn-primary px-10 py-5 text-lg">
               Get Your Free Link Audit
             </button>
             <button className="btn-secondary px-10 py-5 text-lg">
               View All Services
             </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
