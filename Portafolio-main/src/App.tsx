/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/screens/Dashboard';
import Tactics from './components/screens/Tactics';
import Projects from './components/screens/Projects';
import Metrics from './components/screens/Metrics';
import Connect from './components/screens/Connect';
import { motion, AnimatePresence } from 'motion/react';

export type Screen = 'dashboard' | 'tactics' | 'projects' | 'metrics' | 'connect';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  // Lógica para que el elemento .balon siga al cursor
  useEffect(() => {
    const ball = document.querySelector('.balon') as HTMLElement;
    if (!ball) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Usamos pageX/Y para considerar el scroll del documento
      ball.style.left = `${e.pageX}px`;
      ball.style.top = `${e.pageY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'tactics':
        return <Tactics />;
      case 'projects':
        return <Projects />;
      case 'metrics':
        return <Metrics />;
      case 'connect':
        return <Connect />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-brand-deep text-on-background selection:bg-brand-cyan selection:text-brand-deep overflow-hidden">
      <Sidebar activeScreen={currentScreen} onNavigate={setCurrentScreen} />
      
      {/* Elemento seguidor del cursor (Balón) */}
      <div className="balon fixed w-4 h-4 bg-brand-cyan rounded-full pointer-events-none z-[9999] blur-[2px] shadow-[0_0_15px_#00f0ff] -translate-x-1/2 -translate-y-1/2 hidden md:block" />

      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Navbar currentScreen={currentScreen} onNavigate={setCurrentScreen} />
        
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 lg:p-10 relative scroll-smooth">
          {/* Background Ambient Glows */}
          <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] pointer-events-none -z-10" />
          <div className="fixed bottom-0 left-64 w-[600px] h-[600px] bg-secondary-container/5 blur-[150px] pointer-events-none -z-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-screen-2xl mx-auto h-full"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Mobile Navbar */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-neutral-950/90 backdrop-blur-md border-t border-brand-cyan/30 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
          {(['dashboard', 'tactics', 'projects', 'metrics', 'connect'] as Screen[]).map((screen) => (
            <button
              key={screen}
              onClick={() => setCurrentScreen(screen)}
              className={`flex flex-col items-center justify-center p-2 transition-all ${
                currentScreen === screen ? 'text-brand-cyan' : 'text-neutral-500'
              }`}
            >
              <div className={`p-2 rounded-lg ${currentScreen === screen ? 'bg-brand-cyan/10 shadow-[0_0_10px_rgba(0,240,255,0.4)]' : ''}`}>
                <span className="material-symbols-outlined">{
                  screen === 'dashboard' ? 'analytics' :
                  screen === 'tactics' ? 'architecture' :
                  screen === 'projects' ? 'grid_view' :
                  screen === 'metrics' ? 'stars' : 'verified'
                }</span>
              </div>
              <span className="font-display text-[10px] font-bold uppercase mt-1">{screen}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
