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
        <div className="mt-16 bg-card rounded-xl shadow-card border border-border p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <MessageSquare size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">ZemiChat</h3>
                <p className="text-muted-foreground">
                  Chattverktyg för användare utan e-post eller telefonnummer – med full insyn i konversationerna.
                </p>
              </div>
            </div>
            <a
              href="https://zemichat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all hover:gap-3 whitespace-nowrap"
            >
              Besök ZemiChat
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Agent Ecohub Feature */}
        <div className="mt-6 bg-card rounded-xl shadow-card border border-border p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Code2 size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Agent Ecohub</h3>
                <p className="text-muted-foreground">
                  AI-driven plattform för effektiv projektering och automatisering inom byggindustrin.
                </p>
              </div>
            </div>
            <a
              href="https://aiprojektering.se"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all hover:gap-3 whitespace-nowrap"
            >
              Besök Agent Ecohub
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
