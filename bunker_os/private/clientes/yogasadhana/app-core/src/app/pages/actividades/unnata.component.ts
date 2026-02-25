import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unnata',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container p-12 md:p-24 bg-[#F4F1EA] min-h-screen">
      <span class="text-[10px] font-bold uppercase tracking-[6px] text-[#d4a373] mb-8 block">Innovación</span>
      <h1 class="text-6xl font-black mb-12 italic tracking-tighter" style="font-family: 'Playfair Display', serif;">Unnata Yoga Aéreo</h1>
      
      <div class="grid grid-cols-12 gap-12">
        <div class="col-span-12 lg:col-span-5 rounded-[40px] overflow-hidden shadow-2xl h-[600px]">
          <img src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover">
        </div>
        <div class="col-span-12 lg:col-span-7">
          <p class="text-2xl leading-relaxed opacity-80 mb-8 italic">"Usa la gravedad para liberar tu columna y expandir tu mente."</p>
          <div class="prose opacity-60 text-lg leading-loose">
            <p>Unnata Yoga utiliza una hamaca de tela especial para apoyar el peso del cuerpo, permitiendo estiramientos más profundos y descompresión vertebral sin esfuerzo. Es una práctica que combina la disciplina del yoga tradicional con la libertad del movimiento en suspensión.</p>
            <div class="mt-10 p-8 bg-white/50 rounded-3xl border border-white/40">
              <h4 class="font-bold text-[#d4a373] mb-4 uppercase text-xs">Beneficios Clave</h4>
              <ul class="space-y-2 text-sm italic">
                <li>— Descompresión de las articulaciones.</li>
                <li>— Mejora de la agilidad y el equilibrio.</li>
                <li>— Alivio inmediato de tensiones en la espalda.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class UnnataComponent {}
