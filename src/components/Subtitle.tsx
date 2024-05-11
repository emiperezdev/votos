import React from 'react';
import { IonTitle } from '@ionic/react';

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => (
  <h4 className='ion-text-center'>{text}</h4>
);

export default Subtitle;
