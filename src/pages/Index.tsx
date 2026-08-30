import Layout from '@/components/Layout';

const words = ['Bygghandlingsprojektering', 'för', 'totalentreprenader.'];

const Index = () => {
  return (
    <Layout>
      <section className="flex-1 flex items-center px-6 md:px-10 py-10">
        <div className="text-lg md:text-2xl font-light leading-relaxed">
          <p className="md:whitespace-nowrap">
            {words.map((w, i) => (
              <span key={w} className="block md:inline">
                {w}
                {i < words.length - 1 ? ' ' : ''}
              </span>
            ))}
          </p>
          <p>&nbsp;</p>
          <p>Arkitektur</p>
        </div>
      </section>

      <section id="kontakt" className="px-6 md:px-10 pb-8">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] gap-2 md:gap-16 text-xs tracking-[0.15em] text-muted-foreground">
          <p className="uppercase">Kontakt</p>
          <p className="leading-relaxed">
            <a href="mailto:alva@ingenjorsbyran.com" className="block md:inline hover:text-primary transition-colors">
              alva@ingenjorsbyran.com
            </a>
            <span className="hidden md:inline"> · </span>
            <a href="mailto:erik@ingenjorsbyran.com" className="block md:inline hover:text-primary transition-colors">
              erik@ingenjorsbyran.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
