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
        <section id="services" className="py-24 bg-gray-50/50 dark:bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[#0C3249] dark:text-foreground tracking-tight">
                        Our Expertise
                    </h2>
                    <div className="w-24 h-1.5 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="bg-white dark:bg-card p-10 rounded-2xl shadow-sm border border-gray-100 hover:border-[#0C3249]/20 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
                        >
                            {/* Decorative hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0C3249]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            
                            <div className="text-[#0C3249] group-hover:text-gold transition-colors duration-300 mb-6 transform group-hover:scale-110 origin-left inline-block">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#0C3249] transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-[#64748b] leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
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
