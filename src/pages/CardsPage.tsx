import React, { useState } from "react";
import Header from "../components/Header";
import PartidoCard from "../components/PartidoCard";
import partidos from "../data/partidos";
import { IonContent } from "@ionic/react";

const CardsPage = () => {
  const handleVotar = (id: number) => {
    const partidoIndex = partidos.findIndex((partido) => partido.id === id);
    if (partidoIndex !== -1) {
      const partidoEncontrado = partidos[partidoIndex]; 
      partidoEncontrado.votos = partidoEncontrado.votos + 1;
      console.log(partidoEncontrado);
    }
  };

  return (
    <IonContent>
      <Header to="/" title="Partidos" />
      {partidos.map((partido) => (
        <PartidoCard key={partido.id} partido={partido} onVotar={handleVotar} />
      ))}
    </IonContent>
  );
};

export default CardsPage;
