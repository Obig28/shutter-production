import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network delay
        setTimeout(() => {
            toast.success("Message sent successfully! We'll get back to you soon.");
            e.currentTarget.reset();
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Animated Background Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl z-0 pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -30, 0],
                    y: [0, 50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl z-0 pointer-events-none"
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary dark:text-foreground">
                        Let's Create Your Story
                    </h2>
                    <div className="w-20 h-1.5 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden">
                    {/* Contact Info */}
                    <div className="bg-primary p-12 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-white/80 mb-12">
                                Ready to start your next video project? Get in touch with us today.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 p-3 rounded-full text-gold">
                                        <Phone size={24} />
                                    </div>
                                    <span>+250 788 000 000</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 p-3 rounded-full text-gold">
                                        <Mail size={24} />
                                    </div>
                                    <span>hello@shutterproduction.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 p-3 rounded-full text-gold">
                                        <MapPin size={24} />
                                    </div>
                                    <span>Kigali, Rwanda</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm text-white/60 mb-4">Follow us</p>
                            <div className="flex gap-4">
                                {/* Social placeholders */}
                                {['Instagram', 'Twitter', 'YouTube', 'LinkedIn'].map((social) => (
                                    <a key={social} href="#" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-12 bg-background">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Your Name" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Your Email" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="project-type">Project Type</Label>
                                <Input id="project-type" placeholder="e.g. Documentary, Corporate, Event" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project..."
                                    rows={5}
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full text-lg h-12" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
