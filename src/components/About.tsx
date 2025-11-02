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
              Solution-oriented and results-driven mobile application developer with <span className="text-primary font-semibold">4 years of experience in Android development</span> and <span className="text-primary font-semibold">10 months in Flutter</span>. 
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Skilled in <span className="text-accent font-semibold">IoT, BLE</span>, and mobile application architecture (MVVM, Jetpack components), with a strong focus on performance optimization and third-party API integration.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Adept at building scalable, high-performance applications while staying updated with emerging technologies. Passionate about delivering innovative, user-centric solutions that enhance user experience and exceed expectations.
            </p>
            
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">12+</div>
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
