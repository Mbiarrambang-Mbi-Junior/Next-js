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
  const [startBtn, setStartBtn] = useState(false);
  const [stopBtn, setStopBtn] = useState(false);
  const [motorCoil, setMotorCoil] = useState(false);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setMotorCoil(prev => (startBtn || prev) && !stopBtn);
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
      x: 40, y: 40 + (blocks.length * 20),
      isActive: false
    };
    setBlocks([...blocks, newBlock]);
  };

  return (
    <div className="w-full bg-[#0b0e14] border border-white/5 rounded-2xl overflow-hidden font-mono text-slate-300">
      
      {/* HEADER */}
      <div className="p-4 border-b border-white/5 bg-[#0d111a] flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-white">SYSTEM_SYNC: ACTIVE</span>
        </div>
        <button 
          onClick={() => setIsSimulating(!isSimulating)}
          className={`px-4 py-1.5 rounded text-[10px] font-bold transition-all border ${
            isSimulating ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-green-500/10 border-green-500 text-green-500'
          }`}
        >
          {isSimulating ? 'HALT_ENGINE' : 'INIT_SIMULATION'}
        </button>
      </div>

      {/* EQUALIZED GRID CONTAINER */}
      <div className="relative flex flex-col md:flex-row min-h-[500px]">
        
        {/* CENTER DIVIDER */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />

        {/* SECTION 1: LADDER LOGIC (50% WIDTH) */}
        <div className="flex-1 p-8 flex flex-col border-b md:border-b-0">
          <div className="mb-6">
            <h3 className="text-green-500 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Zap size={14} /> Power_Flow_Rail
            </h3>
          </div>

          <div className="flex-1 min-h-[350px] relative border border-white/5 bg-black/20 rounded-lg flex flex-col justify-center px-6">
            <div className={`absolute top-1/2 left-0 w-full h-[2px] transition-colors duration-300 ${motorCoil ? 'bg-green-500 shadow-[0_0_15px_#22c55e]' : 'bg-slate-800'} -translate-y-1/2`} />
            
            <div className="relative z-10 flex justify-between items-center">
              <div className="flex flex-col gap-12">
                <div className="flex gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <button 
                      onMouseDown={() => setStartBtn(true)} onMouseUp={() => setStartBtn(false)}
                      className={`w-12 h-12 border-2 rounded flex items-center justify-center transition-all ${startBtn ? 'bg-green-500 border-green-400 text-black' : 'bg-slate-900 border-slate-700'}`}
                    ><Play size={16} fill={startBtn ? "black" : "none"} /></button>
                    <span className="text-[8px] uppercase font-bold">Start</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <button 
                      onMouseDown={() => setStopBtn(true)} onMouseUp={() => setStopBtn(false)}
                      className={`w-12 h-12 border-2 rounded flex items-center justify-center transition-all ${stopBtn ? 'bg-red-500 border-red-400 text-black' : 'bg-slate-900 border-slate-700'}`}
                    ><Square size={16} fill={stopBtn ? "black" : "none"} /></button>
                    <span className="text-[8px] uppercase font-bold">Stop</span>
                  </div>
                </div>
                <div className={`ml-4 w-10 h-6 border-l-2 border-b-2 border-r-2 rounded-b-sm transition-all ${motorCoil ? 'border-green-500' : 'border-slate-800'}`} />
              </div>

              <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${motorCoil ? 'border-green-500 bg-green-500/10 shadow-[0_0_25px_#22c55e]' : 'border-slate-800 bg-black'}`}>
                <Activity size={28} className={motorCoil ? 'text-green-400' : 'text-slate-900'} />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: FUNCTION BLOCKS (50% WIDTH) - UPDATED TO GREEN-500 */}
        <div className="flex-1 p-8 flex flex-col">
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-green-500 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Cpu size={14} /> Logic_Array
            </h3>
            <div className="flex gap-2">
              {['TON', 'MOVE'].map(type => (
                <button 
                  key={type} onClick={() => addFB(type as any)}
                  className="px-2 py-1 text-[9px] bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 text-green-400 transition-all rounded font-bold"
                >
                  +{type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 min-h-[350px] relative border border-white/5 bg-black/20 rounded-lg overflow-hidden">
             {/* Changed grid color to green */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#22c55e 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
             
             <AnimatePresence>
              {blocks.map((block) => (
                <motion.div
                  key={block.id} drag dragMomentum={false}
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                  className={`absolute w-36 bg-[#0d111a] border-2 rounded-md p-2 cursor-grab active:cursor-grabbing ${block.isActive ? 'border-green-500 shadow-[0_0_12px_#22c55e]' : 'border-white/10'}`}
                  style={{ left: block.x, top: block.y }}
                >
                  <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-1 text-[9px] font-bold">
                    <span className="text-green-400">{block.type}</span>
                    <button onClick={() => setBlocks(prev => prev.filter(b => b.id !== block.id))}><Trash2 size={10} className="text-red-500/40 hover:text-red-500" /></button>
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <div className={`w-2 h-2 rounded-full ${block.isActive ? 'bg-green-500' : 'bg-slate-800'}`} />
                    <ArrowRight size={10} className="text-slate-700" />
                    <div className={`w-2 h-2 rounded-full ${block.isActive ? 'bg-green-500 shadow-[0_0_5px_#22c55e]' : 'bg-slate-800'}`} />
                  </div>
                </motion.div>
              ))}
             </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}