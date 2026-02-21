import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
const categories = ["Documentary", "Corporate", "Commercial"];

import { portfolioItems, PortfolioItem } from "../data/portfolioVideos";

const PortfolioSection = () => {
    const [activeCategory, setActiveCategory] = useState("Documentary");
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredItems = portfolioItems.filter(item => item.category === activeCategory);
    const visibleItems = filteredItems.slice(0, visibleCount);

    return (
        <section id="portfolio" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#0C3249] dark:text-foreground tracking-tight">
                        Featured Work
                    </h2>
                    <div className="w-24 h-1.5 bg-[#0C3249] mx-auto rounded-full mb-6" />
                    <p className="text-[#64748b] text-xl md:text-2xl font-medium max-w-2xl mx-auto">
                        A selection of our documentary, corporate and commercial productions.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? "default" : "outline"}
                            onClick={() => {
                                setActiveCategory(cat);
                                setVisibleCount(6);
                            }}
                            className={cn(
                                "rounded-full px-8 py-6 text-base font-semibold transition-all duration-300",
                                activeCategory === cat
                                    ? "bg-[#0C3249] text-white hover:bg-[#0C3249]/90 shadow-lg shadow-[#0C3249]/20"
                                    : "bg-white text-[#0C3249] border-[#0C3249] hover:bg-[#0C3249]/5"
                            )}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Grid */}
                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                key={item.id}
                                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-xl bg-black"
                                onClick={() => setSelectedItem(item)}
                            >
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                                />

                                {/* Cinematic Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Center Play Icon */}
                                {!item.isImage && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                                            <Play fill="white" size={32} className="ml-1" />
                                        </div>
                                    </div>
                                )}

                                {/* Category Tag bottom left like screenshot */}
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-white text-base font-black uppercase tracking-widest drop-shadow-md">
                                        {item.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* See More Button */}
                {visibleCount < filteredItems.length && (
                    <div className="mt-12 text-center">
                        <Button
                            variant="outline"
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="rounded-full px-8 py-6 text-base font-semibold border-[#0C3249] text-[#0C3249] hover:bg-[#0C3249] hover:text-white transition-all duration-300"
                        >
                            See More
                        </Button>
                    </div>
                )}

                {/* Removed Photography Gallery Sub-section since activeCategory "All" is removed */}

                {/* Media Modal */}
                <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
                    <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-none animate-in fade-in zoom-in duration-300">
                        <DialogHeader className="sr-only">
                            <DialogTitle>{selectedItem?.title}</DialogTitle>
                            <DialogDescription>{selectedItem?.description}</DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col">
                            {/* Video/Image Container */}
                            <div className="relative pt-[56.25%] bg-black">
                                {selectedItem && (
                                    selectedItem.isImage ? (
                                        <img
                                            src={selectedItem.thumbnail}
                                            alt={selectedItem.title}
                                            className="absolute inset-0 w-full h-full object-contain"
                                        />
                                    ) : (
                                        <iframe
                                            src={selectedItem.videoUrl}
                                            title={selectedItem.title}
                                            className="absolute inset-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    )
                                )}
                            </div>

                            {/* Project Info Bar */}
                            {selectedItem && (selectedItem.title || selectedItem.description) && (
                                <div className="p-8 bg-zinc-950 text-white">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div>
                                            <span className="inline-block bg-[#0C3249] text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-sm mb-2">
                                                {selectedItem.category}
                                            </span>
                                            {selectedItem.title && <h2 className="text-3xl font-bold">{selectedItem.title}</h2>}
                                        </div>
                                        {selectedItem.duration && (
                                            <div className="text-zinc-400 font-mono text-lg">
                                                Duration: {selectedItem.duration}
                                            </div>
                                        )}
                                    </div>
                                    {selectedItem.description && (
                                        <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl border-l-2 border-[#0C3249] pl-6 italic">
                                            {selectedItem.description}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Bottom CTA */}
            <div className="mt-24 py-20 bg-[#0C3249]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        Ready to Create Something Powerful?
                    </h2>
                    <Button
                        size="lg"
                        className="bg-white text-[#0C3249] hover:bg-zinc-100 rounded-full px-12 py-7 text-xl font-bold shadow-2xl transition-all hover:scale-105 active:scale-95"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Request a Quote
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
