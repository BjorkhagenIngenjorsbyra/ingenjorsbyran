import { MapPin, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Adress',
      value: 'Slåttergatan 6, 256 56 Helsingborg',
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '076-009 51 95',
      href: 'tel:0760095195',
    },
    {
      icon: Mail,
      label: 'E-post',
      value: 'erik@ingenjorsbyran.com',
      href: 'mailto:erik@ingenjorsbyran.com',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Långsiktiga samarbeten
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vi arbetar med utvalda kunder i långsiktiga partnerskap. 
            Har du en fråga eller ett intressant projekt? Hör gärna av dig.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-6 bg-secondary rounded-xl border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/support')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              <Mail size={20} />
              Skicka ett e-postmeddelande
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
