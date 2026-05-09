import { motion } from 'motion/react'; 
import { useMemo } from 'react';
import { LineChart, BarChart, Activity, Zap, History, Database, Cloud, Code2, Globe, Shield, CreditCard, Cpu, Lightbulb, Sparkles, Users, Handshake, Brain, Scale, Rocket, BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';

const ProficiencyItem = ({ label, percentage, level }: { label: string, percentage: number, level: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-24 h-24 flex items-center justify-center rounded-full mb-3 group">
      <svg className="w-full h-full -rotate-90">
        <circle cx="48" cy="48" r="44" stroke="rgba(0, 240, 255, 0.05)" strokeWidth="6" fill="transparent" />
        <motion.circle 
          cx="48" cy="48" r="44" 
          stroke="#00f0ff" 
          strokeWidth="6" 
          fill="transparent" 
          strokeDasharray="276.5" 
          initial={{ strokeDashoffset: 276.5 }}
          animate={{ strokeDashoffset: 276.5 - (276.5 * percentage) / 100 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
          className="drop-shadow-[0_0_8px_#00f0ff]"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display font-bold text-[10px] text-brand-cyan group-hover:scale-110 transition-transform uppercase tracking-tighter">{level}</span>
      </div>
    </div>
    <span className="font-accent text-[10px] text-neutral-400 uppercase tracking-widest font-bold">{label}</span>
  </div>
);

const MasteryBar = ({ label, val, level, colorClass = "bg-brand-cyan" }: { label: string, val: number, level: string, colorClass?: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between font-accent text-[10px] uppercase font-bold tracking-widest">
      <span className="text-neutral-500">{label}</span>
      <span className="text-brand-cyan">{level}</span>
    </div>
    <div className="h-1.5 bg-brand-highest/30 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${val}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={cn("h-full relative", colorClass)}
      >
        <div className="absolute inset-0 bg-white/20 blur-[2px]" />
      </motion.div>
    </div>
  </div>
);

export default function Metrics() {
  // Optimizamos el heatmap para que no se recalcule en cada render
  const heatmapData = useMemo(() => {
    return Array.from({ length: 365 }).map(() => ({
      active: Math.random() > 0.3,
      opacity: Math.random() > 0.3 ? (Math.floor(Math.random() * 4) + 1) * 0.25 : 0.1
    }));
  }, []);

  return (
    <div className="space-y-10 pb-24 md:pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-brand-cyan mb-2">
            <span className="h-px w-8 bg-brand-cyan"></span>
            <span className="font-accent text-[10px] font-bold tracking-widest uppercase">Deep Metric Analysis</span>
          </div>
          <h1 className="font-display text-5xl text-primary leading-none uppercase">Technical Capacity</h1>
        </div>
        <div className="flex gap-4">
          <div className="glass-panel p-4 flex flex-col items-end min-w-[140px] group border-brand-cyan/20">
            <span className="font-accent text-[10px] text-neutral-500 mb-1 font-bold">PROSPECT RATING</span>
            <span className="font-display text-2xl text-brand-cyan group-hover:scale-110 transition-transform">98.4/100</span>
          </div>
          <div className="glass-panel p-4 flex flex-col items-end min-w-[140px] border-brand-cyan/20">
            <span className="font-accent text-[10px] text-neutral-500 mb-1 font-bold">DEPLOY STATUS</span>
            <div className="flex items-center gap-2 text-green-400 font-accent text-xs font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
              Active
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 glass-panel p-6 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Globe className="w-40 h-40" />
          </div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-display text-lg text-primary uppercase pr-4">Language Proficiency</h3>
            <Zap className="text-brand-cyan w-5 h-5" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <ProficiencyItem label="Java" percentage={92} level="Avanzado" />
            <ProficiencyItem label="JavaScript" percentage={85} level="Intermedio" />
            <ProficiencyItem label="SQL" percentage={88} level="Intermedio" />
            <ProficiencyItem label="HTML5" percentage={90} level="Avanzado" />
            <ProficiencyItem label="CSS3" percentage={85} level="Intermedio" />
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="glass-panel p-6 flex flex-col justify-center gap-2 group hover:bg-brand-cyan/5 transition-colors">
            <div className="flex justify-between items-center">
              <span className="font-accent text-[10px] text-neutral-500 uppercase font-bold tracking-widest">Experience</span>
              <History className="text-brand-cyan/20 w-8 h-8 group-hover:text-brand-cyan transition-colors" />
            </div>
            <div className="font-display text-4xl text-brand-cyan font-black">3 YRS</div>
          </div>
          <div className="glass-panel p-6 flex flex-col justify-center gap-2 group hover:bg-brand-cyan/5 transition-colors">
            <div className="flex justify-between items-center">
              <span className="font-accent text-[10px] text-neutral-500 uppercase font-bold tracking-widest">Commit Frequency</span>
              <Activity className="text-brand-cyan/20 w-8 h-8 group-hover:text-brand-cyan transition-colors" />
            </div>
            <div className="font-display text-4xl text-brand-cyan font-black uppercase">Medium</div>
          </div>
        </div>

        <div className="md:col-span-12 glass-panel p-6 rounded-xl">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-display text-lg text-primary uppercase">Activity Heatmap // Yearly Contribution</h3>
            <div className="flex items-center gap-2 text-[8px] font-accent text-neutral-500 uppercase font-black">
              Less 
              <div className="flex gap-1">
                {[5, 20, 40, 70, 100].map(op => (
                  <div key={op} className="w-3 h-3 rounded-sm bg-brand-cyan" style={{ opacity: op/100 }} />
                ))}
              </div>
              More
            </div>
          </div>
          <div className="overflow-x-auto pb-4 scrollbar-thin">
            <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[1000px]">
              {heatmapData.map((data, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-3.5 h-3.5 rounded-sm transition-all hover:ring-1 hover:ring-white",
                    data.active ? "bg-brand-cyan" : "bg-neutral-800"
                  )} 
                  style={{ opacity: data.opacity }} 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-6 glass-panel p-6 rounded-xl">
          <h3 className="font-display text-lg text-primary uppercase mb-8 border-l-2 border-brand-cyan pl-4">Framework Mastery</h3>
          <div className="space-y-8">
            <MasteryBar label="Spring (Boot / Security / Data)" val={92} level="Avanzado" />
            <MasteryBar label="Vaadin & React (Frontend)" val={88} level="Intermedio" />
            <MasteryBar label="Node.js (Server Side)" val={80} level="Intermedio" />
            <MasteryBar label="JPA / Hibernate / MongoDB" val={85} level="Intermedio" />
          </div>
        </div>

        <div className="md:col-span-6 glass-panel p-6 rounded-xl">
          <h3 className="font-display text-lg text-primary uppercase mb-8 border-l-2 border-brand-cyan pl-4">Strategic Methodologies & Tools</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Shield, label: 'Microservices / MVC', detail: 'Distributed Arch' },
              { icon: Code2, label: 'OOP & SOLID', detail: 'Clean Code' },
              { icon: Activity, label: 'SCRUM / Agile', detail: 'Fast Iteration' },
              { icon: CreditCard, label: 'Payment Gateways', detail: 'Financial Logic' },
              { icon: Cpu, label: 'AI Integration', detail: 'Smart Features' },
              { icon: Globe, label: 'REST APIs', detail: 'Enterprise Int' }
            ].map((tool, i) => (
              <div key={i} className="p-3 bg-brand-deep/40 border border-brand-cyan/10 rounded-lg flex items-center gap-3">
                <tool.icon className="w-5 h-5 text-brand-cyan" />
                <div>
                  <p className="font-accent text-[9px] font-bold text-brand-cyan uppercase tracking-tighter">{tool.label}</p>
                  <p className="text-[8px] text-neutral-500 uppercase">{tool.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-3 bg-brand-cyan/5 border border-brand-cyan/20 rounded-lg flex justify-between items-center">
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-brand-surface border border-brand-cyan/30 text-[8px] text-brand-cyan font-bold rounded">GIT</span>
              <span className="px-2 py-1 bg-brand-surface border border-brand-cyan/30 text-[8px] text-brand-cyan font-bold rounded">GITHUB</span>
              <span className="px-2 py-1 bg-brand-surface border border-brand-cyan/30 text-[8px] text-brand-cyan font-bold rounded">MYSQL</span>
              <span className="px-2 py-1 bg-brand-surface border border-brand-cyan/30 text-[8px] text-brand-cyan font-bold rounded">MONGODB</span>
            </div>
            <span className="font-accent text-[8px] text-brand-cyan font-black animate-pulse uppercase">Core Stack Verified</span>
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-6 glass-panel p-6 rounded-xl">
          <h3 className="font-display text-lg text-primary uppercase mb-8 border-l-2 border-brand-cyan pl-4">Soft Skills & Mindset</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Lightbulb, label: 'Resolución de Problemas', detail: 'Creative Solutions' },
              { icon: Sparkles, label: 'Creatividad', detail: 'Innovative Thinking' },
              { icon: Users, label: 'Colaboración', detail: 'Team Synergy' },
              { icon: Handshake, label: 'Orientación al Servicio', detail: 'User-Centric' },
              { icon: Brain, label: 'Inteligencia Emocional', detail: 'Empathy & Adaptability' },
              { icon: Scale, label: 'Toma de Decisiones', detail: 'Strategic Choices' },
              { icon: Rocket, label: 'Proactivo', detail: 'Initiative Driven' },
              { icon: BookOpen, label: 'Autodidacta', detail: 'Continuous Learning' }
            ].map((skill, i) => (
              <div key={i} className="p-3 bg-brand-deep/40 border border-brand-cyan/10 rounded-lg flex items-center gap-3">
                <skill.icon className="w-5 h-5 text-brand-cyan shrink-0" />
                <div className="min-w-0">
                  <p className="font-accent text-[9px] font-bold text-brand-cyan uppercase tracking-tighter truncate">{skill.label}</p>
                  <p className="text-[8px] text-neutral-500 uppercase truncate">{skill.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-3 bg-brand-cyan/5 border border-brand-cyan/20 rounded-lg flex flex-wrap gap-2 justify-between items-center">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-brand-surface border border-brand-cyan/30 text-[8px] text-brand-cyan font-bold rounded">ADAPTABILITY</span>
              <span className="px-2 py-1 bg-brand-surface border border-brand-cyan/30 text-[8px] text-brand-cyan font-bold rounded">COMMUNICATION</span>
              <span className="px-2 py-1 bg-brand-surface border border-brand-cyan/30 text-[8px] text-brand-cyan font-bold rounded">LEADERSHIP</span>
            </div>
            <span className="font-accent text-[8px] text-brand-cyan font-black animate-pulse uppercase text-right">Human Factor Optimized</span>
          </div>
        </div>
      </div>
    </div>
  );
}
