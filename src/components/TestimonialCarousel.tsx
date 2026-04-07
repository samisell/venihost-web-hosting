import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { cn } from '@/src/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Folakemi Onadara",
    role: "Firstcoast Enterprise",
    content: "Venihost has been a game-changer for our business. The website loads incredibly fast, and we haven't experienced a single minute of downtime. Their support team responds quickly and resolves issues without stress. Highly recommend!",
    avatar: "https://i.pravatar.cc/150?u=folakemi",
    rating: 5
  },
  {
    id: 2,
    name: "Rhema Travels",
    role: "Travel & Tourism Agency",
    content: "Since switching to Venihost, our travel booking website has never been more reliable. The uptime is excellent, the cPanel is easy to use, and the team is always ready to help. Our clients can now book trips without any interruptions.",
    avatar: "https://i.pravatar.cc/150?u=rhema",
    rating: 5
  },
  {
    id: 3,
    name: "Gbenga",
    role: "Snowball Media",
    content: "As a media company, we need hosting that is fast and dependable. Venihost delivered exactly that. Our website handles heavy traffic with ease, the loading speed is impressive, and their customer service is second to none in Nigeria.",
    avatar: "https://i.pravatar.cc/150?u=gbenga",
    rating: 5
  },
  {
    id: 4,
    name: "Vivian",
    role: "Kadiv Event",
    content: "Venihost has made managing our event website so much easier. The hosting is stable, the SSL certificate was set up for free, and every time we've had a question their team has been right there to help. I wouldn't host with anyone else.",
    avatar: "https://i.pravatar.cc/150?u=vivian",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-12">
      <div className="relative h-[400px] md:h-[300px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="relative shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-secondary/20 shadow-xl">
                  <OptimizedImage 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg">
                  <Quote size={20} fill="currentColor" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 text-secondary mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg md:text-xl text-slate-600 italic mb-6 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <h4 className="text-xl font-display font-bold text-primary">{testimonials[currentIndex].name}</h4>
                  <p className="text-secondary font-medium">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary hover:bg-secondary hover:text-white hover:border-secondary transition-all shadow-lg"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentIndex === index ? "w-8 bg-secondary" : "bg-slate-300 hover:bg-slate-400"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary hover:bg-secondary hover:text-white hover:border-secondary transition-all shadow-lg"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
