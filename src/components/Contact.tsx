import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in working together? Let's connect and discuss how I can help bring your mobile app ideas to life
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a 
              href="mailto:vasavagaurang727@gmail.com"
              className="gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    vasavagaurang727@gmail.com
                  </div>
                </div>
              </div>
            </a>
            
            <a 
              href="tel:+918460004078"
              className="gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Phone</div>
                  <div className="text-foreground font-medium group-hover:text-accent transition-colors">
                    +91-8460004078
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          <div className="gradient-card rounded-xl p-6 shadow-card border border-border mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Location</div>
                <div className="text-foreground font-medium">Vejalpur, Ahmedabad, Gujarat, India</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Available for freelance projects and full-time opportunities</p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gradient-primary shadow-glow hover:scale-105 transition-all">
                <a href="mailto:vasavagaurang727@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
