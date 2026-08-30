import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/logo-horizontal.png';

const links = [
  { name: 'Bygghandling', id: 'bygghandling' },
  { name: 'Byrån', id: 'byran' },
  { name: 'Kontakt', id: 'kontakt' },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <header className="w-full">
      <div className="px-6 md:px-10 py-6 md:py-8 flex items-center justify-between">
        <Link to="/" aria-label="Björkhagen Ingenjörsbyrå">
          <img src={logo} alt="Björkhagen Ingenjörsbyrå" className="h-9 md:h-11 w-auto" />
        </Link>
        <nav className="flex items-center gap-6 md:gap-10">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={goTo(l.id)}
              className="text-xs md:text-sm uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors"
            >
              {l.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
