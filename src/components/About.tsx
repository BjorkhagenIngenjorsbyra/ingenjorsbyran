const About = () => {
  const principles = [
    {
      title: 'En person, hela handlingen',
      text: 'Samma person modellerar, granskar och levererar. Frågor får svar av den som ritat.',
    },
    {
      title: 'Egenkontroll på varje leverans',
      text: 'Varje avsteg och varje val dokumenteras med krav, val och skäl – så att granskningen kan börja i sak.',
    },
    {
      title: 'Verktyg i egen regi',
      text: 'Export, kontroll av koordinater, axlar och littera och sammanställning av leveranspaketet är automatiserat, och körs om efter sista ändringen.',
    },
  ];

  return (
    <section id="om" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Om byrån</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Björkhagen Ingenjörsbyrå
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Byrån startades 2025 av Erik Holmgren och drivs från Helsingborg. Uppdragen kommer från
              byggentreprenörer, byggherrar och andra konsulter, främst i Skåne och Blekinge, och handlar om
              arkitektdelen i bygglov och bygghandling.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Modellerna byggs i Revit. Verktygen som granskar och exporterar dem utvecklas i egen regi och
              används i varje uppdrag.
            </p>
          </div>

          <div className="space-y-4">
            {principles.map((p) => (
              <div key={p.title} className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
