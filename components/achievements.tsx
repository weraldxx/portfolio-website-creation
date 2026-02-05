'use client'

import { Award, Trophy, Star, Users, Briefcase, TrendingUp } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    value: '50+',
    label: 'Projects Completed',
    description: 'Successfully delivered web and mobile applications',
  },
  {
    icon: Users,
    value: '30+',
    label: 'Happy Clients',
    description: 'Across startups and enterprise companies',
  },
  {
    icon: Award,
    value: '5',
    label: 'Industry Awards',
    description: 'Recognition for design and development excellence',
  },
  {
    icon: Briefcase,
    value: '5+',
    label: 'Years Experience',
    description: 'Building digital products and solutions',
  },
]

const highlights = [
  {
    icon: Star,
    title: 'Featured Developer',
    organization: 'Dev Community Awards 2024',
    description: 'Recognized for contributions to open-source projects and community engagement.',
  },
  {
    icon: TrendingUp,
    title: 'Top Performer',
    organization: 'Tech Company Inc.',
    description: 'Achieved 150% of quarterly goals, leading critical product initiatives.',
  },
  {
    icon: Award,
    title: 'Best UI/UX Design',
    organization: 'Digital Design Awards',
    description: 'Won gold for an innovative e-commerce platform redesign.',
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognition that highlight my journey in the tech industry.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card text-center hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-1">{achievement.value}</p>
                <p className="text-lg font-semibold text-foreground mb-1">{achievement.label}</p>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            )
          })}
        </div>

        {/* Highlights */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Notable Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.organization}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
