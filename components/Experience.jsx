'use client';

export function Experience() {
  const experiences = [
    {
      title: 'MERN Stack Developer',
      company: 'TFG Solutions',
      period: 'Jan 2025 - Dec 2025',
      highlights: [
        'Designed and developed scalable MERN stack applications using React.js, Next.js, Node.js, and MongoDB',
        'Built and maintained digital product e-commerce modules with secure authentication and payment workflows',
        'Implemented Omni Chat Platform with real-time messaging and AI-powered automation',
        'Developed reusable and maintainable frontend components using Tailwind CSS and Shadcn/UI',
        'Integrated complex domain modules including healthcare management workflows',
      ],
    },
  ];

  const education = [
    {
      degree: 'BS in Computer Science',
      school: 'Sukkur IBA University',
      period: 'Jan 2021 - Jan 2025',
      coursework: ['OOP in Java', 'Data Structures & Algorithms', 'Blockchain Development', 'AI & Machine Learning'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience &amp; Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My professional journey building scalable applications and mastering modern web technologies.
          </p>
        </div>

        <div className="space-y-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary animate-fade-in-left">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="bg-background rounded-xl p-8 border border-border hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-bold">{exp.title}</h4>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground hover:text-foreground transition-colors">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary animate-fade-in-left">Education</h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-background rounded-xl p-8 border border-border hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <p className="text-primary font-semibold">{edu.school}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{edu.period}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: `${(idx + 1) * 0.1 + (i * 0.05)}s` }}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
