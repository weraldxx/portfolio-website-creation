'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-border">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Portfolio</h3>
            <p className="text-muted-foreground">
              Crafting beautiful digital experiences with code and design.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#services', label: 'Services' },
                { href: '#works', label: 'Works' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-accent transition-colors">
                  hello@example.com
                </a>
              </li>
              <li className="text-muted-foreground">San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
