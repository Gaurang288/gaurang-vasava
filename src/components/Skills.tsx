import { Code2, Smartphone, Database, Cpu, CreditCard, Sparkles, Wrench, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Languages",
      skills: ["Java", "Kotlin", "Dart"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Frameworks & Architecture",
      skills: ["Native Android", "Flutter", "MVVM", "Clean Architecture", "Jetpack Components"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "IoT & Communication",
      skills: ["BLE", "NFC", "MQTT", "Socket.io", "Classic Bluetooth", "FTP", "OTA"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & Services",
      skills: ["Retrofit", "JSON Parsing", "Firebase", "Agora.io", "REST APIs"]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payments",
      skills: ["Cashfree", "Stripe", "In-App Purchases"]
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI & Productivity",
      skills: ["ChatGPT", "Gemini", "Antigravity"]
    }
  ];

  const tools = ["Android Studio", "Xcode", "Visual Studio", "Figma", "Photoshop", "Adobe XD"];
  const versionControl = ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Trello", "Asana"];

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
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="gradient-card rounded-xl p-6 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Tools & IDEs</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-foreground hover:bg-primary/10 hover:border-primary/50 transition-colors">{t}</span>
              ))}
            </div>
          </div>
          <div className="gradient-card rounded-xl p-6 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Version Control & Collaboration</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {versionControl.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-secondary border border-border rounded-full text-sm text-foreground hover:bg-accent/10 hover:border-accent/50 transition-colors">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
