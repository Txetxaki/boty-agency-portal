import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container p-12 md:p-24 bg-[#fdfbf7] min-h-screen">
      <span class="text-[10px] font-bold uppercase tracking-[6px] text-[#d4a373] mb-8 block">Disponibilidad</span>
      <h1 class="text-6xl font-black mb-12 italic tracking-tighter" style="font-family: 'Playfair Display', serif;">Horarios & Sesiones</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <!-- Lunes/Miércoles -->
        <div class="p-8 bg-white border border-black/5 rounded-[40px] hover:border-[#d4a373] transition-all">
          <h3 class="font-bold uppercase text-xs tracking-widest mb-6 opacity-40">Lunes & Miércoles</h3>
          <div class="space-y-4">
            <div class="flex justify-between border-b border-black/5 pb-2">
              <span class="font-bold text-sm">Hatha Yoga</span>
              <span class="text-xs opacity-50">09:30 - 11:00</span>
            </div>
            <div class="flex justify-between border-b border-black/5 pb-2">
              <span class="font-bold text-sm">Yoga Nivel II</span>
              <span class="text-xs opacity-50">19:00 - 20:30</span>
            </div>
          </div>
        </div>

        <!-- Martes/Jueves -->
        <div class="p-8 bg-white border border-black/5 rounded-[40px] hover:border-[#d4a373] transition-all">
          <h3 class="font-bold uppercase text-xs tracking-widest mb-6 opacity-40">Martes & Jueves</h3>
          <div class="space-y-4">
            <div class="flex justify-between border-b border-black/5 pb-2">
              <span class="font-bold text-sm">Yoga Suave</span>
              <span class="text-xs opacity-50">10:00 - 11:30</span>
            </div>
            <div class="flex justify-between border-b border-black/5 pb-2">
              <span class="font-bold text-sm">Hatha Yoga</span>
              <span class="text-xs opacity-50">18:30 - 20:00</span>
            </div>
          </div>
        </div>

        <!-- Viernes Especial -->
        <div class="p-8 bg-black text-white rounded-[40px] shadow-xl lg:col-span-2">
          <h3 class="font-bold uppercase text-xs tracking-widest mb-6 text-[#d4a373]">Viernes: Profundización</h3>
          <p class="text-xl italic mb-8 opacity-80">Sesiones de meditación y estudio del Bhagavad Gita.</p>
          <div class="flex justify-between items-center bg-white/10 p-4 rounded-2xl">
            <span class="font-bold">Satsang & Meditación</span>
            <span class="px-3 py-1 bg-[#d4a373] text-black text-[10px] font-black rounded-full uppercase">17:30 - 19:30</span>
          </div>
        </div>
      </div>

      <div class="mt-20 p-10 bg-[#d4a373]/10 rounded-[50px] border border-[#d4a373]/20 flex flex-col md:flex-row gap-8 items-center justify-between">
        <p class="text-sm opacity-70 max-w-xl"><b>Nota importante:</b> Recomendamos llegar 10 minutos antes de cada sesión para preparar el cuerpo y la mente en silencio. Calle Infantes 13, Ciudad Real.</p>
        <button class="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#d4a373] transition-colors">Consultar plazas</button>
      </div>
    </div>
  `
})
export class HorariosComponent {}
