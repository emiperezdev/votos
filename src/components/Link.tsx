import React from 'react';
import { IonRouterLink } from '@ionic/react';

interface LinkProps {
  to: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ to, text }) => (
  <IonRouterLink routerLink={to}>{text}</IonRouterLink>
);

export default Link;