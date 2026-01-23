"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, Square, RefreshCcw, Zap, Plus, 
  Trash2, Cpu, Activity, Power, ArrowRight 
} from 'lucide-react'

interface Block {
  id: string;
  type: 'TON' | 'MOVE' | 'R_TRIG';
  x: number;
  y: number;
  isActive: boolean;
}

export default function ZenithEngineeringStudio() {
  // --- LADDER LOGIC STATE ---
  const [startBtn, setStartBtn] = useState(false);
  const [stopBtn, setStopBtn] = useState(false);
  const [motorCoil, setMotorCoil] = useState(false);

  // --- FUNCTION BLOCK STATE ---
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  // --- SIMULATION ENGINE ---
  useEffect(() => {
    const timer = setInterval(() => {
      // 1. Resolve Ladder Logic (Seal-in Circuit logic based on your uploaded diagram)
      // Logic: (Start OR Seal-in) AND NOT Stop
      setMotorCoil(prev => (startBtn || prev) && !stopBtn);

      // 2. Resolve Function Blocks (Random Pulse if Simulating)
      if (isSimulating) {
        setBlocks(prev => prev.map(b => ({ ...b, isActive: Math.random() > 0.6 })));
      }
    }, 150);
    return () => clearInterval(timer);
  }, [startBtn, stopBtn, isSimulating]);

  const addFB = (type: Block['type']) => {
    const newBlock: Block = {
      id: `fb-${Date.now()}`,
      type,
      x: 30, y: 30 + (blocks.length * 25),
      isActive: false
    };
    setBlocks([...blocks, newBlock]);
  };

  return (
    <div className="w-full bg-[#0b0e14] border border-white/5 rounded-2xl overflow-hidden font-mono text-slate-300 shadow-2xl">
      
      {/* TOP CONTROL BAR */}
      <div className="p-4 border-b border-white/5 bg-[#0d111a] flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-white">STUDIO_ID: ZENITH_V1</span>
        </div>
        <button 
          onClick={() => setIsSimulating(!isSimulating)}
          className={`px-4 py-1.5 rounded text-[10px] font-bold transition-all border ${
            isSimulating ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-green-500/10 border-green-500 text-green-500'
          }`}
        >
          {isSimulating ? 'TERMINATE_SCAN' : 'INITIALIZE_SIMULATION'}
        </button>
      </div>

      {/* DUAL-PANE WORKBENCH */}
      <div className="relative flex flex-col md:flex-row min-h-[550px]">
        
        {/* THE CENTER DIVIDER (Matches Courses.tsx Roadmap Style) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-green-500/50 via-green-500/10 to-transparent hidden md:block shadow-[0_0_15px_rgba(34,197,94,0.2)]" />

        {/* SECTION 1: LADDER LOGIC (LEFT) */}
        <div className="flex-1 p-8 flex flex-col border-b md:border-b-0">
          <div className="mb-6">
            <h3 className="text-green-500 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Zap size={14} /> Ladder_Logic_Diagram
            </h3>
            <p className="text-[9px] text-slate-500 mt-1 uppercase">Physical_IO_Simulation</p>
          </div>

          <div className="flex-1 min-h-[350px] relative border border-white/5 bg-black/40 rounded-lg flex flex-col justify-center px-10">
            {/* Rung Path Background */}
            <div className={`absolute top-1/2 left-0 w-full h-[2px] transition-colors duration-300 ${motorCoil ? 'bg-green-500 shadow-[0_0_15px_#22c55e]' : 'bg-slate-800'} -translate-y-1/2`} />
            
            <div className="relative z-10 flex justify-between items-center">
              <div className="flex flex-col gap-12">
                <div className="flex gap-10">
                  <div className="flex flex-col items-center gap-2">
                    <button 
                      onMouseDown={() => setStartBtn(true)} onMouseUp={() => setStartBtn(false)}
                      className={`w-12 h-12 border-2 rounded-md flex items-center justify-center transition-all ${startBtn ? 'bg-green-500 border-green-400 text-black shadow-[0_0_15px_#22c55e]' : 'bg-slate-900 border-slate-700 hover:border-green-500/50'}`}
                    >
                      <Play size={16} fill={startBtn ? "black" : "none"} />
                    </button>
                    <span className="text-[8px] uppercase font-bold tracking-tighter">Start_NO</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <button 
                      onMouseDown={() => setStopBtn(true)} onMouseUp={() => setStopBtn(false)}
                      className={`w-12 h-12 border-2 rounded-md flex items-center justify-center transition-all ${stopBtn ? 'bg-red-500 border-red-400 text-black shadow-[0_0_15px_#ef4444]' : 'bg-slate-900 border-slate-700 hover:border-red-500/50'}`}
                    >
                      <Square size={16} fill={stopBtn ? "black" : "none"} />
                    </button>
                    <span className="text-[8px] uppercase font-bold tracking-tighter">Stop_NC</span>
                  </div>
                </div>
                {/* Seal-in Contact Visual */}
                <div className={`ml-5 w-10 h-6 border-l-2 border-b-2 border-r-2 rounded-b-sm transition-all duration-300 ${motorCoil ? 'border-green-500' : 'border-slate-800'}`} />
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${motorCoil ? 'border-green-500 bg-green-500/10 shadow-[0_0_30px_#22c55e]' : 'border-slate-800 bg-black'}`}>
                  <Activity size={28} className={motorCoil ? 'text-green-400' : 'text-slate-900'} />
                </div>
                <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">Motor_Output</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: FUNCTION BLOCKS (RIGHT) */}
        <div className="flex-1 p-8 flex flex-col">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h3 className="text-green-500 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                <Cpu size={14} /> Function_Block_Canvas
              </h3>
              <p className="text-[9px] text-slate-500 mt-1 uppercase">Instruction_Set_Simulation</p>
            </div>
            
            <div className="flex gap-2">
              {['TON', 'MOVE', 'R_TRIG'].map(type => (
                <button 
                  key={type} onClick={() => addFB(type as any)}
                  className="px-2 py-1 text-[9px] bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 hover:border-green-500 text-green-500 transition-all rounded font-bold"
                >
                  +{type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 min-h-[350px] relative border border-white/5 bg-black/40 rounded-lg overflow-hidden">
             {/* Hexagonal grid overlay matches your background style */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#22c55e 1px, transparent 1px)`, backgroundSize: '24px 24px' }} 
             />
             
             <AnimatePresence>
              {blocks.map((block) => (
                <motion.div
                  key={block.id} drag dragMomentum={false}
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                  className={`absolute w-40 bg-[#0d111a] border-2 rounded-md p-3 cursor-grab active:cursor-grabbing ${block.isActive ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'border-white/10 shadow-xl'}`}
                  style={{ left: block.x, top: block.y }}
                >
                  <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-1">
                    <span className="text-[10px] font-black text-green-400 tracking-tighter">{block.type}</span>
                    <button onClick={() => setBlocks(prev => prev.filter(b => b.id !== block.id))}>
                      <Trash2 size={11} className="text-red-500/40 hover:text-red-500 transition-colors" />
                    </button>
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <div className={`w-2.5 h-2.5 rounded-full ${block.isActive ? 'bg-green-500' : 'bg-slate-800'}`} />
                    <ArrowRight size={12} className="text-slate-700" />
                    <div className={`w-2.5 h-2.5 rounded-full ${block.isActive ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-slate-800'}`} />
                  </div>
                  <div className="mt-2 text-[7px] text-slate-600 uppercase font-bold text-center">
                    {block.isActive ? 'Status: RUN' : 'Status: IDLE'}
                  </div>
                </motion.div>
              ))}
             </AnimatePresence>
          </div>
        </div>
      </div>

      {/* FOOTER SYSTEM STATUS */}
      <div className="p-3 border-t border-white/5 bg-[#0d111a]/80 text-center">
        <p className="text-[8px] text-slate-600 uppercase tracking-[0.5em]">
          Engine_Status: <span className="text-green-500 font-bold">Synchronized</span> // Port: <span className="text-green-500">COM_7</span>
        </p>
      </div>
    </div>
  )
}