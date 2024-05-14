import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import ImageComponent from "./ImageComponent";
import Subtitle from "./Subtitle";
import Title from "./Title";
import userImage from "../assets/user.jpg";
import Partido from "../entities/Partido";
import { IonCard, IonGrid, IonRow, IonCol } from "@ionic/react";
import useVotos from "../store/useVotos";
import Alert from "./Alert";

interface Props {
  partido: Partido;
}

const PartidoCard: React.FC<Props> = ({ partido }) => {
  const history = useHistory();
  const { id, title, name } = partido;
  const { votosPartidos, setVotosPartido } = useVotos();
  const votos = votosPartidos[`partido${id}`];
  const [alertOpen, setAlertOpen] = useState(false); 

  const handleVerClick = () => {
    history.push(`/cards/${id}`);
  };

  const handleVotarClick = () => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    let votedUsers = JSON.parse(localStorage.getItem("votedUsers") || "[]");

    if (currentUser === null) currentUser = { email: "", hasVoted: false };

    if (currentUser && !currentUser.hasVoted && !votedUsers.includes(currentUser.email)) {
      setVotosPartido(`partido${id}`, votos + 1);

      currentUser.hasVoted = true;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      votedUsers.push(currentUser.email);
      localStorage.setItem("votedUsers", JSON.stringify(votedUsers));
    } else {
      setAlertOpen(true);
    }
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
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
            <ImageComponent src={partido.imagen} />
          </IonCol>
          <IonCol size="8">
            <Subtitle text={name} />{" "}
            <IonRow>
              <IonCol size="6" className="ion-text-center">
                <Button text="Detalles" onClick={handleVerClick} />{" "}
              </IonCol>
              <IonCol size="6" className="ion-text-center">
                <Button text="Votar" onClick={handleVotarClick} />{" "}
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12" className="ion-text-center">
                <p>Votos: {votos}</p>
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
      <Alert isOpen={alertOpen} message="¡Ya has votado!" onClose={handleCloseAlert} />
    </IonCard>
  );
};

export default PartidoCard;
