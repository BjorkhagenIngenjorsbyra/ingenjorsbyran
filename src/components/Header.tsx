import { Link } from 'react-router-dom';
import lov from '@/assets/lov.png';
import text from '@/assets/text.png';

const Header = () => {
  return (
    <header className="w-full">
      <div className="px-6 md:px-10 py-6 md:py-8">
        <Link to="/" aria-label="Björkhagen Ingenjörsbyrå" className="inline-flex items-center gap-3 md:gap-4">
          <img src={lov} alt="" className="h-14 md:h-[72px] w-auto" />
          <img src={text} alt="Björkhagen Ingenjörsbyrå AB" className="h-8 md:h-11 w-auto" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
