import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center hero-gradient overflow-hidden">
      <div className="container relative z-10 pt-24 pb-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80 animate-fade-up">
            Björkhagen Ingenjörsbyrå AB · Helsingborg
          </p>
          <h1
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-up"
            style={{ animationDelay: '0.05s' }}
          >
            Bygghandlingsprojektering för totalentreprenader
          </h1>
          <p
            className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Vi tar fram arkitekthandlingarna (A) i Revit åt totalentreprenören – planer, sektioner,
            fasader, detaljer, uppställningar och beskrivningar – och levererar PDF, DWG och IFC
            enligt entreprenörens standard.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            <a
              href="#bygghandling"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-background text-primary rounded-md hover:bg-background/90 transition-all hover:gap-3"
            >
              Vad som ingår
              <ArrowRight size={18} />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border-2 border-primary-foreground/40 text-primary-foreground rounded-md hover:bg-primary-foreground/10 transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 80L1440 40V80H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
