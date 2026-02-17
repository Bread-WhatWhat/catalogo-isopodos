const ISOPOD_DB = [
  // =========================================
  // GRUPO 1: ISÓPODOS
  // =========================================
  {
    id: 1, name: "Panda King Red", scientific: "Cubaris sp.", category: "Isópodos",
    description: "Variante de coloración rojiza/arcilla. Tímidos y apreciados por su contraste.",
    difficulty: "Media", temp_min: 24, temp_max: 28, hum_min: 70, hum_max: 80,
    price: 30, img: "img/panda_red.jpg"
  },
  {
    id: 2, name: "Panda King Black", scientific: "Cubaris sp.", category: "Isópodos",
    description: "El clásico isópodo asiático con patrón de oso panda. Requieren buena ventilación.",
    difficulty: "Media", temp_min: 24, temp_max: 28, hum_min: 70, hum_max: 80,
    price: 18, img: "img/panda_black.jpg"
  },
  {
    id: 7, name: "Magic Potion", scientific: "Armadillidium vulgare", category: "Isópodos",
    description: "Morfología japonesa, cuerpo translúcido y manchas amarillas/negras.",
    difficulty: "Fácil", temp_min: 18, temp_max: 26, hum_min: 50, hum_max: 60,
    price: 15, img: "img/magic.jpg"
  },
  {
    id: 10, name: "Glacier", scientific: "Cubaris murina", category: "Isópodos",
    description: "Morfo completamente blanco (albino) de la Little Sea. Prolíficos y resistentes.",
    difficulty: "Fácil", temp_min: 22, temp_max: 28, hum_min: 70, hum_max: 90,
    price: 20, img: "img/glacier.jpg"
  },
  {
    id: 9, name: "Little Sea", scientific: "Cubaris murina", category: "Isópodos",
    description: "Cubaris resistente y adaptable. Tono azul grisáceo, se hacen bola fácilmente.",
    difficulty: "Fácil", temp_min: 22, temp_max: 28, hum_min: 60, hum_max: 80,
    price: 14, img: "img/little_sea.jpg"
  },
  {
    id: 6, name: "Dairy Cow", scientific: "Porcellio laevis", category: "Isópodos",
    description: "Grandes, rápidos y voraces. Equipo de limpieza con reproducción explosiva.",
    difficulty: "Muy Fácil", temp_min: 18, temp_max: 28, hum_min: 40, hum_max: 60,
    price: 13, img: "img/dairy.jpg"
  },
  // --- Otros Isópodos (Precios por consultar o rellenar) ---
  {
    id: 3, name: "Amber Bee", scientific: "Cubaris sp.", category: "Isópodos",
    description: "Isópodos pequeños y muy activos con rayas amarillas y negras.",
    difficulty: "Fácil", temp_min: 22, temp_max: 26, hum_min: 60, hum_max: 75,
    price: "Consultar", img: "img/amber.jpg"
  },
  {
    id: 12, name: "Powder Orange", scientific: "Porcellionides pruinosus", category: "Isópodos",
    description: "Veloces, voraces y de textura 'empolvada'. Ideales como equipo de limpieza.",
    difficulty: "Muy Fácil", temp_min: 20, temp_max: 28, hum_min: 50, hum_max: 75,
    price: "Consultar", img: "img/powder_orange.jpg"
  },
  {
    id: 4, name: "Spiky Isopod", scientific: "Cristarmadillidium muricatum", category: "Isópodos",
    description: "Joya española con espinas dorsales. Crecimiento lento.",
    difficulty: "Media-Alta", temp_min: 20, temp_max: 25, hum_min: 50, hum_max: 60,
    price: "Consultar", img: "img/spiky.jpg"
  },

  // =========================================
  // GRUPO 2: COLÉMBOLOS
  // =========================================
  {
    id: 101, name: "Tropical White", scientific: "Collembola sp.", category: "Colémbolos",
    description: "Cultivo de colémbolos blancos. Equipo de limpieza esencial. (Pocas unidades)",
    difficulty: "Fácil", temp_min: 20, temp_max: 28, hum_min: 80, hum_max: 99,
    price: 20, img: "img/col_white.jpg" // ⚠️ Asegura tener esta imagen o cambiar ruta
  },
  {
    id: 102, name: "Orange Springtail", scientific: "Yuukianura aphoruroides", category: "Colémbolos",
    description: "Colémbolos naranjas de mayor tamaño. Lentos y muy vistosos. (15u)",
    difficulty: "Media", temp_min: 22, temp_max: 26, hum_min: 70, hum_max: 90,
    price: 100, img: "img/col_orange.jpg" // ⚠️ Asegura tener esta imagen o cambiar ruta
  },
  {
    id: 103, name: "Yellow Springtail", scientific: "Collembola sp.", category: "Colémbolos",
    description: "Mini colonia de colémbolos amarillos. Raros y llamativos.",
    difficulty: "Media", temp_min: 22, temp_max: 26, hum_min: 70, hum_max: 90,
    price: 70, img: "img/col_yellow.jpg" // ⚠️ Asegura tener esta imagen o cambiar ruta
  }
];

function getIsopodData() { return ISOPOD_DB; }
