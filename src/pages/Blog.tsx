import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronRight, Hash, MessageSquare, Search, Tag } from 'lucide-react';
import { SEO } from '../components/Core';

const Blog = () => {
  const categories = ['Link Building', 'SaaS Growth', 'Agency Scaling', 'SEO Strategy', 'Case Studies'];
  
  const featuredPost = {
    title: 'The 2026 SaaS Link Building Guide: Dominating DR 90+ Placements',
    excerpt: 'How we helped a Series B fintech startup grow from 10k to 250k monthly sessions using structured link silos.',
    category: 'SaaS Growth',
    date: 'Apr 12, 2026',
    readTime: '12 min read'
  };

  const commonTopics = [
    { title: 'Guest Posting vs. Niche Edits: Which is better for ROI?', cat: 'Link Building' },
    { title: 'How to get high DR backlinks with a $0 budget', cat: 'SEO Strategy' },
    { title: 'Why white-hat agencies are winning in the AI-search era', cat: 'Agency Scaling' },
    { title: 'Our exact process for vetting "Real Traffic" websites', cat: 'Link Building' },
    { title: 'Scaling link building from 10 to 500 links per month', cat: 'Agency Scaling' },
    { title: 'Internal linking secrets that amplify backlink power', cat: 'SEO Strategy' }
  ];

  return (
    <>
      <SEO 
        title="SEO & Link Building Blog | Scaling Organic Growth"
        description="Learn the latest link building strategies, SaaS SEO case studies, and agency scaling tactics from the experts at linkandbuild.io."
      />

      <section className="section-padding pt-32 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Authority <span className="text-gradient">Insights</span></h1>
            <p className="text-xl text-gray-600">The latest in link building, SaaS SEO, and search dominance.</p>
          </div>
          
          <div className="flex gap-2 pb-2">
             <div className="relative group">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-brand-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search tactics..." 
                  className="bg-surface-gray border border-gray-200 rounded-xl pl-12 pr-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 w-64"
                />
             </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-16">
           {categories.map((cat) => (
             <button key={cat} className="px-5 py-2 rounded-full border border-gray-100 bg-white text-sm font-semibold hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm">
                {cat}
             </button>
           ))}
        </div>

        {/* Featured Post */}
        <div className="relative group rounded-[3rem] overflow-hidden bg-brand-dark text-white p-12 md:p-20 mb-20 shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent opacity-50"></div>
           <div className="relative z-10 max-w-2xl">
             <div className="flex items-center gap-4 mb-6 text-sm font-bold text-brand-primary uppercase tracking-widest">
               <Tag size={14} /> {featuredPost.category}
             </div>
             <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight group-hover:text-blue-200 transition-colors cursor-pointer">
               {featuredPost.title}
             </h2>
             <p className="text-gray-400 text-lg mb-10 leading-relaxed">
               {featuredPost.excerpt}
             </p>
             <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 font-mono">
               <span className="flex items-center gap-2"><Calendar size={14} /> {featuredPost.date}</span>
               <span className="w-1 h-1 rounded-full bg-gray-700"></span>
               <span>{featuredPost.readTime}</span>
             </div>
             <button className="flex items-center gap-2 font-bold hover:gap-4 transition-all">
               Read Case Study <ChevronRight size={18} />
             </button>
           </div>
        </div>

        {/* Grid Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
           {commonTopics.map((post, i) => (
             <motion.div 
              whileHover={{ y: -5 }}
              key={i} 
              className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-brand-primary/5 transition-all group cursor-pointer"
             >
               <div className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                 <Hash size={12} /> {post.cat}
               </div>
               <h3 className="text-xl font-bold mb-4 line-clamp-2 min-h-[3.5rem] group-hover:text-brand-primary transition-colors">{post.title}</h3>
               <p className="text-sm text-gray-500 mb-8 line-clamp-3">Master the latest anchor text strategies and silo structures used by top SEO agencies in 2026.</p>
               <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                 <span>8 min read</span>
                 <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                   <ChevronRight size={14} />
                 </div>
               </div>
             </motion.div>
           ))}
        </div>

        {/* Topics List for SEO (Internal Linking strategy) */}
        <div className="p-12 bg-surface-gray rounded-[2.5rem]">
           <h3 className="text-2xl font-bold mb-8">Popular Resource Categories</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {['Guest Posting Guides', 'White Label Outreach', 'Link Velocity Tactics', 'E-E-A-T & Backlinks', 'SaaS Ranking Factors', 'Casino/Lotto Edits', 'E-com Link Building', 'Local SEO Citations'].map((link) => (
               <a key={link} href="#" className="text-gray-600 hover:text-brand-primary transition-colors text-sm flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div> {link}
               </a>
             ))}
           </div>
        </div>
      </section>

      {/* Suggested Topics Sidebar/Content Block (Per user request) */}
      <section className="section-padding py-20 border-t border-gray-100">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Suggested Agency Topics</h2>
            <div className="grid md:grid-cols-2 gap-4">
               {[
                 'Ultimate Guide to SaaS Link Building',
                 'How to Spot a PBN (And Why to Avoid Them)',
                 'Anchor Text Optimization in 2026',
                 'Building Links for B2B Tech Platforms',
                 'White Hat vs. Grey Hat in Enterprise SEO',
                 'Maximizing DR gains with Niche Edits'
               ].map((topic) => (
                 <div key={topic} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:bg-surface-gray transition-colors">
                   <MessageSquare className="text-brand-primary" size={16} />
                   <span className="text-sm font-medium">{topic}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </>
  );
};

export default Blog;
