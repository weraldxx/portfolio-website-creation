'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's collaborate and create something amazing together. Get in touch today to discuss your next project.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  )
}
