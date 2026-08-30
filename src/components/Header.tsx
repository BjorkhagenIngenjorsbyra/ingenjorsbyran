import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo-horizontal.png';

const sections = [
  { name: 'Tjänster', id: 'tjanster' },
  { name: 'Uppdrag', id: 'uppdrag' },
  { name: 'Om byrån', id: 'om' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const linkClass = 'text-sm font-medium text-muted-foreground transition-colors hover:text-primary';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Björkhagen Ingenjörsbyrå" className="h-10 md:h-12 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={goTo(s.id)} className={linkClass}>
                {s.name}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={goTo('kontakt')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Kontakt
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Meny"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} onClick={goTo(s.id)} className={linkClass}>
                  {s.name}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={goTo('kontakt')}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors w-fit"
              >
                Kontakt
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
