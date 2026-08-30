import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <section className="px-6 md:px-10 pt-24 md:pt-40 min-h-[60vh]">
        <p className="max-w-xl text-lg md:text-2xl font-light leading-relaxed">
          AI-driven bygghandlingsprojektering för totalentreprenader.
        </p>
      </section>

      <section id="kontakt" className="px-6 md:px-10 pt-24 md:pt-40 pb-16 scroll-mt-8">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] gap-4 md:gap-16 pt-10 border-t border-border">
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground pt-1">Kontakt</p>
          <div className="text-base md:text-lg font-light leading-relaxed">
            <p>Erik Holmgren</p>
            <p>
              <a href="tel:0760095195" className="hover:text-primary transition-colors">076-009 51 95</a>
            </p>
            <p>
              <a href="mailto:erik@ingenjorsbyran.com" className="hover:text-primary transition-colors">
                erik@ingenjorsbyran.com
              </a>
            </p>
            <p className="mt-5">
              Björkhagen Ingenjörsbyrå AB
              <br />
              Slåttergatan 6
              <br />
              256 56 Helsingborg
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
