import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  const contactInfo = [
    { icon: Phone, label: 'Telefon', value: '076-009 51 95', href: 'tel:0760095195' },
    { icon: Mail, label: 'E-post', value: 'erik@ingenjorsbyran.com', href: 'mailto:erik@ingenjorsbyran.com' },
    { icon: MapPin, label: 'Adress', value: 'Slåttergatan 6, 256 56 Helsingborg' },
  ];

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Kontakt</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Hör av dig</h2>
            <p className="mt-4 text-muted-foreground">
              Beskriv projektet och vilket skede det är i, så återkommer vi med hur vi kan hjälpa till
              och vad det kostar.
            </p>

            <div className="mt-10 space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-card border border-border p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
