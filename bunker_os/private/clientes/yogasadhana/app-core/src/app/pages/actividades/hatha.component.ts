import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hatha',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container p-12 md:p-24 bg-[#fdfbf7] min-h-screen">
      <span class="text-[10px] font-bold uppercase tracking-[6px] text-[#d4a373] mb-8 block">Disciplina</span>
      <h1 class="text-6xl font-black mb-12 italic tracking-tighter" style="font-family: 'Playfair Display', serif;">Hatha Yoga</h1>
      
      <div class="grid grid-cols-12 gap-12">
        <div class="col-span-12 lg:col-span-7">
          <p class="text-2xl leading-relaxed opacity-80 mb-8 italic">"El equilibrio entre el sol y la luna, la firmeza y la relajación."</p>
          <div class="prose opacity-60 text-lg leading-loose">
            <p>El Hatha Yoga es la base de todas las disciplinas físicas del yoga. En Yogasadhana, nuestras clases de Hatha se centran en la alineación correcta, la respiración consciente y el sostenimiento de las asanas para fortalecer el cuerpo y calmar la mente.</p>
            <ul class="list-disc ml-6 mt-4 space-y-2">
              <li>Mejora de la flexibilidad y fuerza física.</li>
              <li>Equilibrio del sistema nervioso.</li>
              <li>Preparación para la meditación profunda.</li>
            </ul>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 rounded-[40px] overflow-hidden shadow-2xl h-[500px]">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  `
})
export class HathaComponent {}
