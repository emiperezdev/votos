import React from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import ImageComponent from "./ImageComponent";
import Subtitle from "./Subtitle";
import Title from "./Title";
import userImage from "../assets/user.jpg";
import Partido from "../entities/Partido";
import { IonCard, IonGrid, IonRow, IonCol } from "@ionic/react";
import useVotos from "../store/useVotos";

interface Props {
  partido: Partido;
}

const PartidoCard: React.FC<Props> = ({ partido }) => {
  const history = useHistory();
  const { id, title, name } = partido;
  const { votosPartidos, setVotosPartido } = useVotos(); // Obtenemos el estado de los votos y la función para actualizarlos
  const votos = votosPartidos[`partido${id}`]; // Obtenemos el número de votos del partido actual

  const handleVerClick = () => {
    history.push(`/cards/${id}`);
  };

  const handleVotarClick = () => {
    setVotosPartido(`partido${id}`, votos + 1); // Incrementamos los votos del partido correspondiente
  };

  return (
    <IonCard>
      <IonGrid>
        <IonRow>
          <IonCol size="12">
            <Title text={title} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="4">
            <ImageComponent src={userImage} />
          </IonCol>
          <IonCol size="8">
            <Subtitle text={name} />{" "}
            <IonRow>
              <IonCol size="6" className="ion-text-center">
                <Button text="Ver" onClick={handleVerClick} />{" "}
              </IonCol>
              <IonCol size="6" className="ion-text-center">
                <Button text="Votar" onClick={handleVotarClick} />{" "}
                {/* Añadimos el evento onClick para el botón de votar */}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12" className="ion-text-center">
                <p>Votos: {votos}</p> {/* Mostramos el número de votos del partido actual */}
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default PartidoCard;
