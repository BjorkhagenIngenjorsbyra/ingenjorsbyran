import { Building2, FileCheck2, Cog, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Bygghandlingsprojektering',
      description:
        'Planer, sektioner, fasader, detaljer, uppställningar och beskrivningar i Revit. Handlingarna levereras som PDF, DWG och IFC enligt beställarens standard, med egenkontroll på varje leverans.',
      features: ['Arkitekthandlingar (A) i Revit', 'Egenkontroll och riskbedömning', 'Leverans i PDF, DWG och IFC'],
    },
    {
      icon: FileCheck2,
      title: 'Bygglov och tidiga skeden',
      description:
        'Bygglovshandlingar, situationsplaner och volymstudier. Underlag till tekniskt samråd och kontrollplan, och svar på kommunens kompletteringar.',
      features: ['Bygglovshandlingar', 'Situationsplan och nybyggnadskarta', 'Volymstudier och skisser'],
    },
    {
      icon: Cog,
      title: 'Automation i projekteringen',
      description:
        'Skript och verktyg som granskar modellen, exporterar hela leveranspaketet och kontrollerar koordinater, axlar och littera – så att det som lämnar byrån är kontrollerat, inte bara ritat.',
      features: ['Revit-API och pyRevit', 'Automatisk export och kontroll', 'Samordning av IFC och DWG'],
    },
  ];

  return (
    <section id="tjanster" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Det här gör vi</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Tre saker, gjorda ordentligt</h2>
          <p className="mt-4 text-muted-foreground">
            Uppdragen är A-projektering. Verktygen runt omkring bygger vi själva, för att handlingarna ska
            hålla samma kvalitet varje gång.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-lg shadow-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <ArrowRight size={14} className="text-primary mt-1 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
