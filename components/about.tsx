'use client'

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate developer with a keen eye for design. I believe that great products come from the intersection of beautiful design and robust engineering. Over the past 5+ years, I've had the opportunity to work on diverse projects ranging from startups to established corporations.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans frontend development, full-stack applications, and occasionally dabbling in design. I'm proficient with modern JavaScript frameworks, have a strong understanding of web performance, and am committed to writing clean, maintainable code.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or sharing knowledge with the developer community. I'm always excited about learning new technologies and tackling challenging problems.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'GraphQL', 'AWS'].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-accent/10 text-accent font-medium text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Experience</h3>
              <div className="space-y-3">
                <div className="pb-3 border-b border-border">
                  <p className="font-bold text-foreground">Senior Developer</p>
                  <p className="text-sm text-muted-foreground">Tech Company Inc. • 2023 - Present</p>
                </div>
                <div className="pb-3 border-b border-border">
                  <p className="font-bold text-foreground">Full Stack Developer</p>
                  <p className="text-sm text-muted-foreground">Digital Agency • 2021 - 2023</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">Frontend Developer</p>
                  <p className="text-sm text-muted-foreground">Startup Studio • 2019 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
