const textoNodos = [
  {
    id: 1,
    texto:
      "You wake up in a maze, your vision is blurred and you see a vial with a thick liquid.",
    opciones: [
      {
        texto: "You grab the jar",
        setEstado: { frasco: true },
        siguienteTexto: 2,
      },
      {
        texto: "You go",
        siguienteTexto: 2,
      },
    ],
  },
  {
    id: 2,
    texto: "You meet a merchant, giving you some information..",
    opciones: [
      {
        texto: "Change the bottle with liquid for a sword",
        requiredEstado: (estadoActual) => estadoActual.frasco,
        setEstado: { frasco: false, espada: true },
        siguienteTexto: 3,
      },
      {
        texto: "Change the bottle with liquid for a shield",
        requiredEstado: (estadoActual) => estadoActual.frasco,
        setEstado: { frasco: false, escudo: true },
        siguienteTexto: 3,
      },
      {
        texto: "You ignore the merchant",
        siguienteTexto: 3,
      },
    ],
  },

  {
    id: 3,
    texto:
      "After passing the merchant, you walk to a small town next to a spooky castle",
    opciones: [
      {
        texto: "explore the castle",

        siguienteTexto: 4,
      },
      {
        texto: "Rest in an inn in the town before continuing",
        siguienteTexto: 41,
      },
      {
        texto: "You try to find some stable to sleep in",
        siguienteTexto: 5,
      },
    ],
  },

  {
    id: 4,
    texto:
      "you fall asleep while exploring the castle and are killed by a mercedarian",
    opciones: [
      {
        texto: "Start again",
        siguienteTexto: -1,
      },
    ],
  },

  {
    id: 41,
    texto:
      "After touring the town and the castle, you find a decent inn for your rest, but you don't have money to pay for the room",
    opciones: [
      {
        texto: "You try to enter without being seen",
        siguienteTexto: 411,
      },
      {
        texto: "You decide to steal money from a villager in the area",
        siguienteTexto: 411,
      },
      {
        texto: "You spend the night awake by the guard tower",
        siguienteTexto: 412,
      },
    ],
  },

  {
    id: 411,
    texto:
      "Apesar de tu discreción y sigilo, la guardia local te encuentra haciendo de las tuyas y sos arrojado a la carcel del pueblo",
    opciones: [
      {
        texto: "Empezar de nuevo",
        siguienteTexto: -1,
      },
    ],
  },

  {
    id: 412,
    texto:
      "Pasaste la noche despierto, el sol brillante del amanecer quema tus ojos, te sientes debil, pero tu espiritu de aventura es mas fuerte. Llegó el momento de continuar",
    opciones: [
      {
        texto: "Explorar el castillo",
        siguienteTexto: 4,
      },
    ],
  },

  {
    id: 5,
    texto:
      "Para tu sorpresa, encuentras un establo abandonado y pasas la noche ahí. Te despiertas lleno de energía y listo para continuar tu aventura",
    opciones: [
      {
        texto: "Explorar el castillo",
        siguienteTexto: 6,
      },
    ],
  },
  {
    id: 6,
    texto:
      "Te adentras en los pasillos del enorme castillo, tus pasos retumban por todo el lugar. Luego de unos minutos, escuchas un rugido aterrador proviniente de la oscuridad",
    opciones: [
      {
        texto: "Huyes despavorido",
        siguienteTexto: 7,
      },
      {
        texto:
          "No llegaste tan lejos para asustarte tan facil, vas hacia el rugido",
        siguienteTexto: 8,
      },
      {
        texto:
          "Intentas llevarte todo lo que encuentras evitando el lugar de donde proviene el rugido",
        siguienteTexto: 9,
      },
    ],
  },
  {
    id: 7,
    texto:
      "Sales del castillo, claramente tu espiritu y deseo de grandeza no fue lo suficiente como para enfrentar lo que sea que estaba ahi dentro",
    opciones: [
      {
        texto: "Empezar de nuevo",
        siguienteTexto: -1,
      },
    ],
  },

  {
    id: 8,
    texto:
      "Desde la oscuridad, una enorme bestia con fauces demoníacas se hace presente. Ya no hay forma de escapar, es ahora o nunca",
    opciones: [
      {
        texto: "Desenfundas tu espada y lo atacas",
        requiredEstado: (estadoActual) => estadoActual.espada,
        siguienteTexto: 10,
      },
      {
        texto:
          "'Usas tu escudo para protegerte de los ataques de la horrible bestia",
        requiredEstado: (estadoActual) => estadoActual.shield,
        siguienteTexto: 11,
      },
      {
        texto:
          "Al no tener forma de enfrentarlo, le arrojas lo unico que llevas encima, el frasco",
        requiredEstado: (estadoActual) => estadoActual.frasco,
        siguienteTexto: 12,
      },
      {
        texto:
          "No trajiste nada para defenderte de la bestia, te pones a rezar",
        siguienteTexto: 13,
      },
    ],
  },

  {
    id: 9,
    texto:
      "Usas tu sigilo para recorrer algunas habitaciones sin ser detectado, desgraciadamente, no encuentras nada de valor",
    opciones: [
      {
        texto: "Sales del castillo",
        siguienteTexto: 7,
      },
      {
        texto: "Vuelves al lugar de donde proviene el rugido",
        siguienteTexto: 8,
      },
    ],
  },
  {
    id: 10,
    texto:
      "Realizas un poderoso ataque frontal con tu espada, pero al impactar la piel de la bestia, se parte en dos. Antes de morir bajo sus feroces garras, piensas como fuiste tan idiota de creer que una simple espada podria derrotar a tan temible criatura",
    opciones: [
      {
        texto: "Empezar de nuevo",
        siguienteTexto: -1,
      },
    ],
  },

  {
    id: 11,
    texto:
      "Alzas tu escudo para protegerte de los ataques mortales de la criatura. Logras ver como si se formara una risa burlona en su boca. Sos devorado enteramente, incluyendo el escudo",
    opciones: [
      {
        texto: "Empezar de nuevo",
        siguienteTexto: -1,
      },
    ],
  },
  {
    id: 12,
    texto:
      "Le arrojas el frasco y al entrar en contacto con la bestia, EXPLOTA!. Luego de que una densa nube de polvo se disipe, ves como la bestia fue aniquilida en la explosión",
    opciones: [
      {
        texto: "Jugar de nuevo",
        siguienteTexto: -1,
      },
    ],
  },
  {
    id: 13,
    texto:
      "La bestia te mira confundida, al no entender la situacion, simplemente procede a comerte",
    opciones: [
      {
        texto: "Jugar de nuevo",
        siguienteTexto: -1,
      },
    ],
  },
];
