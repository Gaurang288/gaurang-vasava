import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "3Shul Motors Pvt Ltd",
      role: "Senior Software Engineer",
      period: "May 2025 – Present",
      location: "Ahmedabad, Gujarat",
      description: [
        "Integrated BLE communication for reliable hardware interaction and low-latency data exchange",
        "Developed reusable UI components improving development speed and consistency",
        "Implemented Shorebird for Flutter OTA updates, enabling instant fixes without Play Store releases",
        "Collaborated with backend teams to design efficient APIs and improve response times",
        "Conducted code reviews and mentored developers while enforcing clean architecture principles",
        "Optimized rendering and state management improving performance across low-end devices"
      ]
    },
    {
      company: "Technource Pvt Ltd",
      role: "Senior Android & Flutter Developer",
      period: "February 2024 – April 2025",
      location: "Ahmedabad, Gujarat",
      description: [
        "Handled client requirements, planning, and delivery of Android and Flutter apps end-to-end",
        "Built scalable applications and collaborated with backend teams for API integration",
        "Maintained code quality through reviews and best practices, supporting team and QA",
        "Managed Play Store and App Store deployments while continuously improving performance"
      ]
    },
    {
      company: "Excellent Webworld",
      role: "Android Developer",
      period: "September 2022 – January 2024",
      location: "Ahmedabad, Gujarat",
      description: [
        "Worked on R&D projects involving ExoPlayer for streaming and BLE for IoT applications",
        "Handled requirement gathering, estimation, testing, and coordination with firmware teams for BLE, FTP and audio transfer",
        "Implemented solutions using RxBLE and Room DB, managing multiple BLE connections",
        "Supported BA with technical inputs for proposals"
      ]
    },
    {
      company: "Sprybit",
      role: "Android Developer",
      period: "February 2022 – August 2022",
      location: "Ahmedabad, Gujarat",
      description: [
        "Improved performance and stability of BLE-based Android applications by fixing critical bugs",
        "Implemented MVVM architecture and Jetpack Navigation for better app structure",
        "Optimized BLE communication flow and ensured reliable data handling across multiple characteristics"
      ]
    },
    {
      company: "Bluepixel",
      role: "Android Developer",
      period: "November 2020 – February 2022",
      location: "Ahmedabad, Gujarat",
      description: [
        "Developed BLE-based Android applications including scanning, connection, and real-time communication",
        "Worked on API integration, custom views, responsive UI, theming, and localization",
        "Implemented MVVM architecture ensuring clean, maintainable code structure",
        "Conducted R&D on NFC (N-Tag256) and managed Play Store releases and deployments"
      ]
    },
    {
      company: "Initiotechmedia",
      role: "Junior Android Developer",
      period: "September 2019 – March 2020",
      location: "Ahmedabad, Gujarat",
      description: [
        "Learned Android development fundamentals and API integration using Retrofit in Java",
        "Built UI layouts and gained hands-on experience handling API responses",
        "Collaborated with the team to understand development practices and improve coding skills"
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
