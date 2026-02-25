import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container p-12 md:p-24 bg-[#fdfbf7] min-h-screen">
      <span class="text-[10px] font-bold uppercase tracking-[6px] text-[#d4a373] mb-8 block">Conexión</span>
      <h1 class="text-6xl font-black mb-12 italic tracking-tighter" style="font-family: 'Playfair Display', serif;">Encuéntranos</h1>
      
      <div class="grid grid-cols-12 gap-12">
        <!-- Mapa / Info -->
        <div class="col-span-12 lg:col-span-7 space-y-12">
          <div class="rounded-[40px] overflow-hidden shadow-2xl h-[400px] border border-black/5 relative">
            <!-- Simulación de Mapa Geo-localizado -->
            <div class="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-center p-8">
              <span class="text-4xl mb-4">📍</span>
              <h4 class="font-bold text-lg mb-2">Calle Infantes 13</h4>
              <p class="text-xs opacity-50 uppercase tracking-widest">13002 Ciudad Real, España</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Calle+Infantes+13+Ciudad+Real" target="_blank" class="mt-6 px-6 py-3 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest">Abrir en Google Maps</a>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-8 bg-white rounded-3xl border border-black/5">
              <h5 class="text-[10px] font-bold uppercase tracking-widest text-[#d4a373] mb-4">Email</h5>
              <p class="font-bold">info&#64;yogasadhana.es</p>
            </div>
            <div class="p-8 bg-white rounded-3xl border border-black/5">
              <h5 class="text-[10px] font-bold uppercase tracking-widest text-[#d4a373] mb-4">Teléfono</h5>
              <p class="font-bold">+34 600 582 381</p>
            </div>
          </div>
        </div>

        <!-- Formulario minimalista -->
        <div class="col-span-12 lg:col-span-5 p-12 bg-white rounded-[50px] shadow-xl border border-black/5">
          <h3 class="text-3xl font-black mb-8 italic">Escríbenos</h3>
          <form class="space-y-6">
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Nombre</label>
              <input type="text" class="w-full bg-[#fdfbf7] border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#d4a373]/20 transition-all">
            </div>
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Email</label>
              <input type="email" class="w-full bg-[#fdfbf7] border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#d4a373]/20 transition-all">
            </div>
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Mensaje</label>
              <textarea rows="4" class="w-full bg-[#fdfbf7] border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#d4a373]/20 transition-all"></textarea>
            </div>
            <button class="w-full py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#d4a373] transition-colors">Enviar Solicitud</button>
          </form>
        </div>
      </div>
    </div>
  `
})
export class ContactoComponent {}
