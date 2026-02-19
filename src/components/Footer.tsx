import {
    Instagram,
    Twitter,
    Youtube,
    Linkedin
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-muted/30 pt-16 pb-8 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src={logo}
                                alt="Shutter Production"
                                className="h-16 w-auto invert dark:invert-0"
                            />
                        </div>
                        <p className="text-muted-foreground max-w-sm mb-6">
                            Visual Stories That Create Impact. We deliver high-quality visual storytelling for NGOs, brands, and organizations.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-white hover:border-gold transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-white hover:border-gold transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-white hover:border-gold transition-all">
                                <Youtube size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-white hover:border-gold transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Services', 'Portfolio', 'About', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-gold transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Contact</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li>Kigali, Rwanda</li>
                            <li>hello@shutterproduction.com</li>
                            <li>+250 788 000 000</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
                    <p>&copy; {new Date().getFullYear()} Shutter Production. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
