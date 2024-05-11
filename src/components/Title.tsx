import React from 'react';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => (
  <h1 className='ion-text-center'>{text}</h1>
);

export default Title;
