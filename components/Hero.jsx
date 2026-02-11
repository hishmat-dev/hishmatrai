'use client';

import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6 inline-block animate-fade-in-up">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full animate-pulse-glow">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Full Stack Developer
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              I'm <span className="text-foreground font-semibold">Hishmat Rai</span>, a passionate Full Stack Developer skilled in MERN, Java, and Spring Boot, specializing in building high-performance web applications. Experienced with React.js, Node.js, Spring Boot microservices, and PostgreSQL, delivering well-tested, scalable, and user-focused digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#projects"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Hishmat_Resume.pdf"
                download
                className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                <Download size={20} className="" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="border border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-all hover:shadow-lg hover:-translate-y-1 hidden sm:flex items-center justify-center gap-2"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://github.com/hishmat-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/hishmatrai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hishmatdrawarh786@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>


          {/* Visual Element */}
          <div
            className="relative  md:flex items-center justify-center animate-fade-in-right"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/profile.png"
                alt="Hishmat Rai"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
