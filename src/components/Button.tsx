import React from 'react';
import { IonButton } from '@ionic/react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean; 
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => (
  <IonButton onClick={onClick} disabled={disabled}>{text}</IonButton>
);

export default Button;