import { LucideIcon, LayoutDashboard, Grid3X3, History, LineChart, Send, Verified, Download } from 'lucide-react';
import { Screen } from '../../App';
import { cn } from '../../lib/utils';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem = ({ icon: Icon, label, active, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-4 px-6 py-4 transition-all duration-300 font-display font-medium text-xs uppercase tracking-widest",
      active 
        ? "bg-brand-cyan/10 text-brand-cyan border-r-4 border-brand-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]" 
        : "text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800/50"
    )}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
);

interface SidebarProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function Sidebar({ activeScreen, onNavigate }: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 bg-neutral-950/80 backdrop-blur-2xl border-r border-brand-cyan/20 py-8 relative z-40">
      <div className="px-6 mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-brand-cyan/20 rounded-lg flex items-center justify-center border border-brand-cyan/40">
            <Verified className="w-6 h-6 text-brand-cyan" />
          </div>
          <div>
            <p className="font-display font-black text-brand-cyan leading-tight text-sm">SCOUTING REPORT</p>
            <p className="text-[10px] text-neutral-500 font-mono tracking-tighter">ELITE_DEV_v2.0</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        <NavItem active={activeScreen === 'dashboard'} onClick={() => onNavigate('dashboard')} icon={LayoutDashboard} label="Dashboard" />
        <NavItem active={activeScreen === 'tactics'} onClick={() => onNavigate('tactics')} icon={Grid3X3} label="Tactics" />
        <NavItem active={activeScreen === 'projects'} onClick={() => onNavigate('projects')} icon={Grid3X3} label="Projects" />
        <NavItem active={activeScreen === 'metrics'} onClick={() => onNavigate('metrics')} icon={LineChart} label="Metrics" />
        <NavItem active={activeScreen === 'connect'} onClick={() => onNavigate('connect')} icon={Send} label="Connect" />
      </nav>

      <div className="px-6 mt-auto">
        <button 
          onClick={() => window.open('/Samy_Sierra_Suarez_Backend_Engineer.pdf', '_blank')}
          className="w-full py-3 bg-brand-cyan text-brand-deep font-display font-bold text-[10px] tracking-widest uppercase rounded hover:bg-brand-cyan/80 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)]"
        >
          Download Dossier
        </button>
      </div>
    </aside>
  );
}
