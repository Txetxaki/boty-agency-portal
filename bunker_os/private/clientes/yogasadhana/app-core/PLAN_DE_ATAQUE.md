# Plan de Ataque: Finalización Alpha Yogasadhana PWA (Angular 21)

## 🎯 Objetivo: Web perfecta, funcional y ultra-veloz en boty.agency/yogasadhana

### Fase 1: Infraestructura de Navegación (Routing)
- [ ] Configurar `app.routes.ts` con rutas para: Inicio, Práctica, Bienestar, Horarios, Contacto.
- [ ] Implementar el `RouterOutlet` y una navegación global que no pierda el estado (Signals).

### Fase 2: Desarrollo de Componentes Faltantes
- [ ] **HorariosComponent**: Tabla bento-style con clases de Yoga y sesiones de los viernes.
- [ ] **ContactoComponent**: Formulario minimalista + Mapa interactivo de Calle Infantes.
- [ ] **HomeComponent**: Refactorizar el hero cinematográfico de la landing original a un componente Angular.

### Fase 3: Integración de Datos (GEO & SEO)
- [ ] Inyectar metadatos `title` y `meta` dinámicos por componente (SEO Local).
- [ ] Asegurar que el "Hype Diario" de redes sociales tenga enlaces profundos a estas secciones.

### Fase 4: QA & Debug Master
- [ ] **Check de Enlaces**: Bucle de validación de cada botón. No se permite un solo 404.
- [ ] **Performance Audit**: Verificar que el bundle sea mínimo y el LCP (Largest Contentful Paint) sea < 1s.
- [ ] **Mobile First**: Asegurar que en el monitor EVICIV y en móviles el bento sea impecable.

### Fase 5: Despliegue & Notificación
- [ ] Build final de producción.
- [ ] Mover assets a la ruta pública de la agencia.
- [ ] Email de "Proyecto Finalizado" a Pablo y Pedro.
