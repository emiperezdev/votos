import Header from "../components/Header";
import PartidoCard from "../components/PartidoCard";
import partidos from "../data/partidos";
import { IonContent } from "@ionic/react";

const CardsPage = () => {

  return (
    <IonContent>
      <Header to="/" title="Partidos" />
      {partidos.map((partido) => (
        <PartidoCard key={partido.id} partido={partido} />
      ))}
    </IonContent>
  );
};

export default CardsPage;
