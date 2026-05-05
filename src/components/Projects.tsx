import { ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Truth Radio",
      description: "A streaming app for live and on-demand audio/video content with adaptive playback and offline downloads.",
      tech: ["Kotlin", "ExoPlayer", "Agora.io", "Room", "Retrofit"],
      highlights: [
        "Customized ExoPlayer for adaptive M3U8 playback and offline downloads",
        "Integrated Agora.io for live audio/video sessions",
        "Implemented background streaming, caching, and playback state management using MVVM"
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.truthradio.OTT",
      featured: true
    },
    {
      title: "i-Safe (Komatsu)",
      description: "Industrial IoT application for safety and machine data monitoring with real-time sensor data.",
      tech: ["Java", "BLE", "Room Database", "MVVM"],
      highlights: [
        "Managed BLE connections to read GUS inclinometer and slew sensor data",
        "Created custom dashboards for visual data representation",
        "Optimized BLE reconnects and reduced data latency"
      ],
      featured: true
    },
    {
      title: "Right Weigh Scale",
      description: "Smart IoT solution for monitoring and managing vehicle load weights with real-time accuracy.",
      tech: ["Kotlin", "BLE", "MVVM", "Room"],
      highlights: [
        "Integrated BLE modules for real-time data acquisition from weighing sensors",
        "Implemented multi-device connection management and calibration handling",
        "Focused on data accuracy, user alerts, and Bluetooth performance"
      ],
      featured: true
    },
    {
      title: "On2Cook",
      description: "IoT-based smart cooking device control application with firmware update capabilities.",
      tech: ["Kotlin", "BLE", "FTP", "OTA", "MVVM"],
      highlights: [
        "Handled multi-device BLE communication and file transfers",
        "Integrated OTA firmware updates and FTP file sharing for recipes and logs",
        "Designed BLE log management system for diagnostics"
      ],
      featured: true
    },
    {
      title: "AMP Research",
      description: "Automotive IoT app for controlling and monitoring vehicle power steps.",
      tech: ["Kotlin", "BLE", "MVVM"],
      highlights: [
        "Enhanced BLE read/write handling for automotive hardware control",
        "Improved UI and connection stability for end users",
        "Conducted codebase optimization and performance tuning"
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.amp.powerstep&hl=en_IN"
    },
    {
      title: "Swibber",
      description: "A social networking and e-commerce hybrid application with real-time features.",
      tech: ["Kotlin", "Retrofit", "Socket.io", "MVVM"],
      highlights: [
        "Implemented real-time chat with Socket.io integration",
        "Added API-driven feeds, profiles, and store sections",
        "Improved overall performance and user engagement flow"
      ]
    },
    {
      title: "eSartor",
      description: "Cross-platform e-commerce application tailored for fashion brands.",
      tech: ["Flutter", "GetX", "Firebase"],
      highlights: [
        "Developed responsive cross-platform UI with GetX for state management",
        "Integrated secure payment and order management APIs",
        "Enhanced browsing and checkout UX for seamless performance"
      ],
      playStoreUrl: "https://apps.apple.com/us/app/esartor/id6504975941"
    },
    {
      title: "Conntap",
      description: "NFC-powered social sharing application for contactless profile exchange.",
      tech: ["Kotlin", "NFC (N-Tag256)"],
      highlights: [
        "Enabled contactless social profile sharing using NFC tags",
        "Implemented read/write logic and secure data encoding",
        "Focused on instant exchange and usability"
      ]
    },
    {
      title: "Beacon Config App",
      description: "BLE beacon configuration and management application.",
      tech: ["Kotlin", "BLE", "Jetpack Compose"],
      highlights: [
        "Built beacon scanning and configuration tools",
        "Supported multi-beacon connectivity and real-time monitoring",
        "Modernized UI with Jetpack Compose"
      ]
    },
    {
      title: "Rewarda",
      description: "Reward and loyalty app for user engagement and redemption.",
      tech: ["Kotlin", "Firebase", "Retrofit", "MVVM"],
      highlights: [
        "Integrated Firebase authentication, push notifications, and analytics",
        "Implemented dynamic rewards and redemption system",
        "Designed smooth API response handling with sealed classes"
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.rewarda"
    },
    {
      title: "Messaging Hub",
      description: "Internal R&D tool for Telegram API and performance testing.",
      tech: ["Kotlin", "Socket.io", "Telegram API"],
      highlights: [
        "Researched Telegram automation APIs and optimized performance",
        "Improved message sync and latency handling",
        "Contributed to backend optimization and testing workflows"
      ]
    },
    {
      title: "Nchh",
      description: "Payment gateway integration for mobile app transactions.",
      tech: ["Kotlin", "Cashfree SDK", "Retrofit"],
      highlights: [
        "Integrated Cashfree Payment Gateway with backend confirmation",
        "Focused on secure transaction flows and payment callback management",
        "Designed an intuitive UI for transaction tracking"
      ]
    },
    {
      title: "KYCS ID PRO",
      description: "Real-time asset tracking solution using Bluetooth and GPS technologies.",
      tech: ["Kotlin", "BLE", "GPS", "Location Services"],
      highlights: [
        "Integrated Bluetooth for real-time location tracking",
        "Combined Cellular and GPS technologies for accurate positioning",
        "Designed for high-value asset monitoring"
      ],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.kycs"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of innovative mobile applications spanning IoT, streaming, e-commerce, and social platforms
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300 group ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.playStoreUrl && (
                  <a 
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-accent">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
