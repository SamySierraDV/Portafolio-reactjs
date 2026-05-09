import { motion } from 'motion/react';
import { BookOpen, Rocket, Shield, Cpu, Code2, Globe, Database, Settings, ArrowUpRight, TrendingUp } from 'lucide-react';
import { cn } from '../../lib/utils';

const ProjectCard = ({ id, title, stack, formation, plays, image }: { id: string, title: string, stack: string[], formation: string, plays: string[], image: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="bg-neutral-950/60 backdrop-blur-xl border-t border-brand-cyan/50 p-6 rounded-xl relative overflow-hidden group hover:bg-neutral-950/80 transition-all will-change-transform transform-gpu"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Code2 className="w-24 h-24 text-brand-cyan" />
    </div>
    
    <div className="mb-6">
      <span className="font-accent text-[10px] text-brand-cyan border border-brand-cyan/30 px-2 py-1 rounded mb-2 inline-block font-bold">PROJECT_{id}</span>
      <h2 className="font-display text-2xl text-primary uppercase tracking-tight group-hover:text-brand-cyan transition-colors">{title}</h2>
    </div>

    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Settings className="w-4 h-4 text-brand-cyan" />
          <span className="font-accent text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Tactical Deployment</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-brand-surface text-brand-cyan text-xs font-bold rounded-full group-hover:bg-brand-cyan group-hover:text-brand-deep transition-all">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <Rocket className="w-4 h-4 text-brand-cyan" />
          <span className="font-accent text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Formation</span>
        </div>
        <div className="bg-brand-deep/50 p-4 border-l-2 border-brand-cyan rounded-r-lg">
          <p className="text-sm text-neutral-400 leading-relaxed italic">{formation}</p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <ArrowUpRight className="w-4 h-4 text-brand-cyan" />
          <span className="font-accent text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Key Plays</span>
        </div>
        <ul className="space-y-2">
          {plays.map((play, i) => (
            <li key={i} className="text-xs text-neutral-400 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-brand-cyan before:rounded-full before:shadow-[0_0_8px_#00f0ff]">
              {play}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default function Tactics() {
  return (
    <div className="space-y-10 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex-1">
          <h1 className="font-display text-5xl text-brand-cyan mb-2 uppercase">Work Experience</h1>
          <p className="text-neutral-400 max-w-3xl text-sm italic">
            A journey through my key roles and contributions, highlighting the technical and strategic impact on every project.
          </p>
        </div>
        <div className="bg-brand-high border border-brand-cyan/20 p-4 rounded-xl flex items-center gap-4">
          <div className="text-right">
            <div className="font-accent text-[10px] text-neutral-500 uppercase font-bold">Overall Impact</div>
            <div className="font-display text-2xl text-brand-cyan">High</div>
          </div>
          <TrendingUp className="text-brand-cyan w-8 h-8" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProjectCard 
          id="01"
          title="Software Developer | Granisammy Acabados S.A.S"
          stack={['Spring Boot', 'Vaadin', 'SOLID', 'REST APIs', 'PostgreSQL']}
          formation="Developed a payroll automation system using Spring Boot and Vaadin, applying SOLID principles for a maintainable and robust architecture."
          plays={['Reduced manual payroll processing time by +60%.', 'Improved maintainability by 35% and reduced production errors.', 'Integrated +15 REST endpoints with response times < 2s.', 'Decreased human error in salary calculations by 90%.', 'Increased HR operational efficiency by +40%.', 'Optimized database performance and queries by +30%.']}
          image="https://picsum.photos/seed/project1/800/400"
        />
        <ProjectCard 
          id="02"
          title="Java Software Engineer | Licisoluciones S.A.S BIC"
          stack={['Java', 'Web/Mobile', 'API Design', 'Microservices']}
          formation="Developed a web and mobile platform for intelligent restaurant management, integrating key modules and following software engineering best practices."
          plays={['Implemented +10 key features (reservations, QR orders, payments, admin panel).', 'Reduced customer service response times by +50%.', 'Integrated secure digital payments, reducing manual errors by 80%.', 'Developed AI-based recommendation system, increasing cross-selling potential by 25%.', 'Built administrative panel with sales metrics and menu management.']}
          image="https://picsum.photos/seed/project2/800/400"
        />

        <div className="lg:col-span-2 bg-neutral-950/40 backdrop-blur-xl border border-brand-cyan/30 rounded-xl overflow-hidden p-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 space-y-4">
            <div className="mb-2">
              <span className="font-accent text-[10px] text-brand-cyan border border-brand-cyan/30 px-2 py-1 rounded inline-block font-bold">PROJECT_03</span> {/* Keeping ID format */}
              <h2 className="font-display text-4xl text-primary uppercase mt-2">Freelance Developer | Self-Employed</h2>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border border-brand-cyan/20 shadow-2xl relative group">
              <img src="https://picsum.photos/seed/crypto/600/400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-brand-cyan/10 pointer-events-none" />
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            <div className="space-y-6">
              <div>
                <h4 className="font-accent text-[10px] text-neutral-500 uppercase tracking-widest font-bold border-b border-brand-cyan/10 pb-2">Key Technologies</h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['React', 'Node.js', 'MySQL', 'Real-time Data'].map(t => (
                    <span key={t} className="px-3 py-1 bg-brand-surface text-brand-cyan text-xs font-bold rounded ring-1 ring-brand-cyan/30">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-accent text-[10px] text-neutral-500 uppercase tracking-widest font-bold border-b border-brand-cyan/10 pb-2">Project Context</h4>
                <p className="text-sm text-neutral-400 mt-4 leading-relaxed font-sans italic">
                   Built a cryptocurrency platform using React, Node.js, and MySQL, featuring real-time interactive charts.
                </p>
              </div>
            </div>
            <div className="space-y-4">
               <h4 className="font-accent text-[10px] text-neutral-500 uppercase tracking-widest font-bold border-b border-brand-cyan/10 pb-2">Achievements & Contributions</h4>
               <ul className="space-y-3">
                 {['Increased user retention by 30% via real-time notifications and reactive UI.', 'Developed and maintained custom web and mobile applications.', 'Performed unit and integration testing to ensure high code quality.'].map((play, i) => (
                   <li key={i} className="flex items-center gap-3 text-xs text-on-surface">
                     <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00f0ff]" />
                     {play}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-brand-cyan/5 border border-brand-cyan/10 p-6 rounded-xl space-y-6">
          <div className="flex items-center gap-3">
            <BookOpen className="text-brand-cyan w-6 h-6" />
            <h3 className="font-display text-xl text-primary uppercase">Playbook</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-brand-deep border border-brand-cyan/5 rounded-lg group hover:border-brand-cyan/40 transition-colors">
              <Shield className="w-5 h-5 text-brand-cyan mb-2" />
              <div className="font-accent text-[10px] text-brand-cyan mb-1 uppercase font-black uppercase">Defensive Strategy</div>
              <p className="text-xs text-neutral-500 italic">"Write code that expects failure. Implement robust error boundaries and circuit breakers."</p>
            </div>
            <div className="p-4 bg-brand-deep border border-brand-cyan/5 rounded-lg group hover:border-brand-cyan/40 transition-colors">
              <Rocket className="w-5 h-5 text-brand-cyan mb-2" />
              <div className="font-accent text-[10px] text-brand-cyan mb-1 uppercase font-black uppercase">Offensive Drive</div>
              <p className="text-xs text-neutral-500 italic">"Performance is a feature. Optimize the critical path first, then scale horizontally."</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-brand-surface/40 p-8 rounded-xl border border-brand-cyan/10 flex flex-col justify-between group hover:bg-brand-surface/60 transition-all">
             <div className="space-y-4">
               <Cpu className="text-brand-cyan w-10 h-10 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
               <h4 className="font-display text-lg text-brand-cyan">Coding Philosophy</h4>
               <p className="text-sm text-neutral-400 font-sans">Clean Architecture and Domain Driven Design are the tactical anchors for every project build. Maintain strict encapsulation.</p>
             </div>
             <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100">
               <span className="font-mono text-[10px] uppercase text-neutral-500">PHIL_STABLE_v1.0</span>
               <span className="material-symbols-outlined text-brand-cyan text-sm">arrow_forward</span>
             </div>
          </div>
          <div className="bg-brand-surface/40 p-8 rounded-xl border border-brand-cyan/10 flex flex-col justify-between group hover:bg-brand-surface/60 transition-all">
             <div className="space-y-4">
               <Globe className="text-brand-cyan w-10 h-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform" />
               <h4 className="font-display text-lg text-brand-cyan">System Design</h4>
               <p className="text-sm text-neutral-400 font-sans">Prioritizing modularity and loose coupling to ensure rapid deployment cycles and easy scouting for technical debt.</p>
             </div>
             <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100">
               <span className="font-mono text-[10px] uppercase text-neutral-500">SYS_CORE_v2.4</span>
               <span className="material-symbols-outlined text-brand-cyan text-sm">arrow_forward</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
