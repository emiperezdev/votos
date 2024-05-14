import Partido from "../entities/Partido";
import pan from "../assets/pan.png";
import prd from "../assets/prd.png";
import pri from "../assets/pri.png";
import morena from "../assets/morena.png";
import verde from "../assets/verde.png";


const partidos: Partido[] = [
  {
    id: 1,
    title: 'Partido de la educacion',
    name: 'Jose Cruz Parada',
    propuestas: ['a1a1a1a1', 'a1a1a1a1', 'a1a1a1a1', 'a1a1a1a1'],
    votos: 0,
    imagen: pan
  },
  {
    id: 2,
    title: 'Partido de los animales',
    name: 'Aldo Murillo Perez',
    propuestas: ['b2b2b2b2b2', 'b2b2b2b2b2', 'b2b2b2b2b2', 'b2b2b2b2b2'],
    votos: 0,
    imagen: prd
  },
  {
    id: 3,
    title: 'Partido de los deportes',
    name: 'Emiliano Zapata Zanchez',
    propuestas: ['c3c3c3c3', 'c3c3c3c3', 'c3c3c3c3', 'c3c3c3c3'],
    votos: 0,
    imagen: morena
  },
  {
    id: 4,
    title: 'Partido de la comida',
    name: 'Mauricio Castro Becerra',
    propuestas: ['d4d4d4d4', 'd4d4d4d4', 'd4d4d4', 'd4d4d4d4'],
    votos: 0,
    imagen: pri
  },
  {
    id: 5,
    title: 'Partido del Trabajo',
    name: 'Miguel Marquez Marquez',
    propuestas: ['e5e5e5e5', 'e5e5e5e5', 'e5e5e5e5', 'e5e5e5e5'],
    votos: 0,
    imagen: verde
  },
  
];

export default partidos;