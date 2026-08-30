import Layout from '@/components/Layout';

const words = ['AI-driven', 'bygghandlingsprojektering', 'för', 'totalentreprenader.'];

const Index = () => {
  return (
    <Layout>
      <section className="px-6 md:px-10 pt-10 md:pt-16">
        <p className="text-lg md:text-2xl font-light leading-relaxed md:whitespace-nowrap">
          {words.map((w, i) => (
            <span key={w} className="block md:inline">
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
      </section>

      <section id="kontakt" className="mt-auto px-6 md:px-10 pt-16 pb-8">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] gap-2 md:gap-16">
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Kontakt</p>
          <p className="text-xs tracking-[0.05em] leading-relaxed">
            <a href="mailto:alva@ingenjorsbyran.com" className="block md:inline hover:text-primary transition-colors">
              alva@ingenjorsbyran.com
            </a>
            <span className="hidden md:inline text-muted-foreground"> · </span>
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
