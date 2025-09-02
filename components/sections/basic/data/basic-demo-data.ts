// Datos demo para el paquete básico de quinceañera
export const basicDemoData = {
  hero: {
    name: "Arianna Karina",
    subtitle: "¡Mis XV años!",
    backgroundImage: "/images/quince/encantada1.png"
  },
  
  event: {
    celebrant: "Arianna Karina",
    parents: {
      father: "SANTOS SANCHEZ PULIDO",
      mother: "NANCY R. COBA FLORES"
    },
    godparents: {
      godfather: "FABIO COBA FLORES",
      godmother: "ANEL COBA FLORES"
    },
    date: {
      full: "Sábado 18 de Octubre 2025",
      day: "Sábado",
      date: "18 de Octubre 2025"
    },
    ceremony: {
      time: "17:00 hrs.",
      venue: "Parroquia San José",
      address: "San José Chiapa, Puebla",
      type: "Misa de Acción de Gracias",
      ubiLink: "https://maps.app.goo.gl/QxDwarXgZj6iQ3Ab8"
    },
    party: {
      time: "18:30 hrs.",
      venue: "Salón Social Finca de San José",
      address: "San José Chiapa, Puebla",
      type: "Recepción",
      ubiLink: "https://maps.app.goo.gl/N6SUnMkGWecBS84j8"
    },
    dressCode: "Formal",
    restrictions: ""
  },

  countdown: {
    targetDate: "October 18, 2025 17:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Favor de confirmar su asistencia dos días antes del evento.",
    subtitle: "Favor de confirmar su asistencia dos días antes del evento.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarme?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir."
      }
    }
  },

  gifts: {
    title: "OPCIONES DE REGALO",
    message: "Mi mejor regalo es compartir contigo este gran día, si deseas obsequiarme algo, puedo sugerir las siguientes opciones:",
    options: [
      {
        icon: "💰",
        title: "Sobre con efectivo",
        description: "El día del evento",
        details: "Puedes entregarlo en la recepción"
      },
      {
        icon: "🎁",
        title: "Regalo personalizado",
        description: "Algo hecho especialmente para mí",
        details: "Puedes entregarlo en la recepción"
      },
      {
        icon: "🎉",
        title: "Mesa de regalos",
        description: "Liverpool ID: 123456",
        details: "Tu compañía es el mejor regalo"
      },
      {
        icon: "🎊",
        title: "Transferencia Bancaria",
        description: "Banco: XYZ\nCuenta: 123456789\nNombre: Arianna Karina",
        details: "Confirma tu transferencia con un mensaje"
      }
    ]
  },

  demo: {
    badge: "🎭 DEMO - Paquete Básico ($299)",
    description: "Esta es una demostración del paquete básico",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde", 
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    cta: {
      title: "¿Te gusta este paquete?",
      subtitle: "Incluye todas las características esenciales para tu evento",
      buttonText: "Contratar Paquete Básico - $299",
      link: "/#pricing"
    }
  }
}

export type BasicDemoData = typeof basicDemoData 