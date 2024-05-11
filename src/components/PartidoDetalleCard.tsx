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
  const { votosPartidos } = useVotos(); 
  const votos = votosPartidos[`partido${partidoId}`];

  return (
    <IonCard>
      <IonGrid>
        <Title text={partido.title} />
        <Subtitle text={partido.name} />
        <Subtitle text={"Votos: " + votos} /> 
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
