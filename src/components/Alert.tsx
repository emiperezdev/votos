import React from 'react';
import { IonAlert } from '@ionic/react';

interface AlertProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ isOpen, message, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Error"
      message={message}
      buttons={['OK']}
    />
  );
};

export default Alert;
