import { motion } from "framer-motion";
import {
    Camera,
    Film,
    Video,
    Clapperboard,
    Plane,
    MonitorPlay,
    Share2,
    Image as ImageIcon
} from "lucide-react";

const services = [
    {
        icon: <Film className="w-10 h-10" />,
        title: "Documentary Film Production",
        description: "In-depth storytelling that captures emotions and realities."
    },
    {
        icon: <ImageIcon className="w-10 h-10" />,
        title: "Professional Photography",
        description: "High-quality still images for events, branding, and portraits."
    },
    {
        icon: <Video className="w-10 h-10" />,
        title: "Corporate & Marketing Videos",
        description: "Professional profiles that elevate brand identity."
    },
    {
        icon: <Clapperboard className="w-10 h-10" />,
        title: "Commercial Advertisements",
        description: "High-energy ads designed for conversion and engagement."
    },
    {
        icon: <Plane className="w-10 h-10" />,
        title: "Drone Videography",
        description: "Breathtaking aerial views in 4K resolution."
    },
    {
        icon: <MonitorPlay className="w-10 h-10" />,
        title: "Video Editing & Post Production",
        description: "Editing, color grading, and sound design excellence."
    },
    {
        icon: <Share2 className="w-10 h-10" />,
        title: "Social Media Content Production",
        description: "Engaging short-form content optimized for social platforms."
    },
    // Added 8th service to balance the grid
    {
        icon: <Camera className="w-10 h-10" />,
        title: "Event Videography",
        description: "Capturing the best moments of your special events."
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 bg-secondary/30 dark:bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary dark:text-foreground">
                        Our Expertise
                    </h2>
                    <div className="w-20 h-1.5 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:border-gold hover:shadow-md transition-all group"
                        >
                            <div className="text-primary dark:text-primary-foreground group-hover:text-gold transition-colors mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-white transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
