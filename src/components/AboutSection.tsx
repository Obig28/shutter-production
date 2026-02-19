import { motion } from "framer-motion";
import { Button } from "./ui/button";

const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary dark:text-foreground">
                                We craft powerful <span className="text-gold">visual stories.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Shutter Production is a creative film and media studio delivering high-quality visual storytelling for NGOs, brands, and organizations.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                With professional cinema equipment and a strong production workflow, we transform ideas into compelling visual content that connects audiences and drives impact. Whether you need a cinematic documentary that moves hearts or a sharp corporate video that builds trust, our team is dedicated to excellence in every frame.
                            </p>
                            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-semibold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                Let's Create Your Story
                            </Button>
                        </motion.div>
                    </div>

                    {/* Image Content */}
                    <div className="order-1 lg:order-2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://harmless-tapir-303.convex.cloud/api/storage/f508e5fe-f696-4641-8ce1-30803c4c5ff2"
                                alt="Filmmaking in action"
                                className="w-full h-auto object-cover aspect-[4/3]"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
