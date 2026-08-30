import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] gap-4 md:gap-16 py-10 md:py-14 border-t border-border">
    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground pt-1">{label}</p>
    <div className="max-w-2xl">{children}</div>
  </div>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="mt-4 space-y-2 text-base md:text-lg font-light leading-relaxed">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <Layout>
      <section className="px-6 md:px-10 pt-16 md:pt-28 pb-20 md:pb-32">
        <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-light leading-[1.15] text-balance">
          Björkhagen Ingenjörsbyrå tar fram bygghandlingar för arkitektdelen i totalentreprenader.
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg font-light leading-relaxed text-muted-foreground">
          Uppdragsgivaren är totalentreprenören. Vi tar över efter bygglovet, modellerar i Revit och
          levererar handlingarna som PDF, DWG och IFC enligt entreprenörens standard.
        </p>
      </section>

      <section id="bygghandling" className="px-6 md:px-10 scroll-mt-8">
        <Row label="Handlingar">
          <List
            items={[
              'Planer, sektioner och fasader',
              'Byggdetaljer',
              'Dörr-, fönster- och portuppställningar',
              'Väggtypsförteckning',
              'Rums- och fasadbeskrivning',
              'Handlingsförteckning',
            ]}
          />
        </Row>
        <Row label="Leverans">
          <List
            items={[
              'PDF per blad enligt Bygghandlingar 90',
              'DWG med entreprenörens lagerstandard',
              'IFC i projektets koordinatsystem',
              'Samlad plan-DWG för samordning',
              'Uppladdning i ACC, Dalux eller annan projektplats',
            ]}
          />
        </Row>
        <Row label="Kontroll">
          <List
            items={[
              'Egenkontroll per leverans, med krav, val och skäl för varje avsteg',
              'Riskbedömning enligt PBL',
              'Granskning mot förfrågningsunderlag, brandskyddsbeskrivning och beställarens tekniska bestämmelser',
              'Automatisk kontroll av koordinater, axlar, littera och tidsstämplar innan paketet går ut',
            ]}
          />
        </Row>
      </section>

      <section id="byran" className="px-6 md:px-10 mt-16 md:mt-24 scroll-mt-8">
        <Row label="Byrån">
          <p className="text-base md:text-lg font-light leading-relaxed">
            Byrån startades 2025 av Erik Holmgren och drivs från Helsingborg. Uppdragen är
            bygghandlingsprojektering för arkitektdelen i totalentreprenader, i Skåne och Blekinge.
          </p>
          <p className="mt-5 text-base md:text-lg font-light leading-relaxed">
            Samma person modellerar, granskar och levererar. Varje avsteg från förfrågningsunderlaget
            står i egenkontrollen med krav, val och skäl. Export, kontroll och sammanställning av
            leveranspaketet sköts av verktyg som byrån utvecklat själv, och körs om efter sista
            modelländringen.
          </p>
        </Row>
      </section>

      <section id="kontakt" className="px-6 md:px-10 mt-16 md:mt-24 scroll-mt-8">
        <Row label="Kontakt">
          <p className="text-base md:text-lg font-light leading-relaxed">Erik Holmgren</p>
          <p className="mt-1 text-base md:text-lg font-light leading-relaxed">
            <a href="tel:0760095195" className="hover:text-primary transition-colors">076-009 51 95</a>
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed">
            <a href="mailto:erik@ingenjorsbyran.com" className="hover:text-primary transition-colors">
              erik@ingenjorsbyran.com
            </a>
          </p>
          <p className="mt-5 text-base md:text-lg font-light leading-relaxed">
            Björkhagen Ingenjörsbyrå AB
            <br />
            Slåttergatan 6
            <br />
            256 56 Helsingborg
          </p>
        </Row>
      </section>
    </Layout>
  );
};

export default Index;
