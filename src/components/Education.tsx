import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="gradient-card rounded-xl p-8 shadow-card border border-border hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Bachelor of Engineering
                </h3>
                <div className="text-lg text-primary font-semibold mb-2">
                  Computer Engineering
                </div>
                <div className="text-foreground mb-2">
                  L.D. College of Engineering
                </div>
                <div className="text-accent font-medium">
                  2013 – 2020
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Key Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Software Development", "Mobile Computing", "Data Structures", "Algorithms", "Database Management"].map((area, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-foreground"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
