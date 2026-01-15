import { Users, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Grundat', value: '2025' },
    { icon: Lightbulb, label: 'Fokus', value: 'Innovation' },
    { icon: TrendingUp, label: 'Mål', value: 'Effektivitet' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Om oss
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Framtidens ingenjörsbyrå
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Björkhagen Ingenjörsbyrå AB grundades 2025 av Erik Holmgren med en vision om att 
              revolutionera bygghandlingsprojektering genom automation och AI.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Vi specialiserar oss på att effektivisera processer inom byggindustrin. 
              Genom att utveckla intern programvara för ökad effektivitet släpper vi även externa 
              produkter som vår kommunikationsapp <strong className="text-foreground">ZemiChat</strong>.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-secondary">
                  <stat.icon size={24} className="mx-auto text-primary" />
                  <p className="mt-2 text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                    <Lightbulb size={40} className="text-primary-foreground" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">
                    "Automation är nyckeln till framtidens byggbransch"
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">— Erik Holmgren, Grundare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
