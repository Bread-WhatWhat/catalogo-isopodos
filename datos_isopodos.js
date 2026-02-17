// datos_isopodos.js
const ISOPOD_DB = [
  {
    id: 1,
    name: "Panda King Red",
    scientific: "Cubaris sp.",
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
    description: "Isópodos pequeños y muy activos con rayas amarillas y negras. Se reproducen fácil.",
    difficulty: "Fácil",
    temp_min: 22, temp_max: 26,
    hum_min: 60, hum_max: 75,
    img: "img/amber.jpg"
  },
  {
    id: 4,
    name: "Spiky Isopod",
    scientific: "Cristarmadillidium muricatum",
    description: "Joya española con espinas dorsales. Crecimiento lento y tamaño pequeño.",
    difficulty: "Media-Alta",
    temp_min: 20, temp_max: 25,
    hum_min: 50, hum_max: 60,
    img: "img/spiky.jpg"
  },
  {
    id: 5,
    name: "Zebra",
    scientific: "Armadillidium maculatum",
    description: "Patrón de rayas blancas y negras. Muy resistentes, activos y visibles.",
    difficulty: "Fácil",
    temp_min: 18, temp_max: 26,
    hum_min: 50, hum_max: 60,
    img: "img/zebra.jpg"
  },
  {
    id: 6,
    name: "Dairy Cow",
    scientific: "Porcellio laevis",
    description: "Grandes, rápidos y voraces. Equipo de limpieza con reproducción explosiva.",
    difficulty: "Muy Fácil",
    temp_min: 18, temp_max: 28,
    hum_min: 40, hum_max: 60,
    img: "img/dairy.jpg"
  },
  {
    id: 7,
    name: "Magic Potion",
    scientific: "Armadillidium vulgare",
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
    description: "Tres filas de puntos y falda roja. Prefieren ambientes más secos.",
    difficulty: "Media",
    temp_min: 21, temp_max: 27,
    hum_min: 40, hum_max: 50,
    img: "img/clown.jpg"
  },
  {
    id: 9,
    name: "Little Sea",
    scientific: "Cubaris murina",
    description: "Cubaris resistente y adaptable. Tono azul grisáceo, se hacen bola fácilmente.",
    difficulty: "Fácil",
    temp_min: 22, temp_max: 28,
    hum_min: 60, hum_max: 80,
    img: "img/little_sea.jpg"
  }
];

// Función para obtener los datos (puedes expandirla luego)
function getIsopodData() {
  return ISOPOD_DB;
}