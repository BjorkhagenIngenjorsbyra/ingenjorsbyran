import Layout from '@/components/Layout';

const Privacy = () => {
  const sections = [
    {
      title: '1. Inledning',
      body: [
        'Denna policy beskriver hur Björkhagen Ingenjörsbyrå AB samlar in, använder och skyddar personuppgifter när du besöker vår webbplats eller är i kontakt med oss.',
      ],
    },
    {
      title: '2. Uppgifter vi behandlar',
      body: [
        'Kontaktuppgifter du själv lämnar (namn, e-postadress, telefonnummer) när du hör av dig.',
        'Teknisk besöksstatistik för webbplatsen.',
      ],
    },
    {
      title: '3. Hur uppgifterna används',
      body: [
        'För att svara på förfrågningar, genomföra uppdrag och förbättra webbplatsen.',
      ],
    },
    {
      title: '4. Skydd',
      body: [
        'Uppgifterna skyddas med tekniska och organisatoriska åtgärder mot obehörig åtkomst, ändring och förlust.',
      ],
    },
    {
      title: '5. Dina rättigheter',
      body: [
        'Du har rätt att begära tillgång till, rättelse av eller radering av dina personuppgifter. Kontakta oss för att utöva rättigheterna.',
      ],
    },
  ];

  return (
    <Layout>
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-10">
        <h1 className="text-3xl md:text-4xl font-light">Personuppgiftspolicy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Björkhagen Ingenjörsbyrå AB · uppdaterad augusti 2026</p>
      </section>
      <section className="px-6 md:px-10 max-w-2xl">
        {sections.map((s) => (
          <div key={s.title} className="py-8 border-t border-border">
            <h2 className="text-base md:text-lg font-medium">{s.title}</h2>
            {s.body.map((b) => (
              <p key={b} className="mt-3 text-base font-light leading-relaxed text-muted-foreground">
                {b}
              </p>
            ))}
          </div>
        ))}
        <div className="py-8 border-t border-border">
          <h2 className="text-base md:text-lg font-medium">6. Kontakt</h2>
          <p className="mt-3 text-base font-light leading-relaxed text-muted-foreground">
            Frågor om policyn ställs till{' '}
            <a href="mailto:erik@ingenjorsbyran.com" className="text-foreground hover:text-primary transition-colors">
              erik@ingenjorsbyran.com
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
