import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiromasaje',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container p-12 md:p-24 bg-[#fdfbf7] min-h-screen">
      <span class="text-[10px] font-bold uppercase tracking-[6px] text-[#d4a373] mb-8 block">Terapia Manual</span>
      <h1 class="text-6xl font-black mb-12 italic tracking-tighter" style="font-family: 'Playfair Display', serif;">Quiromasaje</h1>
      
      <div class="grid grid-cols-12 gap-12">
        <div class="col-span-12 lg:col-span-5 rounded-[40px] overflow-hidden shadow-2xl h-[500px]">
          <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover">
        </div>
        <div class="col-span-12 lg:col-span-7">
          <p class="text-2xl leading-relaxed opacity-80 mb-8 italic">"Restaurando la movilidad y el flujo natural de tu cuerpo."</p>
          <div class="prose opacity-60 text-lg leading-loose space-y-6">
            <p>El quiromasaje en Yogasadhana combina técnicas de amasamiento, fricción y percusión para aliviar contracturas musculares y mejorar la circulación. Es la herramienta definitiva para quienes buscan un alivio físico directo y profundo tras el estrés diario en Ciudad Real.</p>
            <div class="p-8 bg-white border border-black/5 rounded-3xl shadow-sm">
                <h4 class="font-bold text-[#d4a373] mb-2 uppercase text-xs">Objetivos</h4>
                <ul class="text-sm space-y-1 opacity-80">
                    <li>— Eliminación de toxinas musculares.</li>
                    <li>— Alivio de dolores tensionales.</li>
                    <li>— Bienestar físico inmediato.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class QuiromasajeComponent {}
