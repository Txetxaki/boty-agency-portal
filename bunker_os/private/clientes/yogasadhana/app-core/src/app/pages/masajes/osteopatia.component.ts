import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-osteopatia',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container p-12 md:p-24 bg-[#F4F1EA] min-h-screen">
      <span class="text-[10px] font-bold uppercase tracking-[6px] text-[#d4a373] mb-8 block">Estructura & Salud</span>
      <h1 class="text-6xl font-black mb-12 italic tracking-tighter" style="font-family: 'Playfair Display', serif;">Osteopatía</h1>
      
      <div class="grid grid-cols-12 gap-12">
        <div class="col-span-12 lg:col-span-7">
          <p class="text-2xl leading-relaxed opacity-80 mb-8 italic">"Escuchando el lenguaje de tus huesos y tejidos para devolver el equilibrio."</p>
          <div class="prose opacity-60 text-lg leading-loose space-y-6">
            <p>La osteopatía en nuestro centro se enfoca en la integridad estructural del cuerpo. Trabajamos sobre el sistema músculo-esquelético, visceral y craneosacral para permitir que el organismo recupere su capacidad de autocuración natural.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-6 bg-white/40 rounded-2xl border border-white/20">
                    <span class="font-bold text-accent">Estructural</span>
                    <p class="text-xs opacity-60">Columna, pelvis y extremidades.</p>
                </div>
                <div class="p-6 bg-white/40 rounded-2xl border border-white/20">
                    <span class="font-bold text-accent">Craneosacral</span>
                    <p class="text-xs opacity-60">Sistema nervioso y fluidez.</p>
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
export class OsteopatiaComponent {}
