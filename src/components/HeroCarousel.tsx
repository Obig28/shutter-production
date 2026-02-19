import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import heroBg from "@/assets/hero-bg.jpg";

const slides = [
    {
        id: 1,
        image: heroBg,
        title: "Professional Production",
        description: "From concept to final cut, we deliver excellence.",
    },
    {
        id: 2,
        image: "https://harmless-tapir-303.convex.cloud/api/storage/dc2327da-0b60-4907-9755-35809516d369",
        title: "Cinematic Excellence",
        description: "Leading the industry with state-of-the-art equipment and a passion for storytelling.",
    },
    {
        id: 3,
        image: "https://harmless-tapir-303.convex.cloud/api/storage/12d5dd8c-8d99-42c1-8095-8ee9a73e4e9e",
        title: "Professional Production",
        description: "From concept to final edit, we handle every aspect of your visual journey.",
    },
];

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0">
                        <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-end pb-32 text-center text-white z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            {slides[currentSlide].description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-primary text-white border-none text-base h-12 px-8" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                                View Portfolio
                            </Button>
                            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-base h-12 px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                Request a Quote
                            </Button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all z-20"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all z-20"
            >
                <ChevronRight size={32} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={cn(
                            "w-2.5 h-2.5 rounded-full transition-all duration-300",
                            currentSlide === index ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
                        )}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
