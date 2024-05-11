import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <IonCard>
    <IonCardContent>
      {children}
    </IonCardContent>
  </IonCard>
);

export default Card;
