import React from "react";
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon } from "@ionic/react";
import { useHistory } from "react-router-dom";
import { arrowBack } from "ionicons/icons";


const Header: React.FC<{ title: string, to: string }> = ({ title, to }) => {
  const history = useHistory();

  const goBack = () => {
    history.push(to);
  };

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton onClick={goBack}>
            <IonIcon icon={arrowBack} />
          </IonButton>
        </IonButtons>
        <h1>{title}</h1>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
