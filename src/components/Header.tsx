import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { arrowBack, logOut } from "ionicons/icons";
import useHasVoted from "../store/useIsLogged";

interface HeaderProps {
  title: string;
  to: string;
  showBackButton: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, to, showBackButton = true }) => { 
  const history = useHistory();
  const isLogged = useHasVoted((s) => s.isLogged);
  const setLogged = useHasVoted((s) => s.setLogged);

  const goBack = () => {
    history.push(to);
  };

  const handleLogout = () => {
    setLogged(false);
    localStorage.setItem("isLogged", JSON.stringify(false));
    history.push("/");
  };

  return (
    <IonHeader>
      <IonToolbar>
        {showBackButton && (
          <IonButtons slot="start">
            <IonButton onClick={goBack}>
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
        )}
        {!showBackButton ? (
          <h1 className="ion-margin-start">{title}</h1>
        ) : (
          <h1>{title}</h1>
        )}
        {isLogged && (
          <IonButtons slot="end">
            <IonButton onClick={handleLogout}>
              <IonIcon icon={logOut} style={{ fontSize: "24px" }} />
              <IonLabel>Logout</IonLabel>
            </IonButton>
          </IonButtons>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
