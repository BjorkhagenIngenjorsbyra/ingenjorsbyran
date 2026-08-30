const Projects = () => {
  const projects = [
    {
      title: 'Fördelningsstation, Karlskrona',
      role: 'A-projektering av tre nya byggnader – bygglov och bygghandling åt totalentreprenör',
      year: '2026',
    },
    {
      title: 'Bostadskvarter, Malmö',
      role: 'Bygghandling för arkitektdelen åt byggentreprenör',
      year: '2026',
    },
    {
      title: 'Mobilitetshus, Malmö',
      role: 'Bygglov och bygghandling för parkeringshus åt byggentreprenör',
      year: '2026',
    },
    {
      title: 'Bostadshus, Båstad',
      role: 'Bygglovshandlingar och nybyggnadskarta åt privat byggherre',
      year: '2026',
    },
  ];

  return (
    <section id="uppdrag" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Uppdrag</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Pågående och nyligen levererade</h2>
          <p className="mt-4 text-muted-foreground">
            Ett urval av uppdragen sedan starten. Referenser lämnas på begäran.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <div key={project.title} className="grid md:grid-cols-[1fr_2fr_auto] gap-2 md:gap-8 py-5">
              <h3 className="font-semibold text-foreground">{project.title}</h3>
              <p className="text-muted-foreground">{project.role}</p>
              <p className="text-sm text-muted-foreground md:text-right">{project.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
