import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "3SHULMOTORS PVT LTD",
      role: "Mobile Application Developer",
      period: "May 2025 – Present",
      location: "Ahmedabad, Gujarat",
      description: []
    },
    {
      company: "Technource",
      role: "Mobile Application Developer",
      period: "February 2024 – April 2025",
      location: "Ahmedabad, Gujarat",
      description: [
        "Developed and maintained mobile applications using Flutter with GetX architecture",
        "Actively participated in troubleshooting and debugging to ensure high-quality deliverables"
      ]
    },
    {
      company: "Excellent Webworld",
      role: "Android Developer",
      period: "September 2022 – January 2024",
      location: "Ahmedabad, Gujarat",
      description: [
        "Contributed to Truth Radio, a streaming application for audio and video content",
        "Utilized Kotlin and ExoPlayer to handle media streaming and downloads",
        "Enhanced IoT capabilities in existing applications through BLE connection improvements"
      ]
    },
    {
      company: "SpryBit",
      role: "Android Developer",
      period: "February 2022 – August 2022",
      location: "Ahmedabad, Gujarat",
      description: [
        "Improved performance and added new features to IoT-based applications using Kotlin"
      ]
    },
    {
      company: "Bluepixel Technologies LLP",
      role: "Android Developer",
      period: "November 2020 – February 2022",
      location: "Ahmedabad, Gujarat",
      description: [
        "Delivered successful mobile solutions by implementing efficient API integration and Room DB",
        "Created BLE communication and custom views for seamless user interaction"
      ]
    },
    {
      company: "Initiotechmedia",
      role: "Junior Android Developer",
      period: "September 2019 – March 2020",
      location: "Ahmedabad, Gujarat",
      description: [
        "Developed Android applications with Java",
        "Implemented features like API integration and user interface design"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional journey across 6 companies, delivering innovative mobile solutions
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-glow" />
                  
                  <div className="gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-accent font-medium">{exp.period}</div>
                        <div className="text-sm text-muted-foreground">{exp.location}</div>
                      </div>
                    </div>
                    
                    {exp.description.length > 0 && (
                      <ul className="space-y-2 mt-4">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
