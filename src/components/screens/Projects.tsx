import { motion } from 'motion/react';
import { RefreshCcw, MessageSquare, Users, Bitcoin, Calculator, Package, ExternalLink, Github, Trophy, Activity, Globe, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';
import batatabitphoto from '../../lib/images/batatabit.webp';
import secretFriend from '../../lib/images/secretfriend.webp';
import gestionInventory from '../../lib/images/gestionInventory.webp';

const MissionCard = ({ title, objective, tags, status, repoUrl, demoUrl, tacticalValue, image }: { 
  title: string;
  objective: string;
  tags: string[];
  status: 'OPERATIONAL' | 'STABLE' | 'LEGACY';
  repoUrl?: string;
  demoUrl?: string;
  tacticalValue: string;
  image: string;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-panel rounded-xl group hover:border-brand-cyan/50 transition-all duration-500 overflow-hidden flex flex-col bg-neutral-950/40"
  >
    {/* Visual Image & Status */}
    <div className="relative aspect-video overflow-hidden border-b border-brand-cyan/10">
      <img 
        src={image} 
        loading="lazy" // Las misiones se cargan solo cuando el usuario hace scroll
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
        alt={title} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent opacity-80" />
      
      <div className="absolute top-4 right-4">
        <span className={cn(
          "px-2 py-1 rounded font-accent text-[8px] font-black tracking-widest border",
          status === 'OPERATIONAL' ? "bg-green-500/10 border-green-500/50 text-green-400" : 
          status === 'STABLE' ? "bg-brand-cyan/10 border-brand-cyan/50 text-brand-cyan shadow-[0_0_10px_rgba(0,240,255,0.3)]" : 
          "bg-orange-500/10 border-orange-500/50 text-orange-400"
        )}>
          {status}
        </span>
      </div>

      <div className="absolute bottom-4 left-4">
        <h3 className="font-display text-2xl text-primary uppercase tracking-tighter drop-shadow-md">{title}</h3>
      </div>
    </div>

    {/* Body Information */}
    <div className="p-6 space-y-6 flex-1 flex flex-col">
      <div className="flex justify-between items-center gap-4">
        <a 
          href={demoUrl || repoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-brand-cyan text-brand-deep font-display font-black text-xs tracking-widest py-3 text-center rounded hover:bg-brand-cyan/80 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
        >
          WATCH DEMO
        </a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="p-2 border border-brand-cyan/20 rounded hover:bg-brand-cyan/10 transition-colors text-brand-cyan">
          <Github className="w-5 h-5" />
        </a>
      </div>

      <div className="space-y-2">
        <p className="font-accent text-[9px] text-neutral-500 uppercase font-black tracking-widest">Mission Objective</p>
        <p className="text-sm text-neutral-400 font-sans leading-relaxed italic line-clamp-3">{objective}</p>
      </div>

      <div className="space-y-3">
        <p className="font-accent text-[9px] text-neutral-500 uppercase font-black tracking-widest">Technical Skills</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-brand-surface border border-brand-cyan/20 text-brand-cyan text-[10px] font-bold rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-brand-cyan/10 flex justify-between items-end">
        <span className="font-accent text-[9px] text-neutral-500 uppercase font-black tracking-widest">Tactical Value</span>
        <span className="font-display text-3xl text-brand-cyan font-black leading-none">{tacticalValue}</span>
      </div>
    </div>
  </motion.div>
);

const FooterKPI = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex flex-col items-center md:items-start gap-1 p-4 md:p-0">
    <div className="flex items-center gap-2 mb-1">
      <Icon className="w-4 h-4 text-brand-cyan" />
      <span className="font-accent text-[9px] text-neutral-500 uppercase font-black tracking-[0.2em]">{label}</span>
    </div>
    <span className="font-display text-2xl text-primary font-bold">{value}</span>
  </div>
);

export default function Projects() {
  return (
    <div className="space-y-10 pb-28">
      {/* 1. Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-6xl text-primary leading-none uppercase tracking-tighter">Featured Missions</h1>
          <p className="text-brand-cyan font-accent text-[10px] font-black uppercase tracking-[0.3em] mt-2 border-l border-brand-cyan pl-4">Tactical Asset Deployment Portfolio</p>
        </div>
        <div className="glass-panel px-6 py-4 flex flex-col items-end border-brand-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
          <span className="font-accent text-[10px] text-neutral-500 uppercase font-bold mb-1">Total Impact Score</span>
          <span className="font-display text-4xl text-brand-cyan font-black">98.4</span>
        </div>
      </div>

      {/* 2. Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MissionCard 
          title="Inventory Manager"
          objective="Robust optimization system designed under MVC and DAO patterns for real-time stock control and supplier management."
          tags={['Java', 'Vaadin', 'MongoDB', 'Spring Actuator']}
          status="OPERATIONAL"
          tacticalValue="96%"
          image={gestionInventory}
        />
        <MissionCard 
          title="Payroll Automator"
          objective="Mission-critical engine for 100+ employees. Automates salary calculation and financial reporting with Spring Boot."
          tags={['Spring Boot', 'Vaadin', 'H2', 'PDF Engine']}
          status="STABLE"
          tacticalValue="92%"
          image="https://picsum.photos/seed/payroll/600/400"
        />
        <MissionCard 
          title="Alura API Gateway"
          objective="Secure REST architecture with JWT stateless authentication for enterprise-level forum management."
          tags={['Java', 'Spring Security', 'MySQL', 'JWT']}
          status="STABLE"
          tacticalValue="88%"
          image="https://picsum.photos/seed/forum/600/400"
          repoUrl="https://github.com/SamySierraDV/AluraLatam-ForoHub-Challenge-Alura"
        />
        <MissionCard 
          title="Global FX Converter"
          objective="Real-time currency conversion engine integrating external financial APIs with automated JSON logging."
          tags={['Java 17', 'HttpClient', 'JSON', 'API Integration']}
          status="OPERATIONAL"
          tacticalValue="94%"
          image="https://picsum.photos/seed/currency/600/400"
          repoUrl="https://github.com/SamySierraDV/AluraLatam-Conversor-de-monedas"
        />
        <MissionCard 
          title="Secret Friend Raffler"
          objective="Interactive group draw system using Canvas 2D for high-performance animations and custom easing."
          tags={['Vanilla JS', 'Canvas 2D', 'CSS3 Variables']}
          status="STABLE"
          tacticalValue="85%"
          image={secretFriend}
          repoUrl="https://github.com/SamySierraDV/Juego-Amigo-Secreto-JS"
          demoUrl="https://samysierradv.github.io/Juego-Amigo-Secreto-JS/"
        />
        <MissionCard 
          title="Batatabit Landing"
          objective="Performance-optimized crypto landing page built with Mobile-First methodologies and semantic HTML5."
          tags={['HTML5', 'CSS3', 'Responsive Design']}
          status="LEGACY"
          tacticalValue="82%"
          image={batatabitphoto}
          repoUrl="https://github.com/SamySierraDV/BatatabitProyect"
          demoUrl="https://samysierradv.github.io/BatatabitProyect/"
        />
      </div>

      {/* 3. Footer KPIs */}
      <div className="glass-panel p-8 rounded-xl bg-neutral-950/60 flex flex-col md:flex-row justify-between items-center gap-8 border-brand-cyan/20">
        <FooterKPI icon={Activity} label="Code Commits" value="1.5k+" />
        <div className="hidden md:block w-px h-10 bg-brand-cyan/20" />
        <FooterKPI icon={Trophy} label="Projects Shipped" value="06" />
        <div className="hidden md:block w-px h-10 bg-brand-cyan/20" />
        <FooterKPI icon={Globe} label="Technologies" value="12" />
        <div className="hidden md:block w-px h-10 bg-brand-cyan/20" />
        <FooterKPI icon={Zap} label="Avg Performance" value="90%" />
      </div>
    </div>
  );
}