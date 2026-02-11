'use client';

import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Orza.pk – E-Commerce Platform',
      period: 'Aug 2025 - Present',
      description:
        'Responsive customer and seller dashboards supporting 250+ products with cart, wishlist, order tracking, and inventory management.',
      technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      highlights: ['Responsive Design', '250+ Products', 'Order Tracking', 'Inventory Management'],

      liveLink: 'https://orza.pk/',
    },
    {
      title: 'Workwise – Corporate Social Solution (SaaS)',
      period: 'Feb 2025 - May 2025',
      description:
        'A large-scale enterprise SaaS platform designed for corporate and healthcare environments. Contributed to the development of a high-converting landing page and a robust Hospital Management System module, including patient lifecycle management, appointment scheduling, staff administration, and role-based operational controls.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
      highlights: [
        'Landing Page Development',
        'Hospital Management Module',
        'Patient Lifecycle Management',
        'Appointment Scheduling System',
        'Role-Based Access Control'
      ],
      liveLink: 'https://www.workw.com',
    },
    {
      title: 'Invader Store – E-Commerce Platform',
      period: 'Jun 2025 - Sep 2025',
      description:
        'Full-featured e-commerce platform with advanced product filtering, search capabilities, and comprehensive review system.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
      highlights: ['Category Filtering', '400+ Products', 'Review System', 'Secure Payments'],
      liveLink: 'https://staging.invader.shop/cart',
    },
    {
      title: 'Offline Muster Roll System (FYP)',
      period: 'Sep 2024 - Dec 2024',
      description:
        'Cross-platform application optimizing offline data handling efficiency by 40% using modern mobile and web technologies.',
      technologies: ['React Native', 'React.js', 'Node.js', 'MongoDB'],
      highlights: ['Offline Support', '40% Optimization', 'Cross-Platform', 'Real-time Sync'],
      liveLink: 'https://github.com/FYP21-Projects/MusterRollSystemWeb',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects showcasing my expertise in building scalable web applications and solving complex problems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-xl border transition-all hover:border-primary group animate-fade-in-up ${project.featured
                  ? 'bg-background border-primary/50 p-8 md:p-12'
                  : 'bg-background border-border p-8 hover:shadow-lg hover:-translate-y-1'
                }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-muted-foreground mb-3">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">Key Features:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {project.featured && project.liveLink && (
                  <div className="hidden lg:flex flex-col gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors flex items-center justify-center"
                      aria-label="Visit project"
                    >
                      <ExternalLink size={20} className="text-primary" />
                    </a>
                  </div>
                )}
              </div>

              {!project.featured && project.liveLink && (
                <div className="flex gap-3 mt-6 flex-wrap">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-semibold hover:underline flex items-center gap-2"
                  >
                    View Live <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
