import { useMemo, useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Layers, Code2, Globe, Database, Cpu, Cloud, TrendingUp, History, Terminal, Copy, Check, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import profilePhoto from '../../lib/images/foto-portafolio.webp';

const StatCard = ({ label, value, sublabel }: { label: string; value: string; sublabel?: string }) => (
  <div className="p-4 bg-brand-highest/40 backdrop-blur-sm border border-brand-cyan/10 rounded-lg hover:border-brand-cyan/40 transition-all hover:bg-brand-highest/60 group">
    <p className="text-[10px] text-brand-cyan/50 uppercase font-accent mb-1 group-hover:text-brand-cyan transition-colors">{label}</p>
    <p className="font-display font-bold text-xl text-on-surface tracking-tight">{value}</p>
    {sublabel && <p className="text-[10px] text-neutral-500 mt-1">{sublabel}</p>}
  </div>
);

const TacticalItem = ({ title, desc, level, icon: Icon }: { title: string; desc: string; level: string, icon: LucideIcon }) => (
  <div className="flex items-center justify-between p-4 bg-brand-surface rounded-lg border border-brand-cyan/10 hover:border-brand-cyan/40 transition-all group">
    <div className="flex items-center gap-4">
      <div className="p-2 bg-brand-deep rounded border border-brand-cyan/20 text-brand-cyan group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-accent text-xs text-brand-cyan uppercase tracking-wider">{title}</h4>
        <p className="text-[10px] text-neutral-500">{desc}</p>
      </div>
    </div>
    <span className="font-display font-bold text-xs text-brand-cyan uppercase tracking-wider">{level}</span>
  </div>
);

export default function Dashboard() {
  const [isChartVisible, setIsChartVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'sssamyandres@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  // 1. Memoizamos los datos para evitar cálculos innecesarios en cada re-render
  const radarData = useMemo(() => [
    { subject: 'JAVA CORE', A: 95 },
    { subject: 'SPRING ECO', A: 92 },
    { subject: 'SQL/NoSQL', A: 88 },
    { subject: 'FRONTEND', A: 75 },
    { subject: 'ARCHITECTURE', A: 85 },
    { subject: 'AGILE/SCRUM', A: 90 },
  ], []);

  // 2. Retrasamos el renderizado del gráfico hasta que el componente esté montado
  // Esto ayuda a reducir el TBT (Total Blocking Time) en la carga inicial
  useEffect(() => {
    const timer = setTimeout(() => setIsChartVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-8 pb-24 md:pb-10">
      {/* Profile Column */}
      <section className="md:col-span-2 lg:col-span-3 space-y-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-panel p-4 rounded-xl overflow-hidden relative group"
        >
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-brand-cyan text-brand-deep px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-[0_0_15px_rgba(0,240,255,0.6)]">
              Transferable
            </div>
          </div>
          <div className="aspect-[4/5] rounded-lg overflow-hidden border border-brand-cyan/20 relative">
            <img 
              alt="Samy Sierra Suárez Portrait" 
              loading="eager" // La foto de perfil es crítica, la cargamos rápido
              decoding="async"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
              src={profilePhoto}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent opacity-60" />
          </div>
          <div className="mt-6 space-y-2">
            <h1 className="font-display text-4xl text-brand-cyan uppercase tracking-tighter leading-none">Samy Sierra</h1>
            <p className="font-accent text-[10px] text-neutral-400 uppercase tracking-widest">SOFTWARE ENGINEER</p>
          </div>
        </motion.div>

        <div className="glass-panel p-5 rounded-xl space-y-4">
          <h3 className="font-accent text-[10px] text-neutral-400 uppercase tracking-widest mb-4">Physical & Technical Data</h3>
          <div className="grid grid-cols-2 gap-3">
            <StatCard label="Experience" value="3+ YRS" />
            <StatCard label="Position" value="Backend Developer" />
            <StatCard label="Location" value="Bogotá, Colombia" />
            <StatCard label="Location" value="REMOTE" />
            <StatCard label="Efficiency" value="Avanzado" />
          </div>
        </div>

        <div className="glass-panel p-5 rounded-xl space-y-4">
          <h3 className="font-accent text-[10px] text-neutral-400 uppercase tracking-widest">Quick Contact</h3>
          <div className="flex items-center justify-between p-3 bg-brand-deep/50 border border-brand-cyan/20 rounded-lg group hover:border-brand-cyan/50 transition-colors">
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-neutral-500 uppercase font-accent">Secure Email</span>
              <span className="text-xs text-primary font-mono truncate">{email}</span>
            </div>
            <button 
              onClick={handleCopy}
              className="p-2 hover:bg-brand-cyan/20 rounded-md transition-all text-brand-cyan shrink-0"
              title="Copy Email"
            >
              {copied ? <Check className="w-4 h-4 animate-in fade-in zoom-in" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </section>

      {/* Main Analysis Column */}
      <section className="md:col-span-4 lg:col-span-5 space-y-6">
        <div className="glass-panel p-6 rounded-xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-cyan/5 blur-[50px] rounded-full" />
          <h2 className="font-display text-2xl text-on-surface mb-4 border-l-4 border-brand-cyan pl-4 uppercase">Bio // Professional Intel</h2>
          <p className="text-sm text-neutral-400 leading-relaxed font-sans italic">
          Java Backend Developer with 3 years of experience in backend and full-stack applications, specializing in Spring Boot, Vaadin, MongoDB, MySQL,
          and Git/GitHub using Agile SCRUM methodologies. Certified in Oracle Next Education (ONE) – Backend (326 hours). I have reduced operational times
          by up to 60%, increased efficiency by over 40%, supported systems with more than 100 active users, and decreased manual errors by 90%. My focus
          is on building scalable, secure, and high-performance software, applying SOLID principles to generate a real impact on business processes.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-cyan/5 blur-[60px] rounded-full" />
          <h2 className="font-display text-2xl text-on-surface mb-6 border-l-4 border-brand-cyan pl-4">Tactical Breakdown</h2>
          <div className="space-y-4">
            <TacticalItem 
              title="Java & Spring Ecosystem" 
              desc="Boot, Security, Data, JPA/Hibernate" 
              level="Avanzado" 
              icon={Cpu} 
            />
            <TacticalItem 
              title="System Architecture" 
              desc="Microservices, MVC & SOLID Design" 
              level="Avanzado" 
              icon={Layers} 
            />
            <TacticalItem 
              title="Data & Persistence" 
              desc="MySQL, MongoDB & Performance Tuning" 
              level="Intermedio" 
              icon={Globe} 
            />
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl flex flex-col items-center">
          <h3 className="font-accent text-[10px] text-neutral-400 self-start mb-8 uppercase tracking-widest">Skill Radar Chart</h3>
          <div className="w-full h-[300px] bloom-effect">
            {isChartVisible && (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="rgba(0, 240, 255, 0.1)" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#00f0ff', fontSize: 10, fontWeight: 700 }}
                  />
                  <Radar
                    name="Samy"
                    dataKey="A"
                    stroke="#00f0ff"
                    fill="#00f0ff"
                    fillOpacity={0.2}
                    isAnimationActive={true}
                    animationBegin={200}
                    animationDuration={1000}
                  />
                </RadarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </section>

      {/* History & News Column */}
      <section className="md:col-span-6 lg:col-span-4 space-y-6">
        <div className="glass-panel p-6 rounded-xl h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl text-on-surface uppercase pr-4">Match History</h2>
            <History className="text-brand-cyan w-6 h-6" />
          </div>
          
          <div className="space-y-10 relative flex-1">
            {/* Vertical Line */}
            <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-brand-cyan/20 to-transparent" />
            
            {[
              { 
                year: 'AUG 2025 - PRESENT', 
                title: 'Granisammy S.A.S', 
                role: 'Software Developer',
                location: 'Bogotá, COL',
                desc: 'Automated payroll for 100+ staff via Spring Boot & SOLID. Optimized +15 REST endpoints for <2s latency.', 
                metric: '90% ERROR REDUCTION' 
              },
              { 
                year: 'JAN 2024 - JUL 2025', 
                title: 'Licisoluciones BIC', 
                role: 'Java Engineer',
                location: 'Bogotá, COL',
                desc: 'Smart restaurant ecosystem with AI cross-selling and secure payments. Reduced service times by 50%.', 
                metric: '+25% SALES POTENTIAL' 
              },
              { 
                year: 'AUG 2022 - JAN 2023', 
                title: 'Freelance Venture', 
                role: 'Full Stack Dev',
                location: 'Remote',
                desc: 'Engineered real-time crypto dashboards with React & Node.js. Boosted user retention by 30% via reactive UI.', 
                metric: 'REACTIVE STACK' 
              }
            ].map((item, i) => (
              <div key={i} className="relative pl-10 group">
                <div className={cn(
                  "absolute left-2 top-1.5 w-3 h-3 rounded-full border-2 border-brand-cyan transition-all duration-300",
                  i === 0 ? "bg-brand-cyan shadow-[0_0_10px_#00f0ff] scale-125" : "bg-brand-deep"
                )} />
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-brand-cyan/60 font-bold uppercase tracking-widest font-accent">{item.year}</span>
                    <span className="text-[8px] text-neutral-600 font-accent uppercase tracking-tighter">{item.location}</span>
                  </div>
                  <h4 className="font-display text-on-surface text-lg group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                  <p className="text-[10px] text-brand-cyan/40 font-accent uppercase font-black tracking-widest">{item.role}</p>
                  <p className="text-xs text-neutral-500 italic mb-2 leading-relaxed">{item.desc}</p>
                  <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-1 rounded text-[9px] font-black text-brand-cyan uppercase">
                    <TrendingUp className="w-3 h-3" />
                    {item.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-brand-cyan/10">
            <div className="p-4 rounded-xl bg-gradient-to-br from-brand-cyan/10 to-brand-deep border border-brand-cyan/20 glow-cyan">
              <p className="text-[10px] text-neutral-500 mb-1 uppercase tracking-widest font-accent">Deployment Velocity</p>
              <div className="flex items-end gap-2">
                <span className="font-display text-4xl text-brand-cyan font-black leading-none">1.5k</span>
                <span className="text-[10px] text-neutral-400 pb-1">Commits this season</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Impact Column */}
      <section className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 glass-panel p-6 flex flex-col justify-center items-center gap-4 text-center">
           <Terminal className="text-brand-cyan w-10 h-10 mb-2" />
           <h3 className="font-display font-bold text-brand-cyan uppercase">Primary Stack</h3>
           <div className="flex gap-4">
              <div className="p-2 bg-brand-surface rounded border border-brand-cyan/20 text-brand-cyan hover:bg-brand-cyan/10 cursor-pointer transition-colors">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="p-2 bg-brand-surface rounded border border-brand-cyan/20 text-brand-cyan hover:bg-brand-cyan/10 cursor-pointer transition-colors">
                <Database className="w-5 h-5" />
              </div>
              <div className="p-2 bg-brand-surface rounded border border-brand-cyan/20 text-brand-cyan hover:bg-brand-cyan/10 cursor-pointer transition-colors">
                <Cloud className="w-5 h-5" />
              </div>
           </div>
        </div>
        
        <div className="md:col-span-3 glass-panel p-6">
           <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-sm text-neutral-400 uppercase tracking-widest font-bold">Activity Velocity // Deployment Impact</h3>
              <div className="text-[10px] text-brand-cyan/60 font-accent uppercase">Live Tracked Statistics</div>
           </div>
           <div className="h-24 flex items-end gap-2">
              {[40, 60, 45, 90, 100, 70, 50, 80, 85, 40, 60, 75].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className={cn(
                    "flex-1 rounded-t transition-all hover:bg-brand-cyan",
                    i === 4 ? "bg-brand-cyan shadow-[0_0_15px_#00f0ff]" : "bg-brand-highest/60"
                  )}
                />
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
