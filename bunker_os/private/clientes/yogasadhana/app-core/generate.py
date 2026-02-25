#!/usr/bin/env python3
import os

template_path = "/home/txetxaki/.openclaw/workspace/yogasadhana/template.html"
with open(template_path, 'r') as f:
    template = f.read()

pages = [
    {
        "filename": "hatha.html",
        "TITLE": "Hatha Yoga",
        "SUBTITLE": "Equilibrio y Tradición",
        "HERO_IMG": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920",
        "HEADING": "El arte de la unión física y mental.",
        "CONTENT": "<p>El Hatha Yoga es el estilo tradicional que busca el equilibrio de las energías solares (Ha) y lunares (Tha). A través de posturas físicas (asanas), técnicas de respiración (pranayama) y purificación corporal, preparamos el cuerpo y la mente para estados más profundos de meditación y consciencia.</p><p>Nuestras clases se adaptan a todos los niveles, permitiendo que cada alumno progrese a su propio ritmo en un ambiente de respeto y calma.</p>",
        "INFO": "Clases de 60 minutos. Estilo clásico en suelo. Nivel Principiante/Intermedio. Intensidad Suave/Moderada.",
        "PRICE": "40 € / mes",
        "SIDE_IMG_1": "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1200",
        "BENEFITS": "<li>• Mejora la flexibilidad y fuerza</li><li>• Reduce el estrés y la ansiedad</li><li>• Mejora la postura corporal</li><li>• Equilibra el sistema nervioso</li>"
    },
    {
        "filename": "unnata.html",
        "TITLE": "Unnata Yoga",
        "SUBTITLE": "Libertad en el Aire",
        "HERO_IMG": "https://images.unsplash.com/photo-1510894347713-fc3ad6cb0322?auto=format&fit=crop&q=80&w=1920",
        "HEADING": "Eleva tu práctica con Yoga Aéreo.",
        "CONTENT": "<p>Unnata Yoga Aéreo utiliza una tela de hamaca para apoyar el peso del cuerpo, permitiendo profundizar en los estiramientos y realizar inversiones de forma segura. El uso de la gravedad ayuda a descomprimir la columna vertebral y a liberar tensiones profundas que en el suelo serían difíciles de alcanzar.</p><p>Es una práctica lúdica pero profunda que desafía tu equilibrio y fortalece el núcleo de tu cuerpo.</p>",
        "INFO": "Sesiones de 75 minutos. Tela altura media. Nivel Principiante/Intermedio.",
        "PRICE": "55 € / mes",
        "SIDE_IMG_1": "https://images.unsplash.com/photo-1541535650810-10d26f5c2abb?auto=format&fit=crop&q=80&w=1200",
        "BENEFITS": "<li>• Descompresión de la columna</li><li>• Tonificación muscular profunda</li><li>• Mejora la circulación linfática</li><li>• Mayor libertad de movimiento</li>"
    },
    {
        "filename": "suave.html",
        "TITLE": "Yoga Suave",
        "SUBTITLE": "Amabilidad y Recuperación",
        "HERO_IMG": "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=1920",
        "HEADING": "Escucha a tu cuerpo con suavidad.",
        "CONTENT": "<p>El Yoga Suave está diseñado para quienes buscan una práctica más lenta y adaptada. Ideal para periodos de recuperación, mantenimiento o simplemente para disfrutar de un ritmo pausado que prioriza la respiración y la movilidad articular sin exigencia excesiva.</p><p>Un espacio para reconectar con las sensaciones sin juicios y con total aceptación.</p>",
        "INFO": "Clases de 60 minutos. Nivel Mantenimiento y Recuperación. Intensidad Suave/Adaptada.",
        "PRICE": "40 € / mes",
        "SIDE_IMG_1": "https://images.unsplash.com/photo-1593164842264-854604db2260?auto=format&fit=crop&q=80&w=1200",
        "BENEFITS": "<li>• Movilidad articular sin impacto</li><li>• Relajación profunda del sistema nervioso</li><li>• Apto para todas las edades</li><li>• Mejora la calidad del sueño</li>"
    },
    {
        "filename": "yin.html",
        "TITLE": "Yin Yoga",
        "SUBTITLE": "Quietud Profunda",
        "HERO_IMG": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1920",
        "HEADING": "El poder de la entrega y el tiempo.",
        "CONTENT": "<p>Yin Yoga es una práctica de quietud donde las posturas se mantienen entre 3 y 5 minutos. No buscamos el estiramiento muscular, sino trabajar sobre el tejido conectivo (fascias, ligamentos y tendones). Es una práctica meditativa que nos invita a observar los procesos internos con ecuanimidad.</p><p>El complemento perfecto para estilos más dinámicos o vidas con exceso de actividad.</p>",
        "INFO": "Sesiones de 60 minutos. Práctica meditativa en suelo.",
        "PRICE": "40 € / mes",
        "SIDE_IMG_1": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1200",
        "BENEFITS": "<li>• Hidratación de los tejidos profundos</li><li>• Fomenta la paciencia y la calma</li><li>• Estimula el flujo energético (meridianos)</li><li>• Mayor apertura articular</li>"
    },
    {
        "filename": "lomi.html",
        "TITLE": "Lomi Lomi",
        "SUBTITLE": "El Masaje de las Manos Amorosas",
        "HERO_IMG": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1920",
        "HEADING": "Ritual Hawaiano de Sanación.",
        "CONTENT": "<p>El masaje Lomi Lomi es una antigua técnica hawaiana que utiliza los antebrazos y las manos en movimientos rítmicos y fluidos que emulan el movimiento de las olas del mar. Es una experiencia holística que busca armonizar cuerpo, mente y espíritu, liberando bloqueos emocionales y tensiones físicas.</p><p>Se realiza con aceites naturales y una actitud de amor y presencia (Aloha).</p>",
        "INFO": "Sesión individual personalizada. Consultar disponibilidad.",
        "PRICE": "60 € / sesión",
        "SIDE_IMG_1": "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200",
        "BENEFITS": "<li>• Relajación total e inmersiva</li><li>• Liberación de cargas emocionales</li><li>• Estimula el drenaje linfático</li><li>• Reconexión con la alegría vital</li>"
    },
    {
        "filename": "osteopatia.html",
        "TITLE": "Osteopatía",
        "SUBTITLE": "Ciencia y Estructura",
        "HERO_IMG": "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1920",
        "HEADING": "Encuentra la salud en el equilibrio estructural.",
        "CONTENT": "<p>La Osteopatía es una disciplina terapéutica que considera el cuerpo como una unidad funcional. A través de manipulaciones manuales precisas, buscamos restaurar la movilidad de los tejidos, mejorar la vascularización y permitir que los mecanismos de autorregulación del cuerpo funcionen de forma óptima.</p><p>Abordamos problemas estructurales, viscerales y craneosacrales para una salud integral.</p>",
        "INFO": "Tratamiento individual por especialistas titulados.",
        "PRICE": "Desde 45 €",
        "SIDE_IMG_1": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1200",
        "BENEFITS": "<li>• Alivio de dolores crónicos</li><li>• Mejora la función orgánica</li><li>• Prevención de lesiones estructurales</li><li>• Equilibrio postural</li>"
    },
    {
        "filename": "quiromasaje.html",
        "TITLE": "Quiromasaje",
        "SUBTITLE": "Terapia Manual Directa",
        "HERO_IMG": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1920",
        "HEADING": "Alivio y bienestar a través del tacto.",
        "CONTENT": "<p>El Quiromasaje combina diferentes técnicas manuales para tratar dolencias musculares, mejorar la circulación y promover la relajación profunda. Es una herramienta eficaz para combatir el agotamiento físico, las contracturas por estrés o simplemente para regalarse un momento de cuidado necesario en el día a día.</p><p>Adaptamos la presión y la técnica según tus necesidades específicas.</p>",
        "INFO": "Sesiones de 60 minutos. Opción de masaje relajante o de descarga.",
        "PRICE": "40 € / sesión",
        "SIDE_IMG_1": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200",
        "BENEFITS": "<li>• Alivio inmediato de contracturas</li><li>• Reducción de la fatiga muscular</li><li>• Mejora de la circulación sanguínea</li><li>• Sensación de ligereza corporal</li>"
    }
]

output_dir = "/home/txetxaki/.openclaw/workspace/yogasadhana/"

for page in pages:
    content = template
    for key, value in page.items():
        if key != "filename":
            content = content.replace("{{" + key + "}}", value)
    
    with open(os.path.join(output_dir, page["filename"]), 'w') as f:
        f.write(content)
    print(f"Generated {page['filename']}")
