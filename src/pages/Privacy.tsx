import Layout from '@/components/Layout';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Integritetspolicy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Senast uppdaterad: Augusti 2026
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
                  <Shield size={28} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Din integritet är viktig för oss
                  </h2>
                  <p className="text-muted-foreground">
                    Björkhagen Ingenjörsbyrå AB
                  </p>
                </div>
              </div>

              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    1. Inledning
                  </h3>
                  <p>
                    Denna integritetspolicy beskriver hur Björkhagen Ingenjörsbyrå AB ("vi", "oss" eller "vår") 
                    samlar in, använder och skyddar din personliga information när du använder vår webbplats
                    och våra tjänster.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    2. Information vi samlar in
                  </h3>
                  <p>
                    Vi kan samla in följande typer av information:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Kontaktinformation (namn, e-postadress, telefonnummer)</li>
                    <li>Användningsdata och analyser</li>
                    <li>Teknisk information om din enhet</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    3. Hur vi använder din information
                  </h3>
                  <p>
                    Vi använder insamlad information för att:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Tillhandahålla och förbättra våra tjänster</li>
                    <li>Kommunicera med dig angående support och uppdateringar</li>
                    <li>Säkerställa säkerheten i våra system</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    4. Dataskydd
                  </h3>
                  <p>
                    Vi implementerar lämpliga tekniska och organisatoriska åtgärder för att skydda 
                    din personliga information mot obehörig åtkomst, ändring, avslöjande eller förstörelse.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    5. Dina rättigheter
                  </h3>
                  <p>
                    Du har rätt att begära tillgång till, rättelse av eller radering av dina personuppgifter. 
                    Kontakta oss för att utöva dessa rättigheter.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    6. Kontakt
                  </h3>
                  <p>
                    Om du har frågor om denna integritetspolicy, vänligen kontakta oss på{' '}
                    <a 
                      href="mailto:erik@ingenjorsbyran.com" 
                      className="text-primary font-medium hover:underline"
                    >
                      erik@ingenjorsbyran.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
