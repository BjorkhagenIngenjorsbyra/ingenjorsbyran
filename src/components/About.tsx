const About = () => {
  const facts = [
    {
      title: 'En person i uppdraget',
      text: 'Samma person modellerar, granskar och levererar. Frågor besvaras av den som ritat.',
    },
    {
      title: 'Egenkontroll per leverans',
      text: 'Varje avsteg från förfrågningsunderlaget står i egenkontrollen med krav, val och skäl.',
    },
    {
      title: 'Egna verktyg',
      text: 'Export, kontroll av koordinater, axlar och littera och sammanställning av leveranspaketet är automatiserat och körs om efter sista modelländringen.',
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
              Byrån startades 2025 av Erik Holmgren och drivs från Helsingborg. Uppdragen är
              bygghandlingsprojektering för arkitektdelen i totalentreprenader, i Skåne och Blekinge.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Modellerna byggs i Revit. Verktygen som granskar och exporterar dem är utvecklade av byrån
              och används i varje uppdrag.
            </p>
          </div>

          <div className="space-y-4">
            {facts.map((f) => (
              <div key={f.title} className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
