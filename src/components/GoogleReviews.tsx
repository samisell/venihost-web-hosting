import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import OptimizedImage from '@/src/components/OptimizedImage';

const reviews = [
  {
    id: 1,
    author: "Oluwaseun Adeyemi",
    rating: 5,
    date: "2 months ago",
    text: "Venihost has been incredible for my e-commerce site. The speed is unmatched in Nigeria, and their support team actually knows what they're doing. Highly recommended!",
    avatar: "/samisell1.png"
  },
  {
    id: 2,
    author: "Chidi Okafor",
    rating: 5,
    date: "1 month ago",
    text: "Switched from a popular international host and I'm not looking back. Local latency makes a huge difference for my users. 99.9% uptime is real.",
    avatar: "/samisell1.png"
  },
  {
    id: 3,
    author: "Fatima Ibrahim",
    rating: 5,
    date: "3 weeks ago",
    text: "The best hosting experience I've had. Setting up my WordPress site was a breeze with their one-click installer. Support is 24/7 as promised.",
    avatar: "/samisell1.png"
  }
];

const GoogleReviews = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-primary">4.9/5</span>
            </div>
            <h2 className="text-4xl font-extrabold text-primary mb-4">What Our Clients Say on Google</h2>
            <p className="text-lg text-slate-600 max-w-xl">
              Don't just take our word for it. We're proud to be one of the highest-rated hosting providers in the region.
            </p>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 mb-4">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.15 0 5.79-1.05 7.73-2.85l-3.57-2.77c-1.08.75-2.43 1.14-4.16 1.14-3.19 0-5.89-2.16-6.86-5.08H1.71v2.82C3.68 20.33 7.54 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.14 13.44c-.24-.72-.38-1.49-.38-2.31s.14-1.59.38-2.31V6.01H1.71C.62 8.18 0 10.59 0 13.13s.62 4.95 1.71 7.12l3.43-2.81z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.73 0 3.28.59 4.51 1.76l3.39-3.39C17.79 1.67 15.15 1 12 1 7.54 1 3.68 3.67 1.71 7.12l3.43 2.81c.97-2.92 3.67-5.08 6.86-5.08z"
                />
              </svg>
            </div>
            <div className="text-2xl font-bold text-primary mb-1">Excellent</div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-sm text-slate-500">Based on 500+ reviews</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-50">
                  <OptimizedImage src={review.avatar} alt={review.author} />
                </div>
                <div>
                  <h4 className="font-bold text-primary flex items-center gap-1">
                    {review.author}
                    <CheckCircle2 size={14} className="text-blue-500" />
                  </h4>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c3.15 0 5.79-1.05 7.73-2.85l-3.57-2.77c-1.08.75-2.43 1.14-4.16 1.14-3.19 0-5.89-2.16-6.86-5.08H1.71v2.82C3.68 20.33 7.54 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.14 13.44c-.24-.72-.38-1.49-.38-2.31s.14-1.59.38-2.31V6.01H1.71C.62 8.18 0 10.59 0 13.13s.62 4.95 1.71 7.12l3.43-2.81z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.73 0 3.28.59 4.51 1.76l3.39-3.39C17.79 1.67 15.15 1 12 1 7.54 1 3.68 3.67 1.71 7.12l3.43 2.81c.97-2.92 3.67-5.08 6.86-5.08z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
          >
            View all Google reviews <Star size={18} className="fill-secondary text-secondary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
