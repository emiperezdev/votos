import React from "react";
import { IonButton } from "@ionic/react";

interface LinkButtonProps {
  to: string;
  buttonText: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, buttonText }) => {
  return (
    <IonButton expand="full" href={to} style={{ margin: "30px 10px" }}>
      {buttonText}
    </IonButton>
  );
};

export default LinkButton;
