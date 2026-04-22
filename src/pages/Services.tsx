import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Database, Layers, MessageSquare, Rocket, Search, Target, TrendingUp, Zap } from 'lucide-react';
import { SEO } from '../components/Core';

const Services = () => {
  const serviceCategories = [
    {
      id: 'guest-posting',
      title: 'High-Authority Guest Posting',
      tag: 'Most Popular',
      desc: 'Secure high-quality backlinks from established websites in your specific niche. We handle the outreach, the content creation, and the placement.',
      features: ['Hand-written 1000+ word articles', 'Niche-relevant websites only', 'Do-follow permanent links', 'Real traffic (checked via Ahrefs/Semrush)'],
      metrics: 'DR 40 - 85+',
      icon: <Layers className="text-blue-500" />
    },
    {
      id: 'niche-edits',
      title: 'Curated Niche Edits',
      tag: 'Fastest Indexing',
      desc: 'Get links within existing articles that already have age, authority, and traffic. These "link inserts" are the secret weapon of SEO veterans.',
      features: ['Instant authority transfer', 'Articles already indexed by Google', 'High contextual relevance', 'Natural integration into top-performing content'],
      metrics: 'DR 30 - 80+',
      icon: <Database className="text-purple-500" />
    },
    {
      id: 'saas-backlinks',
      title: 'SaaS Authority Link Building',
      tag: 'Strategic Growth',
      desc: 'High-tier placements specifically targeted for SaaS brands. Links from major tech publications, startup directories, and industry giants.',
      features: ['Tech & Business focused outlets', 'Brand mentions + anchor text strategy', 'Consultative approach', 'Competitor gap closure'],
      metrics: 'DR 70 - 90+',
      icon: <Rocket className="text-brand-primary" />
    }
  ];

  return (
    <>
      <SEO 
        title="Premium Link Building Services"
        description="Explore our Guest Posting, Niche Edits, and SaaS Backlink strategies. Built for high performance SEO and real business growth."
      />

      <section className="section-padding pt-32 pb-20 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold mb-6"
        >
          OUR SERVICES
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter max-w-4xl mx-auto">
          Link Building That <span className="text-gradient">Actually Moves</span> The Needle.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          We don't sell "links." We sell growth, authority, and the peace of mind that your domain is being powered by the best websites on the internet.
        </p>
      </section>

      {/* Service Detail Blocks */}
      <section className="pb-32 space-y-24 px-6 max-w-7xl mx-auto">
        {serviceCategories.map((service, idx) => (
          <div 
            key={service.id} 
            id={service.id}
            className={`grid md:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={idx % 2 !== 0 ? 'md:order-2' : ''}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-surface-gray border border-gray-100 flex items-center justify-center shadow-sm">
                  {service.icon}
                </div>
                <span className="text-sm font-bold text-brand-primary tracking-widest uppercase">{service.tag}</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="space-y-4 mb-10">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Zap size={18} className="text-brand-primary mt-1 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <button className="btn-primary">View Packages</button>
                <div className="px-4 py-2 bg-surface-gray border border-gray-100 rounded-lg text-xs font-mono font-bold">
                  {service.metrics}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className={`aspect-video rounded-xl bg-slate-50 border border-slate-200 relative group overflow-hidden ${idx % 2 !== 0 ? 'md:order-1' : ''}`}
            >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
               {/* Abstract visual representation of service */}
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-100 group-hover:text-primary/10 transition-colors">
                  {idx === 0 && <BookOpen size={120} strokeWidth={1} />}
                  {idx === 1 && <Search size={120} strokeWidth={1} />}
                  {idx === 2 && <TrendingUp size={120} strokeWidth={1} />}
               </div>
               <div className="absolute bottom-6 left-6 right-6 p-5 visual-card group-hover:-translate-y-1 transition-transform">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Target Metric</p>
                      <p className="text-lg font-bold text-slate-900">SEO Dominance</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                      <Target size={16} />
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Use Cases Section */}
      <section className="bg-surface-gray py-24 rounded-[4rem]">
        <div className="section-padding">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold mb-4">When to use which service?</h2>
             <p className="text-gray-600">The right tool for the right SEO goal.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Scaling Rankings', use: 'Guest Posting', desc: 'When you have high-quality content that just needs an authority boost to break into Top 3.' },
                { title: 'Brand Credibility', use: 'SaaS Backlinks', desc: 'When you need to look like an industry leader to both Google and your customers.' },
                { title: 'Quick SERP Jumps', use: 'Niche Edits', desc: 'When you need fast results by piggybacking on indexed articles with historical weight.' },
                { title: 'Agency Fulfillment', use: 'All Services', desc: 'When you need a scalable white-label partner that can handle hundreds of links monthly.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <div className="text-brand-primary font-bold text-sm mb-4 uppercase tracking-tighter">{item.use}</div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-32 text-center">
         <h2 className="text-4xl md:text-6xl font-bold mb-8">Not sure which one you need?</h2>
         <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Our SEO strategists will analyze your site for free and build a custom link building roadmap.</p>
         <div className="flex justify-center gap-6">
           <button className="btn-primary px-10 py-5">Book a Strategy Session</button>
         </div>
      </section>
    </>
  );
};

export default Services;
