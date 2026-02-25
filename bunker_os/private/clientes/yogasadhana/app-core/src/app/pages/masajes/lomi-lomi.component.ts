import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lomi-lomi',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container p-12 md:p-24 bg-[#0a0a0a] text-white min-h-screen">
      <span class="text-[10px] font-bold uppercase tracking-[6px] text-[#d4a373] mb-8 block">Terapia Ancestral</span>
      <h1 class="text-6xl font-black mb-12 italic tracking-tighter" style="font-family: 'Playfair Display', serif;">Masaje Lomi Lomi</h1>
      
      <div class="grid grid-cols-12 gap-12">
        <div class="col-span-12 lg:col-span-7">
          <p class="text-2xl leading-relaxed opacity-80 mb-8 italic">"El toque del espíritu, un masaje fluido como las olas del mar."</p>
          <div class="prose prose-invert opacity-60 text-lg leading-loose">
            <p>Originario de Hawái, el Lomi Lomi no es solo un masaje físico, es una experiencia de sanación. Trabajamos con los antebrazos y las manos en movimientos rítmicos y fluidos que envuelven todo el cuerpo, liberando bloqueos emocionales y físicos.</p>
            <div class="mt-8 grid grid-cols-2 gap-4">
              <div class="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span class="block text-2xl mb-2">🌊</span>
                <span class="text-[10px] font-bold uppercase tracking-widest">Fluidez Total</span>
              </div>
              <div class="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span class="block text-2xl mb-2">🌿</span>
                <span class="text-[10px] font-bold uppercase tracking-widest">Aceites Puros</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 rounded-[40px] overflow-hidden shadow-2xl h-[500px]">
          <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  `
})
export class LomiLomiComponent {}
