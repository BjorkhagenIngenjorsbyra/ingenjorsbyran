import { Link } from 'react-router-dom';
import logo from '@/assets/logo-horizontal.png';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="space-y-3">
            <img src={logo} alt="Björkhagen Ingenjörsbyrå" className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground max-w-sm">
              A-projektering i Revit, från bygglov till bygghandling.
            </p>
          </div>

          <div className="text-sm text-muted-foreground space-y-1 md:text-right">
            <p>Björkhagen Ingenjörsbyrå AB · Org.nr 559534-5801</p>
            <p>Slåttergatan 6, 256 56 Helsingborg</p>
            <p>
              <a href="tel:0760095195" className="hover:text-primary transition-colors">076-009 51 95</a>
              {' · '}
              <a href="mailto:erik@ingenjorsbyran.com" className="hover:text-primary transition-colors">
                erik@ingenjorsbyran.com
              </a>
            </p>
            <p>
              <Link to="/privacy" className="hover:text-primary transition-colors">Integritetspolicy</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
