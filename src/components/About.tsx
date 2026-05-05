const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="gradient-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Results-driven Mobile Application Developer with <span className="text-primary font-semibold">5+ years of experience</span> designing and delivering scalable, high-performance Android and cross-platform applications. Proficient in <span className="text-primary font-semibold">Kotlin, Java, Flutter</span>, and the Android SDK, with strong expertise in MVVM, Clean Architecture, and SOLID principles.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Specialized in <span className="text-accent font-semibold">IoT-based mobile solutions</span>, leveraging BLE, NFC, MQTT, Classic Bluetooth, FTP, and OTA updates for real-time device communication and seamless hardware integration. Experienced in RESTful API integration, Firebase, Retrofit, and third-party services.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Demonstrated expertise in performance optimization, debugging, and memory management, with a strong focus on delivering user-centric, reliable, and secure applications, while effectively collaborating in Agile environments and continuously adopting modern Android frameworks and emerging technologies.
            </p>
            
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">6</div>
                  <div className="text-muted-foreground">Companies Worked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
