import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo-horizontal.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      // Already on home page, just scroll to contact
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page, then scroll to contact
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  const navLinks = [
    { name: 'Hem', path: '/' },
    { name: 'Support', path: '/support' },
    { name: 'Integritetspolicy', path: '/privacy' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Björkhagen Ingenjörsbyrå" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors w-fit"
              >
                Kontakt
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
