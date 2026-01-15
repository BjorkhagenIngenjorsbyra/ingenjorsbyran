import { Building2, Code2, MessageSquare, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Bygghandlingsprojektering',
      description: 'Expert konsulttjänster för byggindustrin. Vi levererar högkvalitativa bygghandlingar med fokus på precision och effektivitet.',
      features: ['Konstruktionsritningar', 'Teknisk dokumentation', 'Kvalitetssäkring'],
    },
    {
      icon: Code2,
      title: 'App & Mjukvaruutveckling',
      description: 'Vi skapar banbrytande AI- och automationsverktyg för ingenjörer och kommunikation, anpassade för moderna arbetssätt.',
      features: ['AI-integrationer', 'Automatisering', 'Skräddarsydda lösningar'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Våra tjänster
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Expertis som driver innovation
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vi kombinerar traditionell ingenjörskunskap med modern teknologi för att 
            skapa effektivare processer och bättre resultat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-xl shadow-card border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon size={28} className="text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <ArrowRight size={14} className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ZemiChat Feature */}
        <div className="mt-16 bg-card rounded-2xl shadow-card border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                <MessageSquare size={14} />
                Vår produkt
              </span>
              <h3 className="mt-6 text-2xl md:text-3xl font-bold text-foreground">
                ZemiChat
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                En kraftfull kommunikationsapp utvecklad för att effektivisera samarbete 
                inom bygg- och ingenjörsprojekt. ZemiChat kombinerar modern AI-teknik med 
                intuitiv design för smidigare projekthantering.
              </p>
              <a
                href="https://zemichat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all hover:gap-3"
              >
                Besök ZemiChat
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-12">
              <div className="w-full max-w-xs bg-card rounded-2xl shadow-lg p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <MessageSquare size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ZemiChat</p>
                    <p className="text-xs text-muted-foreground">Kommunikation förenklad</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-secondary rounded-full w-full"></div>
                  <div className="h-3 bg-secondary rounded-full w-4/5"></div>
                  <div className="h-3 bg-secondary rounded-full w-3/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
