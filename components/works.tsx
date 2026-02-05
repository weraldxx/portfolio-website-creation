'use client'

import { ExternalLink } from 'lucide-react'

const works = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration and inventory management.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    link: '#',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization and user management system.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    link: '#',
  },
  {
    title: 'Mobile App',
    description: 'Cross-platform mobile application for fitness tracking with social features.',
    tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
    link: '#',
  },
  {
    title: 'Design System',
    description: 'Comprehensive design system and component library for enterprise applications.',
    tags: ['React', 'Storybook', 'TypeScript', 'CSS-in-JS'],
    link: '#',
  },
  {
    title: 'Content Platform',
    description: 'Headless CMS with dynamic content management and publishing workflows.',
    tags: ['Next.js', 'Contentful', 'GraphQL', 'Vercel'],
    link: '#',
  },
  {
    title: 'Data Visualization',
    description: 'Interactive data visualization tool for business intelligence and reporting.',
    tags: ['D3.js', 'React', 'WebGL', 'Three.js'],
    link: '#',
  },
]

export function Works() {
  return (
    <section id="works" className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Selected Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent projects that showcase my skills and experience across different domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <a
              key={index}
              href={work.link}
              className="group p-6 rounded-lg border border-border bg-card hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {work.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <p className="text-muted-foreground mb-4">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
