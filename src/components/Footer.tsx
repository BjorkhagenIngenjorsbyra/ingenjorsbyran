import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-border">
      <div className="grid md:grid-cols-3 gap-6 text-xs md:text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Björkhagen Ingenjörsbyrå AB</p>
        <p>Org.nr 559534-5801 · Slåttergatan 6, 256 56 Helsingborg</p>
        <p className="md:text-right">
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Personuppgiftspolicy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
