/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Users, 
  Compass, 
  Award, 
  ChevronRight, 
  Sparkles, 
  Heart, 
  ShieldCheck,
  Sun,
  Wind,
  BookOpen,
  Lightbulb,
  Target,
  ArrowLeft,
  Info,
  CheckCircle2,
  ExternalLink,
  FileDown,
  RotateCcw
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import { GameState, Situation, Badge, Concept, InteractiveActivity, StudentInfo } from './types';

const BADGES: Badge[] = [
  { id: 'sustentabilidad', name: 'Guardián de la Sustentabilidad', description: 'Por integrar tecnologías que cuidan nuestra tierra.', icon: 'Leaf' },
  { id: 'inclusion', name: 'Arquitecto de Inclusión', description: 'Por diseñar pensando en todas las personas.', icon: 'Users' },
  { id: 'vida', name: 'Visionario de Vida', description: 'Por trazar un camino con propósito y asertividad.', icon: 'Compass' },
];

const CONCEPTS: Concept[] = [
  {
    title: 'Inclusión Tecnológica',
    icon: <Users className="w-6 h-6" />,
    source: 'Libro: Tecnología en el desarrollo inclusivo (Pág. 124-127)',
    description: 'La inclusión digital es la democratización del acceso a las TIC para que todxs participen plenamente en la sociedad de la información, rompiendo las barreras de la desigualdad económica y social.',
    details: [
      { 
        label: 'Uso Universal y Accesibilidad', 
        text: 'Se refiere a que los entornos, procesos, bienes y servicios deben ser comprensibles y utilizables por todas las personas en condiciones de seguridad y de la forma más independiente posible. No basta con tener la tecnología; debe ser útil para personas con diversas capacidades físicas, sensoriales o cognitivas.',
        activity: {
          id: 'lib_inc_1',
          type: 'quiz',
          question: '¿Cuál es el objetivo principal del Diseño Universal?',
          options: [
            'Que la tecnología sea solo para expertos.',
            'Que los productos sean utilizables por todas las personas sin importar sus capacidades.',
            'Que los dispositivos sean lo más caros posible.'
          ],
          correctAnswer: 'Que los productos sean utilizables por todas las personas sin importar sus capacidades.',
          feedback: '¡Exacto! El diseño universal busca eliminar barreras para todxs.'
        },
        links: [
          { label: 'Guía de Diseño Universal', url: 'https://www.unicef.org/lac/dise%C3%B1o-universal-para-el-aprendizaje-y-libros-de-texto-digitales-accesibles' },
          { label: 'Video: ¿Qué es la Inclusión Digital?', url: 'https://www.youtube.com/watch?v=WEB2I7TzXRo' }
        ]
      },
      { 
        label: 'Flexibilidad y Funcionalidad', 
        text: 'La tecnología debe acomodarse a un amplio rango de preferencias y habilidades individuales. Un diseño flexible permite que el usuario elija cómo interactuar con la herramienta, ya sea mediante texto, voz o gestos, adaptándose a su nivel de concentración o experiencia previa.',
        activity: {
          id: 'lib_inc_2',
          type: 'dragDrop',
          question: 'Relaciona el modo de interacción con su beneficio:',
          options: [
            'Voz -> Útil para personas con discapacidad motriz.',
            'Texto -> Ideal para ambientes ruidosos.',
            'Gestos -> Facilita el uso sin contacto físico.'
          ],
          correctAnswer: 'Voz -> Útil para personas con discapacidad motriz.',
          feedback: '¡Correcto! La flexibilidad permite múltiples formas de acceso.'
        },
        links: [
          { label: 'Blog: Tecnología para la Inclusión', url: 'https://www.kinderup.es/blog/post/el-impacto-de-la-tecnologia-en-la-inclusion-de-alumnos-con-necesidades-educativas-especiales' }
        ]
      }
    ]
  },
  {
    title: 'Sustentabilidad',
    icon: <Leaf className="w-6 h-6" />,
    source: 'Libro: Sustentabilidad y desarrollo (Pág. 129-131)',
    description: 'Es el desarrollo que satisface las necesidades del presente sin comprometer la capacidad de las futuras generaciones, integrando elementos financieros, sociales y ambientales.',
    details: [
      { 
        label: 'Tecnologías Verdes en México', 
        text: 'En comunidades rurales e indígenas, proyectos de construcción de casas dignas y ecológicas utilizan colectores de lluvia, filtros caseros de agua y estufas con trampa para humo. Estas innovaciones resuelven problemas históricos de acceso a servicios básicos protegiendo el entorno.',
        activity: {
          id: 'lib_sus_1',
          type: 'quiz',
          question: '¿Qué ecotecnología ayuda a reducir enfermedades respiratorias en el hogar?',
          options: [
            'Colectores de lluvia.',
            'Estufas con trampa para humo.',
            'Filtros caseros de agua.'
          ],
          correctAnswer: 'Estufas con trampa para humo.',
          feedback: '¡Así es! Al sacar el humo, se protege la salud de la familia.'
        },
        links: [
          { label: 'Proyectos Sustentables en México', url: 'https://earthuniversity.edu.mx/vivienda-sostenible-integrando-ecotecnologias-en-tu-hogar/' },
          { label: 'Video: Vivienda Rural Sustentable', url: 'https://www.youtube.com/watch?v=alY6YMCaxts' }
        ]
      },
      { 
        label: 'Eficiencia Energética', 
        text: 'El uso de paneles solares en espray con materiales nano y calentadores solares permite captar energía limpia de forma económica. La sustentabilidad busca que el costo de implementación sea accesible para todos, promoviendo una economía justa.',
        activity: {
          id: 'lib_sus_2',
          type: 'quiz',
          question: '¿Qué rama de la ciencia permite crear paneles solares más eficientes y económicos?',
          options: [
            'Astrología.',
            'Nanotecnología.',
            'Paleontología.'
          ],
          correctAnswer: 'Nanotecnología.',
          feedback: '¡Correcto! La nanotecnología revoluciona la captación de energía.'
        },
        links: [
          { label: 'Nanotecnología aplicada en Calentadores Solares', url: 'https://www.revista.unam.mx/2022v23n3/nanotecnologia_aplicada_en_calentadores_solares_un_beneficio_para_la_sociedad/' }
        ]
      }
    ]
  },
  {
    title: 'Metas y Potencialidades',
    icon: <Target className="w-6 h-6" />,
    source: 'Libro: Logros y bienestar (Pág. 240-242)',
    description: 'El bienestar personal y colectivo se alcanza cuando reconocemos que cada individuo posee características únicas que, al sumarse, fortalecen a la comunidad entera.',
    details: [
      { 
        label: 'Liderazgo y Trabajo en Equipo', 
        text: 'Durante la adolescencia, descubrir habilidades para comunicarse y resolver problemas en equipo es vital. Aprender a ser líderes implica fomentar el respeto por las diferencias, transformando los conflictos potenciales en oportunidades de crecimiento mutuo.',
        activity: {
          id: 'lib_met_1',
          type: 'quiz',
          question: '¿Qué implica un liderazgo positivo en la adolescencia?',
          options: [
            'Mandar a todos sin escucharlos.',
            'Fomentar el respeto por las diferencias y el trabajo en equipo.',
            'Hacer todo el trabajo solo.'
          ],
          correctAnswer: 'Fomentar el respeto por las diferencias y el trabajo en equipo.',
          feedback: '¡Excelente! Un buen líder potencia las habilidades de su equipo.'
        },
        links: [
          { label: 'Habilidades para la Vida', url: 'https://www.huntermagazine.es/como-cultivar-habilidades-de-liderazgo-en-la-adolescencia/' },
          { label: 'Video: Cómo ser un buen lider', url: 'https://youtu.be/16z28DjRTAA' }
        ]
      },
      { 
        label: 'Pensamiento Crítico e Iniciativa', 
        text: 'Tomar decisiones responsables requiere analizar los logros obtenidos y los errores aceptados. La iniciativa personal, sumada a la constancia, permite alcanzar objetivos comunes como la limpieza de espacios públicos o la gestión de recursos comunitarios.',
        activity: {
          id: 'lib_met_2',
          type: 'quiz',
          question: '¿Qué es fundamental para tomar decisiones responsables?',
          options: [
            'Hacer lo que digan los demás sin pensar.',
            'Analizar logros y errores con pensamiento crítico.',
            'Actuar por impulso siempre.'
          ],
          correctAnswer: 'Analizar logros y errores con pensamiento crítico.',
          feedback: '¡Exacto! El análisis nos permite mejorar nuestras acciones.'
        },
        links: [
          { label: 'Video: Pensamiento Crítico en Jóvenes', url: 'https://www.youtube.com/watch?v=YO4pwpaH8Fo' }
        ]
      }
    ]
  },
  {
    title: 'Proyecto de Vida',
    icon: <Compass className="w-6 h-6" />,
    source: 'Libro: Proyecto de vida (Pág. 243-245)',
    description: 'Un plan trazado que permite a los jóvenes visualizar su futuro, definir sus roles en la sociedad y establecer estrategias para superar retos económicos o personales.',
    details: [
      { 
        label: 'Estrategias de Apoyo Mutuo', 
        text: 'Nadie camina solo. El proyecto de vida se nutre del apoyo de la familia, amigos y orientadores. Identificar cuándo se necesita ayuda es una fortaleza que permite enfrentar crisis económicas o enfermedades con resiliencia y comunicación asertiva.',
        activity: {
          id: 'lib_pro_1',
          type: 'quiz',
          question: '¿Por qué es importante el apoyo mutuo en el proyecto de vida?',
          options: [
            'Porque nos hace débiles pedir ayuda.',
            'Porque permite enfrentar crisis con resiliencia y comunicación.',
            'Porque no necesitamos a nadie más.'
          ],
          correctAnswer: 'Porque permite enfrentar crisis con resiliencia y comunicación.',
          feedback: '¡Correcto! Las redes de apoyo son fundamentales para el éxito.'
        },
        links: [
          { label: 'Video: Proyecto de Vida', url: 'https://youtu.be/t962o0HXtKs' },
          { label: 'Video: Construyendo mi futuro', url: 'https://youtu.be/thUvZQuarHU' }
        ]
      },
      { 
        label: 'Planificación y Metas', 
        text: 'Establecer metas a corto, mediano y largo plazo requiere evaluar constantemente los beneficios y riesgos. Investigar opciones de educación superior o emprendimiento laboral es el primer paso para una inserción social exitosa y satisfactoria.',
        activity: {
          id: 'lib_pro_2',
          type: 'quiz',
          question: '¿Cuál es el primer paso para una inserción social exitosa?',
          options: [
            'Esperar a que la suerte decida.',
            'Investigar opciones y establecer metas claras.',
            'No pensar en el futuro.'
          ],
          correctAnswer: 'Investigar opciones y establecer metas claras.',
          feedback: '¡Así es! La planificación es la brújula de tu futuro.'
        },
        links: [
          { label: 'Estrategias de planificación personal', url: 'https://blog.up.edu.mx/prepaup/7-estrategias-de-planificacion-personal-para-adolescentes' }
        ]
      }
    ]
  }
];

const SITUATIONS: Situation[] = [
  {
    id: 0,
    title: 'ACTO I: El Despertar Tecnológico',
    act: 'Inclusión Tecnológica',
    description: 'Llegas al Valle de las Ideas. El pueblo necesita integrar paneles solares y bicibombas. ¿Cómo aplicarías los principios de Diseño Universal para que todos puedan usarlos?',
    options: [
      {
        text: 'Crear un manual técnico avanzado solo para los ingenieros del pueblo.',
        xp: 10,
        feedback: 'Aunque es preciso, excluye a gran parte de la comunidad.',
        consequence: 'La tecnología se queda estancada en manos de unos pocos.',
        resourceSummary: 'El Diseño Universal busca que los entornos y servicios sean comprensibles y utilizables por todas las personas, sin importar su formación técnica.',
        resourceLink: { label: 'Guía de Diseño Universal', url: 'https://www.unicef.org/lac/dise%C3%B1o-universal-para-el-aprendizaje-y-libros-de-texto-digitales-accesibles' }
      },
      {
        text: 'Diseñar herramientas con interfaces simples, iconos claros y mecanismos intuitivos.',
        xp: 50,
        feedback: '¡Excelente! Has aplicado el uso simple y la flexibilidad.',
        consequence: 'Desde los niños hasta los abuelos ahora pueden participar en la sustentabilidad del valle.'
      },
      {
        text: 'Instalar los equipos rápidamente sin explicar su funcionamiento.',
        xp: 5,
        feedback: 'La falta de capacitación genera dependencia y posibles accidentes.',
        consequence: 'Los equipos se dañan pronto y el pueblo pierde la confianza.',
        resourceSummary: 'La inclusión digital requiere democratizar el acceso y asegurar que el uso sea autónomo y seguro para todxs.',
        resourceLink: { label: 'Video: ¿Qué es la Inclusión Digital?', url: 'https://www.youtube.com/watch?v=WEB2I7TzXRo' }
      }
    ],
    badgeId: 'sustentabilidad'
  },
  {
    id: 1,
    title: 'ACTO II: Interfaces para Todxs',
    act: 'Inclusión Tecnológica',
    description: 'Estás diseñando una aplicación para que la comunidad reporte problemas de agua. ¿Cómo aseguras que sea realmente flexible y funcional?',
    options: [
      {
        text: 'Permitir que el usuario elija interactuar mediante texto, voz o gestos.',
        xp: 50,
        feedback: '¡Perfecto! La flexibilidad permite que la herramienta se adapte a las preferencias y habilidades de cada persona.',
        consequence: 'Personas con diferentes capacidades pueden usar la app sin barreras.'
      },
      {
        text: 'Hacerla exclusivamente de texto para que sea más ligera y rápida.',
        xp: 15,
        feedback: 'Esto excluye a personas con dificultades visuales o de lectura.',
        consequence: 'Muchos ciudadanos no pueden reportar sus problemas, limitando la efectividad de la app.',
        resourceSummary: 'Un diseño flexible permite que el usuario elija cómo interactuar con la herramienta (texto, voz, gestos), adaptándose a sus necesidades.',
        resourceLink: { label: 'Blog: Tecnología para la Inclusión', url: 'https://www.kinderup.es/blog/post/el-impacto-de-la-tecnologia-en-la-inclusion-de-alumnos-con-necesidades-educativas-especiales' }
      },
      {
        text: 'Usar solo comandos de voz para que sea moderna y futurista.',
        xp: 10,
        feedback: 'La voz puede ser difícil de usar en ambientes ruidosos o para personas con dificultades de habla.',
        consequence: 'La app se vuelve frustrante para una parte importante de la población.',
        resourceSummary: 'La tecnología inclusiva debe acomodarse a un amplio rango de preferencias individuales para ser funcional.',
        resourceLink: { label: 'Blog: Tecnología para la Inclusión', url: 'https://www.kinderup.es/blog/post/el-impacto-de-la-tecnologia-en-la-inclusion-de-alumnos-con-necesidades-educativas-especiales' }
      }
    ]
  },
  {
    id: 2,
    title: 'ACTO III: Hogares en Armonía',
    act: 'Sustentabilidad',
    description: 'En una comunidad rural, se planea construir viviendas dignas. ¿Qué innovaciones ecológicas recomendarías integrar?',
    options: [
      {
        text: 'Sistemas de aire acondicionado de alta gama importados.',
        xp: 10,
        feedback: 'Son costosos de mantener y no aprovechan los recursos locales.',
        consequence: 'Las familias no pueden pagar la electricidad y el sistema queda abandonado.',
        resourceSummary: 'Las tecnologías verdes en comunidades rurales deben ser accesibles y resolver problemas básicos protegiendo el entorno.',
        resourceLink: { label: 'Proyectos Sustentables en México', url: 'https://earthuniversity.edu.mx/vivienda-sostenible-integrando-ecotecnologias-en-tu-hogar/' }
      },
      {
        text: 'Colectores de lluvia, filtros caseros de agua y estufas con trampa para humo.',
        xp: 50,
        feedback: '¡Excelente! Estas ecotecnologías resuelven problemas históricos de forma sustentable.',
        consequence: 'Las familias mejoran su salud y acceden a agua limpia sin dañar el ecosistema.'
      },
      {
        text: 'Construir con materiales convencionales para terminar más rápido.',
        xp: 15,
        feedback: 'Ignorar la sustentabilidad compromete la capacidad de las futuras generaciones.',
        consequence: 'Las casas son calurosas y el entorno se degrada rápidamente.',
        resourceSummary: 'La sustentabilidad integra elementos sociales y ambientales para satisfacer necesidades presentes sin comprometer el futuro.',
        resourceLink: { label: 'Video: Vivienda Rural Sustentable', url: 'https://www.youtube.com/watch?v=alY6YMCaxts' }
      }
    ],
    badgeId: 'sustentabilidad'
  },
  {
    id: 3,
    title: 'ACTO IV: El Poder del Sol',
    act: 'Sustentabilidad',
    description: 'El pueblo quiere reducir su gasto en gas para calentar agua. ¿Cuál es la opción más innovadora y económica basada en nanotecnología?',
    options: [
      {
        text: 'Instalar calentadores solares que utilizan materiales nano para captar más energía.',
        xp: 50,
        feedback: '¡Muy bien! La nanotecnología permite captar energía limpia de forma más eficiente y económica.',
        consequence: 'El pueblo ahorra dinero y reduce su huella de carbono significativamente.'
      },
      {
        text: 'Comprar tanques de gas más grandes para que duren más tiempo.',
        xp: 5,
        feedback: 'Esto no soluciona el problema de fondo ni es sustentable.',
        consequence: 'El gasto sigue siendo alto y la dependencia de combustibles fósiles continúa.',
        resourceSummary: 'El uso de materiales nano en calentadores solares permite captar energía limpia de forma económica y eficiente.',
        resourceLink: { label: 'Nanotecnología en Calentadores Solares', url: 'https://www.revista.unam.mx/2022v23n3/nanotecnologia_applied_en_calentadores_solares_un_beneficio_para_la_sociedad/' }
      },
      {
        text: 'Usar leña del bosque cercano, ya que es "gratis".',
        xp: 0,
        feedback: 'La deforestación y el humo son perjudiciales para el ambiente y la salud.',
        consequence: 'El bosque desaparece y las enfermedades respiratorias aumentan en el valle.',
        resourceSummary: 'La eficiencia energética busca promover una economía justa mediante el uso de energías limpias y renovables.',
        resourceLink: { label: 'Nanotecnología en Calentadores Solares', url: 'https://www.revista.unam.mx/2022v23n3/nanotecnologia_applied_en_calentadores_solares_un_beneficio_para_la_sociedad/' }
      }
    ]
  },
  {
    id: 4,
    title: 'ACTO V: La Cumbre del Liderazgo',
    act: 'Metas y Potencialidades',
    description: 'Debes organizar una brigada de limpieza en el río. ¿Cómo ejercerías un liderazgo positivo en tu equipo?',
    options: [
      {
        text: 'Dar órdenes directas sin escuchar sugerencias para evitar discusiones.',
        xp: 15,
        feedback: 'Un líder que no escucha desmotiva al equipo y pierde ideas valiosas.',
        consequence: 'El equipo trabaja sin ganas y los resultados son mediocres.',
        resourceSummary: 'Aprender a ser líderes implica fomentar el respeto por las diferencias y transformar conflictos en oportunidades.',
        resourceLink: { label: 'Video: Cómo ser un buen lider', url: 'https://youtu.be/16z28DjRTAA' }
      },
      {
        text: 'Identificar las habilidades de cada compañero y delegar tareas según sus fortalezas.',
        xp: 50,
        feedback: '¡Brillante! Reconocer las potencialidades de cada uno fortalece a la comunidad entera.',
        consequence: 'El río queda impecable y el equipo se siente unido y valorado.'
      },
      {
        text: 'Hacer la mayor parte del trabajo tú solo para que quede "bien hecho".',
        xp: 10,
        feedback: 'El liderazgo requiere fomentar la participación y el trabajo en equipo.',
        consequence: 'Te agotas y tus compañeros sienten que su ayuda no es necesaria.',
        resourceSummary: 'Descubrir habilidades para comunicarse y resolver problemas en equipo es vital para el bienestar colectivo.',
        resourceLink: { label: 'Habilidades para la Vida', url: 'https://www.huntermagazine.es/como-cultivar-habilidades-de-liderazgo-en-la-adolescencia/' }
      }
    ],
    badgeId: 'inclusion'
  },
  {
    id: 5,
    title: 'ACTO VI: El Filo de la Crítica',
    act: 'Metas y Potencialidades',
    description: 'Hay un conflicto en el pueblo sobre dónde poner el nuevo centro comunitario. ¿Cómo aplicarías el pensamiento crítico?',
    options: [
      {
        text: 'Analizar los beneficios y riesgos de cada ubicación, escuchando todas las posturas.',
        xp: 50,
        feedback: '¡Excelente! El pensamiento crítico permite tomar decisiones responsables basadas en el análisis.',
        consequence: 'Se elige el mejor lugar para todos, minimizando futuros conflictos.'
      },
      {
        text: 'Apoyar la opción de la persona más influyente para evitar problemas.',
        xp: 10,
        feedback: 'Seguir una opinión sin cuestionarla puede llevar a decisiones injustas.',
        consequence: 'El centro queda en un lugar poco accesible para la mayoría de la gente.',
        resourceSummary: 'Tomar decisiones responsables requiere analizar logros y errores, sumando iniciativa personal y constancia.',
        resourceLink: { label: 'Video: Pensamiento Crítico en Jóvenes', url: 'https://www.youtube.com/watch?v=YO4pwpaH8Fo' }
      },
      {
        text: 'Votar rápidamente sin discutir mucho para terminar pronto la reunión.',
        xp: 15,
        feedback: 'La prisa es enemiga del análisis profundo y la participación real.',
        consequence: 'Muchos se sienten ignorados y el proyecto pierde apoyo comunitario.',
        resourceSummary: 'El bienestar se alcanza cuando reconocemos características únicas que fortalecen a la comunidad.',
        resourceLink: { label: 'Video: Pensamiento Crítico en Jóvenes', url: 'https://www.youtube.com/watch?v=YO4pwpaH8Fo' }
      }
    ]
  },
  {
    id: 6,
    title: 'ACTO VII: Redes de Apoyo',
    act: 'Proyecto de Vida',
    description: 'Un compañero está pasando por una situación económica difícil y piensa dejar la escuela. ¿Cómo aplicarías la asertividad y el apoyo mutuo?',
    options: [
      {
        text: 'Aconsejarle que trabaje tiempo completo y olvide los estudios por ahora.',
        xp: 5,
        feedback: 'Esto puede cerrar sus puertas al futuro a largo plazo.',
        consequence: 'Tu amigo pierde su oportunidad de educación y se siente solo en su crisis.',
        resourceSummary: 'Identificar cuándo se necesita ayuda es una fortaleza. El proyecto de vida se nutre del apoyo de familia y amigos.',
        resourceLink: { label: 'Video: Proyecto de Vida', url: 'https://youtu.be/t962o0HXtKs' }
      },
      {
        text: 'Escucharlo asertivamente y ayudarlo a buscar becas o apoyos comunitarios con los maestros.',
        xp: 50,
        feedback: '¡Perfecto! El apoyo mutuo y la comunicación asertiva permiten superar retos con resiliencia.',
        consequence: 'Tu amigo encuentra una solución, sigue estudiando y se siente respaldado por su comunidad.'
      },
      {
        text: 'No intervenir para no incomodarlo con sus problemas personales.',
        xp: 10,
        feedback: 'La indiferencia debilita los lazos comunitarios y el bienestar colectivo.',
        consequence: 'El compañero se retira de la escuela sintiendo que a nadie le importa su situación.',
        resourceSummary: 'Enfrentar crisis con resiliencia y comunicación asertiva es clave para un proyecto de vida exitoso.',
        resourceLink: { label: 'Video: Construyendo mi futuro', url: 'https://youtu.be/thUvZQuarHU' }
      }
    ],
    badgeId: 'vida'
  },
  {
    id: 7,
    title: 'ACTO VIII: Trazando el Rumbo',
    act: 'Proyecto de Vida',
    description: 'Estás por terminar la secundaria. ¿Cuál es la mejor forma de planificar tu inserción social y laboral?',
    options: [
      {
        text: 'Establecer metas a corto, mediano y largo plazo, evaluando riesgos y beneficios.',
        xp: 50,
        feedback: '¡Sabia elección! La planificación estratégica es la base de un futuro satisfactorio.',
        consequence: 'Visualizas tu futuro con claridad y tienes un plan para superar los obstáculos.'
      },
      {
        text: 'Esperar a terminar para ver qué opciones de trabajo aparecen por suerte.',
        xp: 10,
        feedback: 'La falta de planificación puede llevarte a empleos que no aprovechan tu potencial.',
        consequence: 'Te sientes perdido y sin rumbo al terminar tus estudios.',
        resourceSummary: 'Establecer metas requiere evaluar constantemente beneficios y riesgos para una inserción social exitosa.',
        resourceLink: { label: 'Estrategias de planificación personal', url: 'https://blog.up.edu.mx/prepaup/7-estrategias-de-planificacion-personal-para-adolescentes' }
      },
      {
        text: 'Elegir lo que tus padres digan sin investigar por tu cuenta.',
        xp: 15,
        feedback: 'Aunque su consejo es valioso, tú debes ser el protagonista de tu propio proyecto.',
        consequence: 'Estudias algo que no te motiva, afectando tu bienestar personal.',
        resourceSummary: 'Investigar opciones de educación o emprendimiento es el primer paso para un proyecto de vida sólido.',
        resourceLink: { label: 'Estrategias de planificación personal', url: 'https://blog.up.edu.mx/prepaup/7-estrategias-de-planificacion-personal-para-adolescentes' }
      }
    ]
  },
  {
    id: 8,
    title: 'ACTO IX: Puentes de Inclusión',
    act: 'Inclusión Tecnológica',
    description: 'Un nuevo estudiante con discapacidad visual llega a la Telesecundaria. ¿Cómo aseguras su inclusión digital?',
    options: [
      {
        text: 'Pedirle que solo use libros impresos mientras los demás usan computadoras.',
        xp: 5,
        feedback: 'Esto es exclusión y limita su acceso a la información.',
        consequence: 'El estudiante se siente marginado y su aprendizaje se retrasa.',
        resourceSummary: 'La inclusión digital es la democratización del acceso a las TIC para que todxs participen plenamente.',
        resourceLink: { label: 'Guía de Diseño Universal', url: 'https://www.unicef.org/lac/dise%C3%B1o-universal-para-el-aprendizaje-y-libros-de-texto-digitales-accesibles' }
      },
      {
        text: 'Configurar lectores de pantalla y asegurar que los materiales digitales sean accesibles.',
        xp: 50,
        feedback: '¡Excelente! Has aplicado la accesibilidad para romper barreras de desigualdad.',
        consequence: 'El estudiante participa plenamente en todas las actividades tecnológicas de la clase.'
      },
      {
        text: 'Asignarle un compañero para que le lea todo lo que sale en pantalla.',
        xp: 20,
        feedback: 'Aunque es solidario, no fomenta la autonomía del estudiante mediante la tecnología.',
        consequence: 'El estudiante depende siempre de otro y no desarrolla sus propias habilidades digitales.',
        resourceSummary: 'Los entornos y servicios deben ser utilizables de la forma más independiente posible por todas las personas.',
        resourceLink: { label: 'Video: ¿Qué es la Inclusión Digital?', url: 'https://www.youtube.com/watch?v=WEB2I7TzXRo' }
      }
    ]
  },
  {
    id: 9,
    title: 'ACTO X: El Futuro del Valle',
    act: 'Sustentabilidad',
    description: 'Se debe elegir un proyecto para el fondo comunitario. ¿Cuál representa mejor el desarrollo sustentable?',
    options: [
      {
        text: 'Un centro de juegos electrónicos que consume mucha energía pero es divertido.',
        xp: 10,
        feedback: 'No es sustentable a largo plazo ni atiende necesidades básicas.',
        consequence: 'El costo de luz agota el fondo y el centro cierra en pocos meses.',
        resourceSummary: 'La sustentabilidad satisface necesidades del presente sin comprometer a las futuras generaciones.',
        resourceLink: { label: 'Video: Vivienda Rural Sustentable', url: 'https://www.youtube.com/watch?v=alY6YMCaxts' }
      },
      {
        text: 'Un huerto comunitario con riego por goteo solar y capacitación en economía justa.',
        xp: 50,
        feedback: '¡Perfecto! Integras elementos financieros, sociales y ambientales.',
        consequence: 'El valle asegura su alimentación, cuida el agua y fortalece su economía local.'
      },
      {
        text: 'Repartir el dinero entre todos los habitantes para que compren lo que quieran.',
        xp: 5,
        feedback: 'Esto no genera un desarrollo duradero ni resuelve problemas estructurales.',
        consequence: 'El dinero se gasta rápido y el valle sigue teniendo las mismas carencias de siempre.',
        resourceSummary: 'El desarrollo sustentable busca integrar elementos financieros, sociales y ambientales para un bienestar duradero.',
        resourceLink: { label: 'Proyectos Sustentables en México', url: 'https://earthuniversity.edu.mx/vivienda-sostenible-integrando-ecotecnologias-en-tu-hogar/' }
      }
    ]
  }
];

const LibraryActivity = ({ activity, studentName, onComplete, isCompleted }: { 
  activity: InteractiveActivity, 
  studentName?: string, 
  onComplete: (id: string) => void,
  isCompleted: boolean
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleCheck = (option: string) => {
    setSelected(option);
    setShowFeedback(true);
    if (option === activity.correctAnswer && !isCompleted) {
      onComplete(activity.id);
    }
  };

  const isCorrect = selected === activity.correctAnswer;
  const firstName = studentName?.split(' ')[0] || 'Cronista';

  return (
    <div className={`mt-4 p-4 rounded-xl border transition-all ${isCompleted ? 'bg-green-50/50 border-green-200' : 'bg-white/50 border-[#E6E6D4] shadow-inner'}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {activity.type === 'quiz' ? (
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-green-500' : 'text-[#F27D26]'}`} />
          ) : (
            <Sparkles className={`w-4 h-4 ${isCompleted ? 'text-green-500' : 'text-[#F27D26]'}`} />
          )}
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B8B6B]">
            {activity.type === 'quiz' ? 'Mini-Quiz Interactivo' : 'Actividad de Refuerzo'}
          </span>
        </div>
        {isCompleted && (
          <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> +5 XP
          </span>
        )}
      </div>
      
      <p className="text-sm font-semibold mb-3 text-[#2D5A27]">{activity.question}</p>
      
      <div className="space-y-2">
        {activity.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => !showFeedback && handleCheck(option)}
            disabled={showFeedback}
            className={`w-full text-left p-3 rounded-lg text-xs transition-all border-2 ${
              showFeedback
                ? option === activity.correctAnswer
                  ? 'bg-green-100 border-green-500 text-green-700'
                  : selected === option
                    ? 'bg-red-100 border-red-500 text-red-700'
                    : 'bg-gray-50 border-gray-200 opacity-50'
                : 'bg-white border-transparent hover:border-[#A8DADC] hover:bg-[#F5F5F0]'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className={`mt-4 p-3 rounded-lg text-xs flex items-start gap-2 ${
              isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}
          >
            {isCorrect ? (
              <CheckCircle2 className="w-4 h-4 shrink-0" />
            ) : (
              <Info className="w-4 h-4 shrink-0" />
            )}
            <div>
              <p className="font-bold mb-1">{isCorrect ? `¡Excelente, ${firstName}!` : `Casi lo logras, ${firstName}...`}</p>
              <p>{isCorrect ? activity.feedback : 'Vuelve a leer el texto de arriba para encontrar la respuesta correcta.'}</p>
              {!isCorrect && (
                <button 
                  onClick={() => { setSelected(null); setShowFeedback(false); }}
                  className="mt-2 font-bold underline uppercase tracking-tighter"
                >
                  Intentar de nuevo
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [gameState, setGameState] = useState<GameState>({
    xp: 0,
    badges: [],
    currentSituation: 0,
    view: 'intro',
    attempts: 0,
    completedActivities: [],
  });

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [activeConcept, setActiveConcept] = useState(0);

  const handleActivityCompletion = (id: string) => {
    setGameState(prev => {
      if (prev.completedActivities.includes(id)) return prev;
      return {
        ...prev,
        xp: prev.xp + 5,
        completedActivities: [...prev.completedActivities, id]
      };
    });
  };

  const currentSit = SITUATIONS[gameState.currentSituation];

  const handleStart = () => setGameState(prev => ({ ...prev, view: 'registration' }));
  const handleStartAdventure = () => setGameState(prev => ({ ...prev, view: 'adventure', attempts: 0 }));

  const handleRegister = (student: StudentInfo) => {
    setGameState(prev => ({ ...prev, student, view: 'library' }));
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    setShowFeedback(true);
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    setGameState(prev => ({ ...prev, attempts: prev.attempts + 1 }));
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const option = currentSit.options[selectedOption];
    const newBadges = [...gameState.badges];
    
    // XP is reduced if it wasn't the first attempt
    const earnedXp = gameState.attempts > 0 ? Math.floor(option.xp * 0.6) : option.xp;

    if (option.xp >= 40 && currentSit.badgeId && !newBadges.includes(currentSit.badgeId)) {
      newBadges.push(currentSit.badgeId);
    }

    const nextSit = gameState.currentSituation + 1;
    if (nextSit >= SITUATIONS.length) {
      setGameState(prev => ({
        ...prev,
        xp: prev.xp + earnedXp,
        badges: newBadges,
        view: 'finished'
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        xp: prev.xp + earnedXp,
        badges: newBadges,
        currentSituation: nextSit,
        attempts: 0
      }));
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const generateCertificate = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'letter'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Background: Plain White for letterhead printing
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Content
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(48);
    doc.setTextColor(45, 90, 39);
    doc.text('RECONOCIMIENTO', pageWidth / 2, 45, { align: 'center' });

    doc.setFontSize(22);
    doc.setTextColor(90, 90, 64);
    doc.text('Se otorga el presente a:', pageWidth / 2, 65, { align: 'center' });

    // Student Name
    doc.setFontSize(35);
    doc.setTextColor(0, 0, 0);
    const studentName = gameState.student?.name || 'Estudiante';
    doc.text(studentName, pageWidth / 2, 85, { align: 'center' });

    // Personalized Title based on gender
    doc.setFontSize(24);
    doc.setTextColor(242, 125, 38); // #F27D26
    let title = 'Guardián del Valle';
    if (gameState.student?.gender === 'M') title = 'Guardián del Valle de las Ideas';
    if (gameState.student?.gender === 'F') title = 'Guardiana del Valle de las Ideas';
    if (gameState.student?.gender === 'NB') title = 'Guardián(e) del Valle de las Ideas';
    doc.text(title, pageWidth / 2, 100, { align: 'center' });

    doc.setFontSize(16);
    doc.setTextColor(90, 90, 64);
    doc.text(`Grado y Grupo: ${gameState.student?.gradeGroup || 'N/A'}`, pageWidth / 2, 115, { align: 'center' });

    doc.setFontSize(18);
    doc.text('Por haber completado con éxito las Crónicas de la Telesecundaria 41', pageWidth / 2, 130, { align: 'center' });
    doc.text('y demostrado un alto compromiso con el bienestar del Valle.', pageWidth / 2, 140, { align: 'center' });

    doc.setFontSize(24);
    doc.setTextColor(45, 90, 39);
    doc.text(`Puntaje Final: ${gameState.xp} XP`, pageWidth / 2, 160, { align: 'center' });

    // Badges
    doc.setFontSize(14);
    doc.setTextColor(139, 139, 107);
    const badgeNames = gameState.badges.map(id => BADGES.find(b => b.id === id)?.name).filter(Boolean).join(', ');
    doc.text(`Insignias obtenidas: ${badgeNames || 'Ninguna'}`, pageWidth / 2, 175, { align: 'center' });

    // Footer
    doc.setFontSize(12);
    doc.setTextColor(90, 90, 64);
    doc.text(`Fecha de emisión: ${new Date().toLocaleDateString()}`, pageWidth / 2, 190, { align: 'center' });
    //doc.text('Telesecundaria 41 - El Valle de las Ideas', pageWidth / 2, 200, { align: 'center' });

    doc.save(`Reconocimiento_${studentName.replace(/\s+/g, '_')}.pdf`);
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf': return <Leaf className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Compass': return <Compass className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  if (gameState.view === 'registration') {
    return (
      <div className="min-h-screen bg-[#FDF6E3] flex items-center justify-center p-4 font-sans text-[#5A5A40]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-8 rounded-[32px] shadow-2xl border-4 border-[#E6E6D4]"
        >
          <div className="text-center mb-8">
            <div className="bg-[#2D5A27] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-[#2D5A27]">Identificación del Cronista</h2>
            <p className="text-sm text-[#8B8B6B]">Cuéntanos quién eres para comenzar tu historia</p>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            handleRegister({
              name: formData.get('name') as string,
              gender: formData.get('gender') as 'M' | 'F' | 'NB',
              gradeGroup: formData.get('gradeGroup') as string,
            });
          }} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 px-1">Nombre Completo</label>
              <input 
                required 
                name="name"
                placeholder="Ej. Juan Pérez"
                className="w-full bg-[#F5F5F0] border-2 border-[#E6E6D4] rounded-xl px-4 py-3 focus:outline-none focus:border-[#2D5A27] transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 px-1">Sexo</label>
                <select 
                  required 
                  name="gender"
                  className="w-full bg-[#F5F5F0] border-2 border-[#E6E6D4] rounded-xl px-4 py-3 focus:outline-none focus:border-[#2D5A27] transition-colors appearance-none"
                >
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                  <option value="NB">No Binario</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 px-1">Grado y Grupo</label>
                <select 
                  required 
                  name="gradeGroup"
                  className="w-full bg-[#F5F5F0] border-2 border-[#E6E6D4] rounded-xl px-4 py-3 focus:outline-none focus:border-[#2D5A27] transition-colors appearance-none"
                >
                  <option value="1º A">1º A</option>
                  <option value="2º A">2º A</option>
                  <option value="3º A">3º A</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#2D5A27] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#1D3A17] transition-all shadow-lg flex items-center justify-center gap-2 mt-4"
            >
              Comenzar Crónica <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }
  if (gameState.view === 'intro') {
    return (
      <div className="min-h-screen bg-[#FDF6E3] flex items-center justify-center p-4 font-sans text-[#5A5A40]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-4 border-[#E6E6D4] text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sun className="w-16 h-16 text-[#F27D26] animate-pulse" />
              <Wind className="absolute -top-2 -right-2 w-8 h-8 text-[#A8DADC] animate-bounce" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-[#2D5A27] tracking-tight">
            El Valle de las Ideas
          </h1>
          <p className="text-xl italic mb-6 text-[#8B8B6B]">
            Crónicas de la Telesecundaria 41
          </p>
          <div className="text-left space-y-4 mb-8 leading-relaxed">
            <p>
              ¡Bienvenidos, jóvenes cronistas! Se encuentran en el umbral de un valle donde los sueños se entrelazan con la tecnología y la naturaleza.
            </p>
            <p>
              Antes de partir, visiten la <strong>Biblioteca de la Sabiduría</strong> para repasar los conceptos que les permitirán sanar el valle.
            </p>
          </div>
          <button 
            onClick={handleStart}
            className="bg-[#5A5A40] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#4A4A30] transition-colors flex items-center gap-2 mx-auto"
          >
            Entrar a la Biblioteca <BookOpen className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    );
  }

  if (gameState.view === 'library') {
    return (
      <div className="min-h-screen bg-[#FDF6E3] p-4 md:p-8 font-sans text-[#5A5A40]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#2D5A27] flex items-center gap-3">
                <BookOpen className="w-8 h-8" /> Biblioteca de la Sabiduría
              </h2>
              <p className="text-[#8B8B6B] italic">Repasa los conocimientos ancestrales del Valle</p>
            </div>
            <button 
              onClick={handleStartAdventure}
              className="bg-[#2D5A27] text-white px-6 py-2 rounded-full font-bold hover:bg-[#1D3A17] transition-all flex items-center gap-2 shadow-lg"
            >
              Iniciar Aventura <Sparkles className="w-4 h-4" />
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Concept Navigation (H5P Style) */}
            <div className="lg:col-span-4 space-y-3">
              {CONCEPTS.map((concept, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveConcept(idx)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                    activeConcept === idx 
                      ? 'bg-white border-[#2D5A27] shadow-md translate-x-2' 
                      : 'bg-white/50 border-[#E6E6D4] hover:bg-white'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${activeConcept === idx ? 'bg-[#2D5A27] text-white' : 'bg-[#E6E6D4] text-[#5A5A40]'}`}>
                    {concept.icon}
                  </div>
                  <span className="font-bold">{concept.title}</span>
                </button>
              ))}
              
              <div className="mt-8 p-6 bg-[#E6E6D4]/40 rounded-3xl border-2 border-dashed border-[#E6E6D4]">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Info className="w-3 h-3" /> Nota del Bibliotecario
                </h4>
                <p className="text-xs italic leading-relaxed">
                  "El conocimiento es la semilla, pero la acción es el fruto. Estudia bien estos pergaminos antes de enfrentarte a los retos del valle."
                </p>
              </div>
            </div>

            {/* Interactive Content Area */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeConcept}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white p-8 rounded-[40px] shadow-xl border-4 border-[#E6E6D4] min-h-[500px] flex flex-col"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-[#F5F5F0] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#8B8B6B] border border-[#E6E6D4]">
                      {CONCEPTS[activeConcept].source}
                    </div>
                    <Lightbulb className="text-[#F27D26] w-8 h-8" />
                  </div>

                  <h3 className="text-4xl font-bold text-[#2D5A27] mb-4">{CONCEPTS[activeConcept].title}</h3>
                  <p className="text-lg text-[#5A5A40] mb-8 leading-relaxed border-l-4 border-[#A8DADC] pl-4 italic">
                    "{CONCEPTS[activeConcept].description}"
                  </p>

                  <div className="grid md:grid-cols-1 gap-4 flex-1">
                    {CONCEPTS[activeConcept].details.map((detail, dIdx) => (
                      <motion.div 
                        key={dIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: dIdx * 0.1 }}
                        className="bg-[#FDF6E3] p-5 rounded-2xl border border-[#E6E6D4] flex items-start gap-4 hover:shadow-md transition-shadow group"
                      >
                        <div className="mt-1">
                          <CheckCircle2 className="w-5 h-5 text-[#2D5A27] group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <h5 className="font-bold text-[#2D5A27] mb-1">{detail.label}</h5>
                          <p className="text-sm leading-relaxed mb-3">{detail.text}</p>
                          
                          {detail.activity && (
                            <LibraryActivity 
                              activity={detail.activity} 
                              studentName={gameState.student?.name}
                              onComplete={handleActivityCompletion}
                              isCompleted={gameState.completedActivities.includes(detail.activity.id)}
                            />
                          )}

                          {detail.links && detail.links.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {detail.links.map((link, lIdx) => (
                                <a 
                                  key={lIdx} 
                                  href={link.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md border border-[#E6E6D4] text-[#2D5A27] hover:bg-[#2D5A27] hover:text-white transition-colors"
                                >
                                  {link.label} <ExternalLink className="w-3 h-3" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-between items-center pt-6 border-t border-[#E6E6D4]">
                    <div className="flex gap-1">
                      {CONCEPTS.map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i === activeConcept ? 'bg-[#2D5A27]' : 'bg-[#E6E6D4]'}`} />
                      ))}
                    </div>
                    <div className="text-[10px] text-[#8B8B6B] uppercase font-bold tracking-tighter">
                      Interacción tipo H5P - Conceptos Clave
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState.view === 'finished') {
    const hasPassed = gameState.xp >= 450;

    const studentFirstName = gameState.student?.name.split(' ')[0] || 'Guardián';
    const genderSuffix = gameState.student?.gender === 'F' ? 'a' : 'o';
    const guardianTitle = gameState.student?.gender === 'F' ? 'Guardiana' : (gameState.student?.gender === 'NB' ? 'Guardián(e)' : 'Guardián');

    return (
      <div className="min-h-screen bg-[#FDF6E3] flex items-center justify-center p-4 font-sans text-[#5A5A40]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl w-full bg-white/90 backdrop-blur-md p-10 rounded-[32px] shadow-2xl border-4 border-[#E6E6D4]"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2D5A27]">
            {hasPassed ? `¡Misión Cumplida, ${guardianTitle}!` : `Necesitas más práctica, ${studentFirstName}`}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className={`p-6 rounded-2xl border-2 ${hasPassed ? 'bg-[#F5F5F0] border-[#D4D4C4]' : 'bg-red-50 border-red-200'}`}>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles className={hasPassed ? 'text-[#F27D26]' : 'text-red-500'} /> Tu Progreso
              </h3>
              <div className={`text-5xl font-bold mb-2 ${hasPassed ? 'text-[#5A5A40]' : 'text-red-600'}`}>
                {gameState.xp} <span className="text-sm font-normal text-[#8B8B6B]">XP</span>
              </div>
              <p className="text-sm text-[#8B8B6B]">
                {hasPassed ? 'Fragmentos de Bienestar recolectados' : 'Puntaje insuficiente para aprobar (Mínimo 450 XP)'}
              </p>
            </div>

            <div className="bg-[#F5F5F0] p-6 rounded-2xl border-2 border-[#D4D4C4]">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Award className="text-[#F27D26]" /> Insignias Obtenidas
              </h3>
              <div className="flex flex-wrap gap-3">
                {gameState.badges.length > 0 ? (
                  gameState.badges.map(id => {
                    const badge = BADGES.find(b => b.id === id);
                    return (
                      <div key={id} className="bg-white p-2 rounded-full shadow-sm border border-[#E6E6D4] group relative" title={badge?.name}>
                        {badge && renderIcon(badge.icon)}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-[#5A5A40] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          <strong>{badge?.name}</strong>: {badge?.description}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-sm italic text-[#8B8B6B]">Sigue intentándolo para ganar insignias.</p>
                )}
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-lg leading-relaxed">
              {hasPassed 
                ? `Has demostrado, ${studentFirstName}, que el éxito personal y el impacto colectivo son las dos caras de una misma moneda. Tu paso por la Telesecundaria 41 dejará una huella imborrable en el Valle de las Ideas.`
                : `El Valle aún necesita de tu sabiduría, ${studentFirstName}. Para sanarlo completamente, debes repasar los conceptos en la biblioteca y tomar decisiones más acertadas en tu aventura.`}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {!hasPassed ? (
                <button 
                  onClick={() => setGameState({ xp: 0, badges: [], currentSituation: 0, view: 'intro', attempts: 0 })}
                  className="bg-[#F27D26] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#D26D16] transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" /> Reiniciar y Repetir
                </button>
              ) : (
                <>
                  <button 
                    onClick={generateCertificate}
                    className="bg-[#2D5A27] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1D3A17] transition-colors flex items-center justify-center gap-2"
                  >
                    <FileDown className="w-5 h-5" /> Descargar Reconocimiento
                  </button>
                  <button 
                    onClick={() => setGameState({ xp: 0, badges: [], currentSituation: 0, view: 'intro', attempts: 0 })}
                    className="bg-[#5A5A40] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4A4A30] transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" /> Nueva Partida
                  </button>
                </>
              )}
            </div>
            {hasPassed && (
              <p className="text-xs text-[#8B8B6B] italic mt-4">
                * Puedes descargar tu reconocimiento en PDF y enviarlo a tu docente como evidencia de tu progreso.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF6E3] p-4 md:p-8 font-sans text-[#5A5A40]">
      <div className="max-w-5xl mx-auto">
        {/* Header Stats */}
        <div className="flex justify-between items-center mb-8 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border-2 border-[#E6E6D4]">
          <button 
            onClick={() => setGameState(prev => ({ ...prev, view: 'library' }))}
            className="flex items-center gap-2 text-xs font-bold hover:text-[#2D5A27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver a la Biblioteca
          </button>
          <div className="flex items-center gap-4">
            <div className="bg-[#5A5A40] text-white p-2 rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-[#8B8B6B]">Bienestar</p>
              <p className="text-xl font-bold">{gameState.xp} XP</p>
            </div>
          </div>
          <div className="flex gap-2">
            {BADGES.map(badge => (
              <div 
                key={badge.id} 
                className={`p-2 rounded-full border-2 transition-all ${
                  gameState.badges.includes(badge.id) 
                    ? 'bg-[#D4E6D4] border-[#2D5A27] text-[#2D5A27]' 
                    : 'bg-white/40 border-[#E6E6D4] text-[#D4D4C4]'
                }`}
              >
                {renderIcon(badge.icon)}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={gameState.currentSituation}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Narrative & Situation */}
            <div className="space-y-6">
              <div className="bg-white/90 p-8 rounded-[32px] shadow-lg border-4 border-[#E6E6D4] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Sparkles className="w-24 h-24" />
                </div>
                <span className="inline-block px-3 py-1 bg-[#E6E6D4] text-[#5A5A40] text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                  {currentSit.act}
                </span>
                <h2 className="text-3xl font-bold mb-4 text-[#2D5A27]">{currentSit.title}</h2>
                <p className="text-lg leading-relaxed text-[#5A5A40]">
                  {currentSit.description}
                </p>
              </div>

              {showFeedback && selectedOption !== null && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-6 rounded-2xl border-2 ${
                    currentSit.options[selectedOption].xp >= 40 
                      ? 'bg-[#D4E6D4] border-[#2D5A27]' 
                      : 'bg-[#FDF6E3] border-[#F27D26]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {currentSit.options[selectedOption].xp >= 40 ? (
                      <ShieldCheck className="w-6 h-6 text-[#2D5A27] mt-1" />
                    ) : (
                      <Heart className="w-6 h-6 text-[#F27D26] mt-1" />
                    )}
                    <div>
                      <p className="font-bold mb-1">
                        {currentSit.options[selectedOption].xp >= 40 
                          ? `¡Excelente elección, ${gameState.student?.name.split(' ')[0]}!` 
                          : `Una lección aprendida, ${gameState.student?.name.split(' ')[0]}...`}
                      </p>
                      <p className="text-sm mb-3">{currentSit.options[selectedOption].feedback}</p>
                      
                      {currentSit.options[selectedOption].xp < 40 && currentSit.options[selectedOption].resourceSummary && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 p-4 bg-white/60 rounded-xl border border-[#F27D26]/30"
                        >
                          <p className="text-[10px] font-bold text-[#F27D26] uppercase mb-1 flex items-center gap-1">
                            <BookOpen className="w-3 h-3" /> Repaso Sugerido
                          </p>
                          <p className="text-xs mb-2 italic">"{currentSit.options[selectedOption].resourceSummary}"</p>
                          {currentSit.options[selectedOption].resourceLink && (
                            <a 
                              href={currentSit.options[selectedOption].resourceLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] font-bold text-[#2D5A27] underline flex items-center gap-1 hover:text-[#1D3A17]"
                            >
                              Ver recurso: {currentSit.options[selectedOption].resourceLink.label} <ExternalLink className="w-2 h-2" />
                            </a>
                          )}
                        </motion.div>
                      )}

                      {gameState.attempts > 0 && currentSit.options[selectedOption].xp < 40 && (
                        <p className="text-[10px] text-[#F27D26] font-bold uppercase mb-2">Segunda oportunidad - XP reducida</p>
                      )}
                      <div className="bg-white/50 p-3 rounded-xl text-xs italic">
                        <strong>Consecuencia:</strong> {currentSit.options[selectedOption].consequence}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    {currentSit.options[selectedOption].xp < 40 && gameState.attempts === 0 ? (
                      <button 
                        onClick={handleRetry}
                        className="flex-1 bg-[#F27D26] text-white py-2 rounded-xl font-bold hover:bg-[#D26D16] transition-colors flex items-center justify-center gap-2"
                      >
                        Intentar de nuevo <ArrowLeft className="w-4 h-4" />
                      </button>
                    ) : (
                      <button 
                        onClick={handleNext}
                        className="flex-1 bg-[#5A5A40] text-white py-2 rounded-xl font-bold hover:bg-[#4A4A30] transition-colors flex items-center justify-center gap-2"
                      >
                        Continuar Crónica <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Options */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#8B8B6B] px-2">¿Qué camino tomarás?</h3>
              {currentSit.options.map((option, index) => (
                <button
                  key={index}
                  disabled={showFeedback}
                  onClick={() => handleOptionSelect(index)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all group ${
                    selectedOption === index 
                      ? 'bg-[#5A5A40] border-[#5A5A40] text-white shadow-lg scale-[1.02]' 
                      : 'bg-white border-[#E6E6D4] hover:border-[#5A5A40] hover:shadow-md'
                  } ${showFeedback && selectedOption !== index ? 'opacity-50 grayscale' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${
                      selectedOption === index ? 'bg-white text-[#5A5A40] border-white' : 'bg-[#E6E6D4] text-[#5A5A40] border-[#E6E6D4]'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <p className="flex-1 font-medium">{option.text}</p>
                  </div>
                </button>
              ))}
              
              <div className="mt-8 p-6 bg-[#E6E6D4]/30 rounded-2xl border-2 border-dashed border-[#E6E6D4]">
                <p className="text-xs text-[#8B8B6B] leading-relaxed">
                  Recuerda: La <strong>Ciudadanía Digital</strong> y el <strong>Apoyo Mutuo</strong> son tus mejores herramientas. Cada decisión cuenta para el bienestar del Valle.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
