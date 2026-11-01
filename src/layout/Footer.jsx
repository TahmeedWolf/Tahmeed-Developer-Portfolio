import { Heart } from "lucide-react";
import { SocialIcon } from "@/components/SocialIcon";
import { socialLinks } from "@/data/social";


// const footerLinks = [
//   { href: "#about", label: "About" },
//   { href: "#projects", label: "Projects" },
//   { href: "#experience", label: "Experience" },
//   { href: "#education", label: "Education" },
//   { href: "#contact", label: "Contact" },
// ];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              TR<span className="text-primary">.</span>
            </a>
          </div>

          {/* Links & Copyright */}
          <nav className="flex flex-wrap justify-center gap-6">
            {/* Uncomment if you want footer nav links later */}
            {/* {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))} */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} Tahmeed Rahman. All rights reserved.
            </p>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2.5 rounded-full glass text-muted-foreground hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
              >
                <SocialIcon path={social.path} label={social.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
