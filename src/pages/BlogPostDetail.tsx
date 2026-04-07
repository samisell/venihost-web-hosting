import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Clock, Share2, Tag } from 'lucide-react';
import SEO from '@/src/components/SEO';
import OptimizedImage from '@/src/components/OptimizedImage';
import { blogPosts } from '@/src/data/blogPosts';

const BlogPostDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="pt-40 pb-20 text-center">
                <h1 className="text-4xl font-bold text-primary mb-6">Post Not Found</h1>
                <Link to="/blog" className="text-secondary font-bold hover:underline flex items-center justify-center gap-2">
                    <ArrowLeft size={18} /> Back to Blog
                </Link>
            </div>
        );
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "author": { "@type": "Person", "name": post.author },
        "datePublished": post.date,
        "description": post.excerpt,
        "articleBody": post.content.replace(/<[^>]+>/g, '') // Strip HTML for metadata
    };

    return (
        <div className="pt-20">
            <SEO 
                title={`${post.title} | Venihost Blog`}
                description={post.excerpt}
                keywords={`${post.category.toLowerCase()}, venihost blog, hosting news nigeria, ${post.id.replace(/-/g, ' ')}`}
                structuredData={structuredData}
            />

            {/* Hero Header */}
            <section className="bg-slate-50 py-20 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-secondary font-bold mb-8 transition-colors group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Resources
                    </Link>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-widest text-secondary mb-6">
                            <span className="px-3 py-1 bg-secondary/10 rounded-lg">{post.category}</span>
                            <div className="flex items-center gap-2 text-slate-400"><Clock size={16} /> {post.readTime}</div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                                <div className="w-full h-full bg-primary flex items-center justify-center text-white font-bold">
                                    {post.author[0]}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-primary">{post.author}</span>
                                <span className="text-sm text-slate-500 font-medium">{post.date}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px]">
                        <OptimizedImage src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>

                    <div 
                        className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-extrabold prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-primary prose-a:text-secondary prose-img:rounded-[2rem]"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-primary">Share:</span>
                            <div className="flex gap-4">
                                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-md">
                                    <Share2 size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-md">
                                    <Tag size={18} />
                                </button>
                            </div>
                        </div>
                        <Link to="/blog" className="px-10 py-4 bg-primary text-white rounded-full font-bold shadow-xl hover:scale-105 transition-all">
                            Browse All Articles
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related/Newsletter */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-extrabold text-primary mb-6">Enjoyed this article?</h3>
                    <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto">
                        Sign up for our newsletter to get more technical insights and hosting updates delivered to your inbox weekly.
                    </p>
                    <Link to="/contact" className="inline-block px-12 py-5 bg-secondary text-white rounded-full font-bold text-lg shadow-xl shadow-secondary/20 hover:scale-105 transition-all">
                        Subscribe for Updates
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BlogPostDetail;
