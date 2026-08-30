import { ArrowRight } from 'lucide-react';

const Services = () => {
  const columns = [
    {
      title: 'Handlingar',
      items: [
        'Planer, sektioner och fasader',
        'Byggdetaljer',
        'Dörr-, fönster- och portuppställningar',
        'Väggtypsförteckning',
        'Rums- och fasadbeskrivning',
        'Handlingsförteckning',
      ],
    },
    {
      title: 'Leverans',
      items: [
        'PDF per blad enligt Bygghandlingar 90',
        'DWG med entreprenörens lagerstandard',
        'IFC i projektets koordinatsystem',
        'Samlad plan-DWG för samordning',
        'Uppladdning i ACC, Dalux eller annan projektplats',
      ],
    },
    {
      title: 'Kontroll',
      items: [
        'Egenkontroll per leverans: krav, val och skäl för varje avsteg',
        'Riskbedömning enligt PBL',
        'Granskning mot förfrågningsunderlag, brandskyddsbeskrivning och beställarens tekniska bestämmelser',
        'Automatisk kontroll av koordinater, axlar, littera och tidsstämplar innan paketet går ut',
      ],
    },
  ];

  return (
    <section id="bygghandling" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Uppdraget</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Bygghandling, arkitektdelen</h2>
          <p className="mt-4 text-muted-foreground">
            Uppdragsgivaren är totalentreprenören. Vi tar över efter bygglovet, modellerar i Revit och
            levererar bygghandlingen som ett komplett paket – med egenkontroll och riskbedömning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col) => (
            <div key={col.title} className="bg-card p-8 rounded-lg shadow-card border border-border">
              <h3 className="text-xl font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-6 space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <ArrowRight size={14} className="text-primary mt-1 flex-shrink-0" />
                    {item}
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
