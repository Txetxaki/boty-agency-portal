import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practica',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container p-12 md:p-24 bg-[#fdfbf7] min-h-screen">
      <span class="text-[10px] font-bold uppercase tracking-[6px] text-[#d4a373] mb-8 block">Disciplina</span>
      <h1 class="text-6xl font-black mb-12 italic tracking-tighter" style="font-family: 'Playfair Display', serif;">La Práctica de Yoga</h1>
      
      <div class="grid grid-cols-12 gap-12">
        <div class="col-span-12 lg:col-span-7">
          <p class="text-2xl leading-relaxed opacity-80 mb-8 italic">"Reconectar con tu cuerpo y sensaciones, con tu respiración, con tu mente-emoción, con tu Ser esencial…"</p>
          <div class="prose opacity-60 text-lg leading-loose">
            <p>En Yogasadhana Ciudad Real, la práctica no es un ejercicio, es un refugio. Trabajamos Hatha Yoga consciente, adaptando cada asana a la necesidad del alumno. Buscamos el equilibrio entre la firmeza y la relajación.</p>
            <p class="mt-4">Nuestras sesiones incluyen:</p>
            <ul class="list-disc ml-6 mt-4 space-y-2">
              <li>Asanas (Posturas físicas) para la salud vertebral.</li>
              <li>Pranayama (Técnicas de respiración) para calmar el sistema nervioso.</li>
              <li>Relajación profunda para la integración del Ser.</li>
            </ul>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 rounded-[40px] overflow-hidden shadow-2xl h-[600px]">
          <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover">
        </div>
      </div>
      
      <div class="mt-24 p-12 bg-black text-white rounded-[50px] flex justify-between items-center">
        <div>
          <h3 class="text-3xl font-bold italic mb-2">¿Listo para empezar?</h3>
          <p class="opacity-40">Primera clase de prueba sin compromiso.</p>
        </div>
        <button class="px-8 py-4 bg-[#d4a373] rounded-full font-bold uppercase tracking-widest text-xs">Reservar Plaza</button>
      </div>
    </div>
  `
})
export class PracticaComponent {}
