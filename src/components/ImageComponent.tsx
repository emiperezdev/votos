import React from 'react';
import { IonImg } from '@ionic/react';

interface ImageProps {
  src: string;
  alt?: string;
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt }) => {
  return <IonImg src={src} alt={alt} />;
};

export default ImageComponent;
