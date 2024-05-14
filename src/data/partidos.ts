import Partido from "../entities/Partido";
import pan from "../assets/pan.png";
import prd from "../assets/prd.png";
import pri from "../assets/pri.png";
import morena from "../assets/morena.png";
import verde from "../assets/verde.png";
import userGenerico from "../assets/user.jpg";

const partidos: Partido[] = [
  {
    id: 1,
    title: "Partido progreso y justicia(PPJ)",
    name: "Laura Fernandez",
    propuestas: [
      "Reforma educativa integral: Implementar un sistema educativo que fomente la creatividad, el pensamiento crítico y la educación tecnológica desde temprana edad.",
      "Transparencia Gubernamental: Crear una plataforma digital que permita a los ciudadanos acceder a la información gubernamental en tiempo real, incluyendo presupuestos y gastos públicos.",
      "Desarrollo Sostenible: Invertir en energías renovables y promover prácticas sostenibles en industrias clave para reducir la huella de carbono del país.",
    ],
    votos: 0,
    imagen: userGenerico,
  },
  {
    id: 2,
    title: "Partido Unidad Nacional(PUN)",
    name: "Carlos Mendez",
    propuestas: [
      "Fortalecimiento de la Seguridad: Aumentar el presupuesto para las fuerzas de seguridad, con énfasis en la capacitación y el equipamiento moderno para combatir el crimen organizado.",
      "Infraestructura Moderna: Lanzar un programa nacional para la construcción y modernización de carreteras, puentes y redes de transporte público.",
      "Apoyo a la Pequeña Empresa: Ofrecer incentivos fiscales y acceso a financiamiento a bajo interés para emprendedores y pequeñas empresas, fomentando la innovación y la creación de empleo.",
    ],
    votos: 0,
    imagen: userGenerico,
  },
  {
    id: 3,
    title: "Partido Verde Futuro(PVF)",
    name: "Ana Lopez",
    propuestas: [
      "Protección del Medio Ambiente: Implementar políticas estrictas para la conservación de bosques, ríos y áreas naturales protegidas, junto con un programa de reforestación masiva.",
      "Salud y Bienestar: Aumentar la inversión en el sistema de salud pública para garantizar el acceso universal a servicios médicos de calidad, incluyendo la salud mental.",
      "Economía Circular: Promover un modelo económico que reduzca el desperdicio a través del reciclaje, la reutilización y la innovación en materiales sostenibles.",
    ],
    votos: 0,
    imagen: userGenerico,
  },
];

export default partidos;
