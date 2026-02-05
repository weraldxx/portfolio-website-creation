'use client'

import { Code2, Palette, Smartphone, Zap } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building responsive, performant web applications using modern technologies and best practices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces that users love. Accessibility and usability first.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Crafting native and cross-platform mobile experiences that feel native on every device.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed and efficiency. Every millisecond counts for user experience.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services to help bring your ideas to life with expertise and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
