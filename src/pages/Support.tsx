import Layout from '@/components/Layout';
import { Mail, Clock, MessageCircle } from 'lucide-react';

const Support = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Support
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Vi finns här för att hjälpa dig med våra appar och tjänster.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl shadow-card border border-border p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageCircle size={28} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Hur kan vi hjälpa dig?
                  </h2>
                  <p className="text-muted-foreground">
                    Kontakta oss för support
                  </p>
                </div>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  För support gällande våra appar eller tjänster, vänligen kontakta oss på{' '}
                  <a 
                    href="mailto:erik@ingenjorsbyran.com" 
                    className="text-primary font-medium hover:underline"
                  >
                    erik@ingenjorsbyran.com
                  </a>
                  .
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 p-4 bg-secondary rounded-lg">
                <Clock size={20} className="text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Vi strävar efter att svara inom <strong className="text-foreground">24 timmar</strong>.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Kontakta support
                </h3>
                <a
                  href="mailto:erik@ingenjorsbyran.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Mail size={20} />
                  Skicka e-post
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
