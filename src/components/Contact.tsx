import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Phone, label: 'Telefon', value: '076-009 51 95', href: 'tel:0760095195' },
    { icon: Mail, label: 'E-post', value: 'erik@ingenjorsbyran.com', href: 'mailto:erik@ingenjorsbyran.com' },
    { icon: MapPin, label: 'Adress', value: 'Slåttergatan 6, 256 56 Helsingborg' },
  ];

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Kontakt</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Erik Holmgren</h2>
          <p className="mt-4 text-muted-foreground">
            Ring eller mejla. Beskriv entreprenaden, omfattningen och tidplanen, så återkommer vi med
            förslag på omfattning och arvode.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default Contact;
