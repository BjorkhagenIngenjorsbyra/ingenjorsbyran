import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/logo-horizontal.png';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: 'kontakt' } });
    }
  };

  return (
    <header className="w-full">
      <div className="px-6 md:px-10 py-6 md:py-8 flex items-center justify-between">
        <Link to="/" aria-label="Björkhagen Ingenjörsbyrå">
          <img src={logo} alt="Björkhagen Ingenjörsbyrå" className="h-9 md:h-11 w-auto" />
        </Link>
        <nav>
          <a
            href="#kontakt"
            onClick={goToContact}
            className="text-xs md:text-sm uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
