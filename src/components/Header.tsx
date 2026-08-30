import { Link } from 'react-router-dom';
import logo from '@/assets/logo-horizontal.png';

const Header = () => {
  return (
    <header className="w-full">
      <div className="px-6 md:px-10 py-6 md:py-8">
        <Link to="/" aria-label="Björkhagen Ingenjörsbyrå" className="inline-block">
          <img src={logo} alt="Björkhagen Ingenjörsbyrå" className="h-14 md:h-20 w-auto" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
