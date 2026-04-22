import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ShieldCheck, Zap } from 'lucide-react';
import { SEO } from '../components/Core';
import { cn } from '../lib/utils';

const Pricing = () => {
  const [activePlan, setActivePlan] = React.useState('monthly');
  const [drFilter, setDrFilter] = React.useState('DR 40+');

  const plans = [
    {
      name: 'Starter Build',
      price: 499,
      description: 'Perfect for small niche sites or testing our quality.',
      features: ['3 High-DR Guest Posts', 'DA/DR 40-50+ Guaranteed', '100% Real Traffic Sites', 'Detailed Reporting', '7-14 Day Turnaround'],
      cta: 'Start Building',
      popular: false
    },
    {
      name: 'Authority Scale',
      price: 1499,
      description: 'The standard for growth-focused SaaS and ecom brands.',
      features: ['10 Premium Placements', 'Mix of Guest Posts & Edits', 'DR 50-70+ Guaranteed', 'Dedicated Account Manager', 'Keyword Gap Analysis', 'Internal Link Strategy'],
      cta: 'Scale Now',
      popular: true
    },
    {
      name: 'Agency Dominance',
      price: 3999,
      description: 'Wholesale pricing for agencies scaling client rankings.',
      features: ['30+ Authority Links', 'Custom DR Mix (up to 90+)', 'White-label Reporting', 'Priority Queue Status', 'API Access for Tracking', 'Strategic Link Silos'],
      cta: 'Contact for Bulk',
      popular: false
    }
  ];

  return (
    <>
      <SEO 
        title="Transparent Link Building Pricing"
        description="Premium backlinks at wholesale rates. Choose from our tiered packages or get a custom quote for agency-scale volume."
      />

      <section className="section-padding pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
          ROI-Focused <span className="text-gradient">Pricing</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          No hidden fees. No recurring "management" bloat. Just the high-power links you need to rank.
        </p>

        {/* Pricing Filters Mock UI */}
        <div className="inline-flex items-center p-1 bg-surface-gray border border-gray-200 rounded-2xl mb-12">
           {['DR 40+', 'DR 60+', 'DR 80+'].map((f) => (
             <button
               key={f}
               onClick={() => setDrFilter(f)}
               className={cn(
                 "px-6 py-2 rounded-xl text-sm font-bold transition-all",
                 drFilter === f ? "bg-white shadow-sm text-brand-primary" : "text-gray-500 hover:text-brand-dark"
               )}
             >
               {f}
             </button>
           ))}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 px-6 max-w-[1024px] mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative p-8 rounded-xl border transition-all",
                plan.popular 
                  ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200 scale-105 z-10" 
                  : "bg-white text-slate-900 border-slate-200 hover:border-primary/30"
              )}
            >
              {plan.popular && (
                <div className="pill absolute -top-3 left-1/2 -translate-x-1/2 shadow-sm">
                  Recommended
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={cn("text-xl font-bold mb-1 tracking-tight", plan.popular ? "text-white" : "text-slate-900")}>{plan.name}</h3>
                <p className={cn("text-xs font-medium", plan.popular ? "text-slate-400" : "text-slate-500")}>{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold">$</span>
                  <span className="text-5xl font-extrabold tracking-tighter">{plan.price}</span>
                  <span className={cn("text-xs font-bold uppercase tracking-widest ml-1", plan.popular ? "text-slate-500" : "text-slate-400")}>/mo</span>
                </div>
              </div>

              <ul className="space-y-3 mb-10">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check size={14} className={plan.popular ? "text-primary" : "text-primary"} />
                    <span className={cn("text-sm font-medium", plan.popular ? "text-slate-200" : "text-slate-700")}>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-4 rounded-md font-bold text-sm transition-all",
                plan.popular 
                  ? "bg-primary text-white hover:bg-primary-hover" 
                  : "bg-slate-100 text-slate-900 hover:bg-primary hover:text-white"
              )}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Agency Mention */}
        <div className="mt-20 p-10 bg-surface-gray border border-gray-200 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
             <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">
               <Zap className="text-brand-primary animate-pulse" />
             </div>
             <div>
               <h4 className="text-2xl font-bold">Scaling an Agency?</h4>
               <p className="text-gray-600">Get custom white-label pricing for volumes over 50 links/month.</p>
             </div>
           </div>
           <button className="btn-secondary px-8 py-4 font-bold border-brand-dark/10">Inquire About Bulk Discounts</button>
        </div>
      </section>

      {/* Risk Reversal / Guarantees */}
      <section className="bg-brand-dark py-24 text-white">
        <div className="section-padding grid md:grid-cols-3 gap-12 text-center">
           {[
             { title: 'Strict Quality Guarantee', desc: 'If a link doesn’t meet the DR or Traffic criteria we promised, we replace it for free within 24 hours.' },
             { title: 'No PBNs Ever', desc: 'We only build links on real websites with historical traffic records. Zero risk of search engine penalties.' },
             { title: 'Indexation Support', desc: 'All links are monitored for indexing. If a link isn’t indexed in 30 days, we perform additional manual pings.' }
           ].map((g, i) => (
             <div key={i}>
                <ShieldCheck className="mx-auto mb-6 text-brand-primary" size={48} />
                <h3 className="text-xl font-bold mb-4">{g.title}</h3>
                <p className="text-gray-400 leading-relaxed">{g.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How long until my links go live?', a: 'Typically 14-21 days. We handle the outreach and content creation phases with strict quality filters before anything goes live.' },
              { q: 'Are these permanent links?', a: 'Yes. We guarantee all links for at least 12 months, although 99.9% of our placements are permanent for the life of the website.' },
              { q: 'Do you provide reports?', a: 'Absolutely. You get a real-time tracking link where you can see live links, anchor text, and current DR/Traffic metrics of the target sites.' },
              { q: 'Can I approve the sites first?', a: 'Yes, on our Scale and Agency plans, you get full approval rights on the domain selection before we start any outreach.' }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-surface-gray border border-gray-100 rounded-2xl group cursor-default">
                <h4 className="font-bold text-lg mb-2 flex items-center justify-between">
                  {faq.q}
                  <Info size={16} className="text-gray-400 group-hover:text-brand-primary transition-colors" />
                </h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
