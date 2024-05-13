import React from "react";
import { IonContent } from "@ionic/react";
import Header from "../components/Header";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import LinkButton from "../components/LinkButton";
import useHasVoted from "../store/useIsLogged";

const Home: React.FC = () => {
  const isLogged = useHasVoted((s) => s.isLogged);
  return (
    <>
      <Header to="/" title="Home" showBackButton={false} />
      <IonContent className="ion-justify-content-center ion-align-items-center">
        <h1 className="ion-text-center">VOTOS APP</h1>
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="6" size-lg="4">
              {!isLogged && <LinkButton to="login" buttonText="LOGIN" />}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6" size-lg="4">
              {!isLogged && (
                <LinkButton to="addUser" buttonText="CREAR CUENTA" />
              )}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6" size-lg="4">
              {isLogged && <LinkButton to="cards" buttonText="PARTIDOS" />}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6" size-lg="4">
              {isLogged && <LinkButton to="results" buttonText="VOTOS" />}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default Home;
