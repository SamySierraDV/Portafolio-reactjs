import { useState } from 'react';
import { Send, Mail, MapPin, User, FileText, Gavel, Star, History, Linkedin, Github, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';
import BannerTransfer from '../../lib/images/BannerTransfer.png';
import { WEB3FORMS_KEY } from '../../lib/utils/formConfig';

const NegotiationTag = ({ label, active, onClick }: { label: string, active?: boolean, onClick: () => void }) => (
  <button 
    type="button"
    onClick={onClick}
    className={cn(
      "px-4 py-2 rounded-lg border font-accent text-[10px] uppercase font-bold tracking-widest transition-all",
      active 
        ? "border-brand-cyan bg-brand-cyan/10 text-brand-cyan shadow-[0_0_10px_rgba(0,240,255,0.4)]" 
        : "border-brand-cyan/20 text-neutral-500 hover:border-brand-cyan/50 hover:text-neutral-300"
    )}>
    {label}
  </button>
);

export default function Connect() {
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [category, setCategory] = useState('Full Transfer');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SENDING');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    
    const payload = {
      ...object,
      access_key: WEB3FORMS_KEY,
      category: category,
      subject: `New Negotiation: ${object.company || 'Unknown Entity'}`,
      from_name: object.name || "Portfolio Contact"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (data.success) {
        setStatus('SUCCESS');
        form.reset();
        setCategory('Full Transfer');
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="space-y-10 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-xl h-72 flex flex-col justify-end p-8 border border-brand-cyan/30 group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
          style={{ backgroundImage: `url(${BannerTransfer})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent" />
        <div className="relative z-10 space-y-2">
          <span className="text-brand-cyan font-accent text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">Status: Available for Transfer</span>
          <h1 className="font-display text-5xl text-primary font-black leading-none uppercase">Transfer Negotiations</h1>
          <p className="text-neutral-400 max-w-2xl font-sans text-sm italic">
            Initiate formal contact to secure the engineering lead for your next championship-level project.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Negotiation Details */}
        <div className="lg:col-span-7 space-y-10">
          <div className="glass-panel rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <FileText className="w-48 h-48" />
            </div>
            
            <div className="flex items-center gap-4 mb-10 border-b border-brand-cyan/20 pb-4 shadow-[0_4px_10px_-10px_#00f0ff]">
              <History className="text-brand-cyan w-6 h-6" />
              <h2 className="font-display text-2xl text-brand-cyan font-bold uppercase tracking-tight">Offer Document</h2>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="font-accent text-[10px] text-neutral-500 uppercase font-bold tracking-widest flex items-center gap-2">
                    <User className="w-3 h-3" /> Recruiting Entity
                  </label>
                  <input 
                    required
                    name="company"
                    type="text" 
                    placeholder="Club / Company Name"
                    className="w-full bg-brand-deep/50 border border-brand-cyan/30 rounded-lg text-primary focus:ring-brand-cyan/50 focus:border-brand-cyan transition-all px-4 py-3 text-sm placeholder:text-neutral-700" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-accent text-[10px] text-neutral-500 uppercase font-bold tracking-widest flex items-center gap-2">
                    <User className="w-3 h-3" /> Lead Negotiator
                  </label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-brand-deep/50 border border-brand-cyan/30 rounded-lg text-primary focus:ring-brand-cyan/50 focus:border-brand-cyan transition-all px-4 py-3 text-sm placeholder:text-neutral-700" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-accent text-[10px] text-neutral-500 uppercase font-bold tracking-widest flex items-center gap-2">
                  <Mail className="w-3 h-3" /> Contact Email
                </label>
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="email@example.com"
                  className="w-full bg-brand-deep/50 border border-brand-cyan/30 rounded-lg text-primary focus:ring-brand-cyan/50 focus:border-brand-cyan transition-all px-4 py-3 text-sm placeholder:text-neutral-700" 
                />
              </div>

              <div className="space-y-4">
                <label className="font-accent text-[10px] text-neutral-500 uppercase font-bold tracking-widest">Transfer Category</label>
                <div className="flex flex-wrap gap-3">
                  <NegotiationTag label="Full Transfer" active={category === 'Full Transfer'} onClick={() => setCategory('Full Transfer')} />
                  <NegotiationTag label="Consulting Loan" active={category === 'Consulting Loan'} onClick={() => setCategory('Consulting Loan')} />
                  <NegotiationTag label="Short-Term Tactical" active={category === 'Short-Term Tactical'} onClick={() => setCategory('Short-Term Tactical')} />
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-accent text-[10px] text-neutral-500 uppercase font-bold tracking-widest">Negotiation Details</label>
                <textarea 
                  required
                  name="message"
                  rows={6} 
                  placeholder="Outline the project scope, technical requirements, and strategic objectives..."
                  className="w-full bg-brand-deep/50 border border-brand-cyan/30 rounded-lg text-primary focus:ring-brand-cyan/50 focus:border-brand-cyan transition-all px-4 py-3 text-sm placeholder:text-neutral-700 resize-none"
                />
              </div>

              <button 
                disabled={status === 'SENDING'}
                className="w-full py-5 bg-brand-cyan text-brand-deep font-display font-black text-2xl tracking-[0.2em] shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-brand-cyan/80 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all active:scale-[0.98] flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed">
                <Gavel className={cn("w-7 h-7", status === 'SENDING' && "animate-spin")} />
                {status === 'SENDING' ? 'TRANSMITTING...' : status === 'SUCCESS' ? 'CONTRACT SENT' : 'PROPOSE CONTRACT'}
              </button>
              {status === 'ERROR' && <p className="text-red-500 text-xs font-accent uppercase text-center">Error in transmission. Please try again.</p>}
            </form>
          </div>
        </div>

        {/* Right Column: Intel & Agent Links */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-panel rounded-xl p-8">
            <h3 className="font-accent text-[10px] text-neutral-500 mb-8 uppercase tracking-[0.3em] font-black border-l border-brand-cyan/40 pl-4">Direct Intel</h3>
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Secure Channel', val: 'sssamyandres@gmail.com' },
                { icon: MapPin, label: 'Current Base', val: 'Remote / Bogotá, Colombia' }
              ].map((intel, i) => (
                <div key={i} className="flex items-start gap-4 p-5 border border-brand-cyan/10 rounded-xl hover:bg-brand-cyan/5 hover:border-brand-cyan/30 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-brand-deep flex items-center justify-center border border-brand-cyan/20 group-hover:border-brand-cyan/50 group-hover:shadow-[0_0_10px_#00f0ff] transition-all">
                    <intel.icon className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-600 font-accent uppercase font-black tracking-widest">{intel.label}</p>
                    <p className="text-primary font-display font-medium text-lg mt-1">{intel.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-xl p-8">
            <h3 className="font-accent text-[10px] text-neutral-500 mb-8 uppercase tracking-[0.3em] font-black border-l border-brand-cyan/40 pl-4">Agent Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Linkedin, label: 'LinkedIn', color: 'bg-blue-900/20 text-blue-400', url: 'https://www.linkedin.com/in/samy-sierra-dev' },
                { icon: Github, label: 'GitHub', color: 'bg-neutral-800 text-neutral-100', url: 'https://github.com/SamySierraDV' }
              ].map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={cn(
                  "flex flex-col items-center justify-center gap-4 p-8 border border-white/5 rounded-xl transition-all duration-300 group hover:border-brand-cyan/50",
                  link.color
                )}>
                  <link.icon className="w-10 h-10 group-hover:scale-110 transition-transform" />
                   <span className="font-accent text-[10px] font-black uppercase tracking-widest">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-brand-cyan/30 p-8 flex flex-col justify-between group shadow-2xl">
            <div 
              className="absolute inset-0 grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 opacity-40" 
              style={{ backgroundImage: "url('https://picsum.photos/seed/cyber/600/400')" }}
            />
            <div className="absolute inset-0 bg-brand-cyan/20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/30 to-transparent" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 mb-6 bg-brand-cyan flex items-center justify-center rotate-45 shadow-[0_0_20px_#00f0ff] group-hover:rotate-[225deg] transition-transform duration-700">
                <Star className="text-brand-deep -rotate-45 group-hover:rotate-[-225deg] transition-transform duration-700 w-6 h-6 fill-current" />
              </div>
              <h4 className="font-display text-2xl text-white font-black uppercase tracking-tighter shadow-sm">Elite Prospect</h4>
              <p className="text-[10px] text-brand-cyan font-black uppercase tracking-[0.2em] mt-1 drop-shadow-md">Global Ranking: Top 1% Tier</p>
            </div>
            
            <div className="relative z-10 flex justify-between items-end border-t border-white/20 pt-4">
              <div className="font-accent text-neutral-300 text-[8px] uppercase font-black tracking-[0.2em]">ID: SIERRA-S-2024-X</div>
              <div className="font-accent text-brand-cyan text-[8px] uppercase font-black tracking-[0.2em] animate-pulse">Verified Dossier</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
