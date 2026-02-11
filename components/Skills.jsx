'use client';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'Redux', 'Zustand', 'Tailwind CSS', 'Shadcn/UI', 'Material UI'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js','Java','Spring Boot', 'REST APIs', 'Python', 'MongoDB', 'PostgreSQL', 'MySQL'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'CI/CD', 'Mocha/Chai', 'Vitest', 'SonarQube'],
    },
    {
      category: 'Core Concepts',
      skills: ['OOP', 'DSA', 'Blockchain', 'Responsive Design', 'Performance Optimization', 'Testing'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive expertise across the full stack, from interactive frontend interfaces to robust backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={category.category} className="bg-background rounded-xl p-8 border border-border hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h3 className="text-xl font-bold mb-6 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sidx) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-lg hover:scale-105 cursor-default animate-scale-in"
                    style={{ animationDelay: `${(idx * 0.1) + (sidx * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
