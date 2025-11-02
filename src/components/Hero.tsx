import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-50" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10 animate-slide-up">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Available for New Opportunities
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            Gaurang Vasava
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium">
            Android & Flutter Developer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Crafting innovative mobile solutions with 4+ years of experience in Android development and Flutter.
            Specializing in IoT, BLE integration, and high-performance applications.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button onClick={() => scrollToSection("projects")} size="lg" className="gradient-primary shadow-glow hover:scale-105 transition-all">
              View Projects
            </Button>
            <Button onClick={() => scrollToSection("contact")} size="lg" variant="secondary" className="hover:scale-105 transition-all">
              Get In Touch
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <a href="mailto:vasavagaurang727@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-sm">vasavagaurang727@gmail.com</span>
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="tel:+918460004078" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-sm">+91-8460004078</span>
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="https://www.linkedin.com/in/gaurang727/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
