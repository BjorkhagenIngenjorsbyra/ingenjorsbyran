import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo-square.png';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Company */}
          <div className="space-y-4">
            <img src={logo} alt="Björkhagen Ingenjörsbyrå" className="h-16 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Innovation genom automation och AI inom bygghandlingsprojektering.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Länkar
            </h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Hem
              </Link>
              <Link to="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Support
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Integritetspolicy
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Kontakt
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Slåttergatan 6<br />
                  256 56 Helsingborg, Sweden
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:0760095195" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  076-009 51 95
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:erik@ingenjorsbyran.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  erik@ingenjorsbyran.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 Björkhagen Ingenjörsbyrå AB. Alla rättigheter förbehållna.</p>
            <p>Org.nr: 559534-5801</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
