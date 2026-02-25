import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="zen-grid fixed inset-0 pointer-events-none z-[-1]" style="background-image: radial-gradient(#d4a373 0.5px, transparent 0.5px); background-size: 60px 60px; opacity: 0.15;"></div>

    <nav class="fixed w-full z-[100] px-12 py-10 flex justify-between items-center bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div class="text-2xl font-black tracking-tighter" style="font-family: 'Playfair Display', serif;">YOGASADHANA</div>
        <div class="hidden md:flex gap-12">
            <a href="#practica" class="text-[10px] font-bold uppercase tracking-[4px] opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Práctica</a>
            <a href="#bienestar" class="text-[10px] font-bold uppercase tracking-[4px] opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Bienestar</a>
            <a href="#eventos" class="text-[10px] font-bold uppercase tracking-[4px] opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Eventos</a>
        </div>
    </nav>

    <main class="relative h-screen flex items-center justify-center overflow-hidden">
        <div class="hero-overlay absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920" class="absolute inset-0 w-full h-full object-cover scale-110" alt="Yoga">
        <div class="z-20 text-center text-white px-6">
            <h1 class="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8" style="font-family: 'Playfair Display', serif;">
                Paz en ti <span class="italic font-normal text-[#d4a373]">Mismo</span>,<br>
                Paz en el Mundo.
            </h1>
            <p class="max-w-2xl mx-auto text-xl italic opacity-80" style="font-family: 'Playfair Display', serif;">
                "Reconectar con tu cuerpo y sensaciones, con tu respiración, con tu mente-emoción, con tu Ser esencial..."
            </p>
        </div>
    </main>

    <div class="bento-grid max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-12 gap-6 -mt-20 relative z-30">
        <!-- Yoga -->
        <div class="bento-item col-span-12 md:col-span-8 p-12 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-2xl hover:border-[#d4a373] transition-all">
            <span class="text-[10px] font-bold uppercase tracking-[4px] text-[#d4a373] mb-6 block">Disciplina</span>
            <h3 class="text-5xl font-black mb-8" style="font-family: 'Playfair Display', serif;">Práctica de Yoga</h3>
            <p class="text-lg opacity-70 leading-relaxed mb-10">Donde disfrutar del silencio, de la quietud.. aprender a soltar el pasado, a amarte y aceptarte incondicionalmente.. y donde descubrir las herramientas necesarias para armonizar todas estas capas y mucho mas…</p>
            <div class="rounded-3xl overflow-hidden h-[300px]">
                <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" class="w-full h-full object-cover">
            </div>
        </div>

        <!-- Bienestar -->
        <div class="bento-item col-span-12 md:col-span-4 p-12 bg-[#F4F1EA]/60 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-2xl hover:border-[#d4a373] transition-all">
            <span class="text-[10px] font-bold uppercase tracking-[4px] text-[#d4a373] mb-6 block">Sanación</span>
            <h3 class="text-3xl font-black mb-6" style="font-family: 'Playfair Display', serif;">Bienestar Natural</h3>
            <p class="text-sm opacity-70 leading-relaxed mb-10 text-pretty">Un espacio de cuidado integral para tu salud física y emocional mediante terapias ancestrales.</p>
            <div class="rounded-3xl overflow-hidden h-[200px]">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover">
            </div>
        </div>
    </div>

    <footer class="bg-black text-white py-32 px-12 text-center rounded-t-[80px]">
        <h2 class="text-6xl md:text-8xl italic mb-16" style="font-family: 'Playfair Display', serif;">Namasté</h2>
        <div class="flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-white/10 opacity-30 text-[10px] uppercase tracking-[8px]">
            <span>YOGASADHANA • CIUDAD REAL</span>
            <span>Boty Agency • Soberanía Digital 2026</span>
        </div>
    </footer>
  `,
  styles: [`
    :host { display: block; }
    .bento-item { transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); }
    .bento-item:hover { transform: translateY(-10px); }
  `],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  status = signal('Zen');
}
