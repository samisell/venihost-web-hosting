import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/src/components/SEO';
import OptimizedImage from '@/src/components/OptimizedImage';
import { blogPosts } from '@/src/data/blogPosts';

const Blog = () => {
    // Structured Data for BlogListing
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Venihost Blog - Web Hosting Insights & Enterprise Tech",
        "url": "https://venihost.com.ng/blog",
        "publisher": {
            "@type": "Organization",
            "name": "Venihost",
            "logo": "https://venihost.com.ng/logo.png"
        },
        "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "datePublished": post.date,
            "author": { "@type": "Person", "name": post.author },
            "image": post.image,
            "abstract": post.excerpt
        }))
    };

    return (
        <div className="pt-20">
            <SEO 
                title="Blog | Web Hosting Insights & Enterprise Tech Updates"
                description="Stay updated with the latest trends in web hosting, cloud infrastructure, and enterprise software solutions from the Venihost experts. Technical guides and industry news."
                keywords="web hosting blog nigeria, cloud tech news, enterprise software updates, venihost news, website tips"
                structuredData={structuredData}
            />
            {/* Hero */}
            <section className="bg-primary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <OptimizedImage 
                        src="/data-center-programmer-uses-node-tree-software-identify-equipment-issues.jpg" 
                        alt="Blog Background" 
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">Insightful <span className="text-secondary">Updates</span></h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Stay ahead of the curve with expert perspectives on the latest in hosting technology, digital security, and enterprise growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post, i) => (
                            <motion.article 
                                key={i}
                                initial={{ opacity: 0, scale:0.95 }}
                                whileInView={{ opacity: 1, scale:1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full"
                            >
                                <div className="h-64 overflow-hidden">
                                    <OptimizedImage 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="group-hover:scale-110 transition-transform duration-700" 
                                    />
                                </div>
                                <div className="p-10 flex-grow">
                                    <div className="flex items-center gap-6 text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">
                                        <div className="flex items-center gap-2"><Calendar size={16} className="text-secondary" /> {post.date}</div>
                                        <div className="flex items-center gap-2"><User size={16} className="text-secondary" /> {post.author}</div>
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed mb-8">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto">
                                        <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all group/btn">
                                            Read More 
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover/btn:bg-secondary group-hover/btn:text-white transition-all">
                                                <ArrowRight size={20} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="px-12 py-5 bg-white text-primary border border-slate-200 rounded-full font-bold text-xl hover:bg-slate-50 transition-all flex items-center gap-4 mx-auto">
                            <BookOpen size={24} /> View Archived News
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter Integration (SEO value) */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="bg-secondary p-12 md:p-20 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center text-white">
                        <div className="absolute inset-0 opacity-10">
                            <OptimizedImage 
                                src="/smiling-engineer-using-laptop-data-center-oversee-hardware.jpg" 
                                alt="Newsletter BG" 
                                className="object-cover" 
                            />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Never Miss an Update</h2>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
                                Subcribe to our mailing list for the latest blog updates and exclusive infrastructure insights delivered straight to your inbox.
                            </p>
                            <form className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
                                <input 
                                    type="email" 
                                    placeholder="Enter your professional email address" 
                                    className="flex-grow px-8 py-5 rounded-full text-primary font-medium focus:outline-none focus:ring-4 ring-white/20"
                                    required
                                />
                                <button className="px-12 py-5 bg-primary text-white rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
