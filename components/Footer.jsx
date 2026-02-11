'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HR</span>
              </div>
              <span className="font-bold text-lg">Hishmat</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Full Stack Developer passionate about creating scalable and performant web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors block">
                Experience
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors block">
                Projects
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors block">
                Skills
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors block">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/hishmat-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-border hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/hishmatrai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-border hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hishmatdrawarh786@gmail.com"
                className="w-10 h-10 rounded-lg bg-border hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Hishmat Rai. All rights reserved.</p>
          <p>Designed &amp; Built with passion 💻</p>
        </div>
      </div>
    </footer>
  );
}
