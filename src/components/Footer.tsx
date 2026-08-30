import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="px-6 md:px-10 py-6 border-t border-border">
      <p className="text-xs text-muted-foreground leading-relaxed">
        © {new Date().getFullYear()} Björkhagen Ingenjörsbyrå AB · Org.nr 559534-5801 · Slåttergatan 6, 256 56 Helsingborg ·{' '}
        <Link to="/privacy" className="hover:text-primary transition-colors">
          Personuppgiftspolicy
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
