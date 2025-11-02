import { Code2, Smartphone, Database, Cpu, Wifi, CreditCard } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Languages",
      skills: ["Java", "Kotlin", "Flutter"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      skills: ["Android Components", "MVVM", "Jetpack Components"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & APIs",
      skills: ["Retrofit", "JSON Parsing", "Socket.io", "Firebase"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "IoT & Integration",
      skills: ["IoT", "Payment Gateway", "Agora.io"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive expertise across mobile development, IoT solutions, and modern technologies
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-foreground hover:bg-primary/10 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="gradient-card rounded-xl p-6 shadow-card border border-border">
            <h3 className="text-xl font-semibold mb-4 text-center">Version Control</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-sm font-medium text-accent hover:bg-accent/20 transition-colors">
                Git
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
