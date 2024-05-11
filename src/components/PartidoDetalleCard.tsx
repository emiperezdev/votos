import React from "react";
import { IonCard, IonGrid } from "@ionic/react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Partido from "../entities/Partido";
import partidos from "../data/partidos";
import useVotos from "../store/useVotos";

interface Props {
  partidoId: number;
}

export const PartidoDetalleCard = ({ partidoId }: Props) => {
  const partido: Partido = partidos[partidoId - 1];
  const { votosPartidos } = useVotos(); // Obtenemos el estado de los votos del store de Zustand
  const votos = votosPartidos[`partido${partidoId}`]; // Obtenemos el número de votos del partido actual

  return (
    <IonCard>
      <IonGrid>
        <Title text={partido.title} />
        <Subtitle text={partido.name} />
        <Subtitle text={"Votos: " + votos} /> {/* Mostramos el número de votos del partido actual */}
        <ul>
          {partido.propuestas.map((item, index) => (
            <li key={index}>
              <h2>{item}</h2>
            </li>
          ))}
        </ul>
      </IonGrid>
    </IonCard>
  );
};
