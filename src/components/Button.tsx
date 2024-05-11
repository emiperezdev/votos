import React from 'react';
import { IonButton } from '@ionic/react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <IonButton onClick={onClick}>{text}</IonButton>
);

export default Button;