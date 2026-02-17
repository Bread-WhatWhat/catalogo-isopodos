// datos_isopodos.js
// Base de datos clasificada: Cubaris > Armadillidium > Porcellio > Otras

const ISOPOD_DB = [
  // --- GRUPO 1: CUBARIS (6 Especies -> Página 1 Completa) ---
  {
    id: 1,
    name: "Panda King Red",
    scientific: "Cubaris sp.",
    group: "Cubaris",
    description: "Variante de coloración rojiza/arcilla. Tímidos y apreciados por su contraste.",
    difficulty: "Media",
    temp_min: 24, temp_max: 28,
    hum_min: 70, hum_max: 80,
    img: "img/panda_red.jpg"
  },
  {
    id: 2,
    name: "Panda King Black",
    scientific: "Cubaris sp.",
    group: "Cubaris",
    description: "El clásico isópodo asiático con patrón de oso panda. Requieren buena ventilación.",
    difficulty: "Media",
    temp_min: 24, temp_max: 28,
    hum_min: 70, hum_max: 80,
    img: "img/panda_black.jpg"
  },
  {
    id: 3,
    name: "Amber Bee",
    scientific: "Cubaris sp.",
    group: "Cubaris",
    description: "Isópodos pequeños y muy activos con rayas amarillas y negras. Se reproducen fácil.",
    difficulty: "Fácil",
    temp_min: 22, temp_max: 26,
    hum_min: 60, hum_max: 75,
    img: "img/amber.jpg"
  },
  {
    id: 9,
    name: "Little Sea",
    scientific: "Cubaris murina",
    group: "Cubaris",
    description: "Cubaris resistente y adaptable. Tono azul grisáceo, se hacen bola fácilmente.",
    difficulty: "Fácil",
    temp_min: 22, temp_max: 28,
    hum_min: 60, hum_max: 80,
    img: "img/little_sea.jpg"
  },
  {
    id: 10,
    name: "White Shark",
    scientific: "Cubaris sp.",
    group: "Cubaris",
    description: "Patrón tricolor exclusivo: rostro anaranjado con cuerpo blanco y negro. Especie 'dwarf' activa.",
    difficulty: "Media",
    temp_min: 24, temp_max: 28,
    hum_min: 70, hum_max: 85,
    img: "img/white_shark.jpg"
  },
  {
    id: 11,
    name: "Glacier",
    scientific: "Cubaris murina",
    group: "Cubaris",
    description: "Morfo completamente blanco (albino) de la Little Sea. Prolíficos y resistentes.",
    difficulty: "Fácil",
    temp_min: 22, temp_max: 28,
    hum_min: 70, hum_max: 90,
    img: "img/glacier.jpg"
  },

  // --- GRUPO 2: ARMADILLIDIUM (3 Especies) ---
  {
    id: 5,
    name: "Zebra",
    scientific: "Armadillidium maculatum",
    group: "Armadillidium",
    description: "Patrón de rayas blancas y negras. Muy resistentes, activos y visibles.",
    difficulty: "Fácil",
    temp_min: 18, temp_max: 26,
    hum_min: 50, hum_max: 60,
    img: "img/zebra.jpg"
  },
  {
    id: 7,
    name: "Magic Potion",
    scientific: "Armadillidium vulgare",
    group: "Armadillidium",
    description: "Morfología japonesa, cuerpo translúcido y manchas amarillas/negras.",
    difficulty: "Fácil",
    temp_min: 18, temp_max: 26,
    hum_min: 50, hum_max: 60,
    img: "img/magic.jpg"
  },
  {
    id: 8,
    name: "Montenegro Clown",
    scientific: "Armadillidium klugii",
    group: "Armadillidium",
    description: "Tres filas de puntos y falda roja. Prefieren ambientes más secos.",
    difficulty: "Media",
    temp_min: 21, temp_max: 27,
    hum_min: 40, hum_max: 50,
    img: "img/clown.jpg"
  },

  // --- GRUPO 3: PORCELLIO (2 Especies) ---
  {
    id: 6,
    name: "Dairy Cow",
    scientific: "Porcellio laevis",
    group: "Porcellio",
    description: "Grandes, rápidos y voraces. Equipo de limpieza con reproducción explosiva.",
    difficulty: "Muy Fácil",
    temp_min: 18, temp_max: 28,
    hum_min: 40, hum_max: 60,
    img: "img/dairy.jpg"
  },
  {
    id: 12,
    name: "Powder Orange",
    scientific: "Porcellionides pruinosus",
    group: "Porcellio",
    description: "Veloces, voraces y de textura 'empolvada'. Ideales como equipo de limpieza.",
    difficulty: "Muy Fácil",
    temp_min: 20, temp_max: 28,
    hum_min: 50, hum_max: 75,
    img: "img/powder_orange.jpg"
  },

  // --- GRUPO 4: OTRAS ESPECIES (1 Especie) ---
  {
    id: 4,
    name: "Spiky Isopod",
    scientific: "Cristarmadillidium muricatum",
    group: "Otras",
    description: "Joya española con espinas dorsales. Crecimiento lento y tamaño pequeño.",
    difficulty: "Media-Alta",
    temp_min: 20, temp_max: 25,
    hum_min: 50, hum_max: 60,
    img: "img/spiky.jpg"
  }
];

function getIsopodData() {
  return ISOPOD_DB;
}
