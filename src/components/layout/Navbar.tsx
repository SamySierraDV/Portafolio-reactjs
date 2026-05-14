import { Download, Share2 } from 'lucide-react';
import { Screen } from '../../App';
import { cn } from '../../lib/utils';

interface NavbarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function Navbar({ currentScreen, onNavigate }: NavbarProps) {
  const navItems: { label: string; value: Screen }[] = [
    { label: 'Dashboard', value: 'dashboard' },
    { label: 'Tactics', value: 'tactics' },
    { label: 'Projects', value: 'projects' },
    { label: 'History', value: 'metrics' },
    { label: 'Connect', value: 'connect' },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 h-16 bg-neutral-950/60 backdrop-blur-xl border-b border-brand-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
      <div className="flex items-center gap-4">
        <span className="text-lg font-display font-black tracking-widest text-brand-cyan uppercase">S. SIERRA SUÁREZ // PROSPECT ID</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={cn(
                "font-display uppercase tracking-tight transition-all duration-300 pb-1 text-sm font-semibold",
                currentScreen === item.value 
                  ? "text-brand-cyan border-b-2 border-brand-cyan" 
                  : "text-neutral-400 hover:text-cyan-200"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 border-l border-brand-cyan/20 pl-8">
          <button 
            onClick={() => window.open('/Samy_Sierra_Suarez_Backend_Engineer.pdf', '_blank')}
            className="p-2 hover:bg-brand-cyan/10 transition-all duration-300 rounded-full text-brand-cyan"
          >
            <Download className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-brand-cyan/10 transition-all duration-300 rounded-full text-brand-cyan">
            <Share2 className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-cyan/50 ring-2 ring-brand-cyan/20">
            <img 
              alt="Elite Developer Portrait" 
              src="https://picsum.photos/seed/developer/200/200" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
