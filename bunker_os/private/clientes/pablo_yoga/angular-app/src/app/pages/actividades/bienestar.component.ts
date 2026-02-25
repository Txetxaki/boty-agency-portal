import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bienestar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container p-12 md:p-24 bg-[#F4F1EA] min-h-screen">
      <span class="text-[10px] font-bold uppercase tracking-[6px] text-[#d4a373] mb-8 block">Sanación</span>
      <h1 class="text-6xl font-black mb-12 italic tracking-tighter" style="font-family: 'Playfair Display', serif;">Bienestar Natural</h1>
      
      <div class="grid grid-cols-12 gap-12">
        <div class="col-span-12 lg:col-span-5 rounded-[40px] overflow-hidden shadow-2xl h-[500px]">
          <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover">
        </div>
        <div class="col-span-12 lg:col-span-7">
          <p class="text-2xl leading-relaxed opacity-80 mb-8 italic">"Un espacio de cuidado donde descubrir las herramientas necesarias para armonizar todas tus capas."</p>
          <div class="prose opacity-60 text-lg leading-loose space-y-6">
            <p>El bienestar en Yogasadhana va más allá de la ausencia de enfermedad. Es la presencia de una vitalidad radiante. En nuestro centro de Ciudad Real, ofrecemos terapias que integran el cuerpo, la mente y la energía.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div class="p-6 bg-white/50 rounded-3xl border border-white/40">
                <h4 class="font-bold text-[#d4a373] mb-2 uppercase text-xs">Masaje Tradicional</h4>
                <p class="text-sm">Técnicas ancestrales para liberar la tensión muscular y restaurar el flujo energético.</p>
              </div>
              <div class="p-6 bg-white/50 rounded-3xl border border-white/40">
                <h4 class="font-bold text-[#d4a373] mb-2 uppercase text-xs">Aromaterapia</h4>
                <p class="text-sm">Uso de aceites esenciales puros para equilibrar el estado emocional y mental.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BienestarComponent {}
