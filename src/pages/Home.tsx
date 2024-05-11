import React from "react";
import { IonContent } from "@ionic/react";
import Header from "../components/Header";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import LinkButton from "../components/LinkButton";

const Home: React.FC = () => {
  return (
    <>
      <Header to="/" title="Home" />
      <IonContent
        className="ion-justify-content-center ion-align-items-center"
      >
        <h1 className="ion-text-center">VOTOS APP</h1>
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="6" size-lg="4">
              <LinkButton to="cards" buttonText="CARDS" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6" size-lg="4">
              <LinkButton to="login" buttonText="LOGIN" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-md="6" size-lg="4">
              <LinkButton to="results" buttonText="RESULTS" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default Home;
