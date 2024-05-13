import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import { PartidoDetalleCard } from '../components/PartidoDetalleCard'
import LinkButton from '../components/LinkButton';

interface RouteParams {
  id: string; 
}

export const CardDetailPage = () => {
  const { id } = useParams<RouteParams>();
  const partidoId = parseInt(id);

  return (
    <div>
      <Header to='/cards' title='Propuestas' showBackButton={true}/>
      <PartidoDetalleCard partidoId={partidoId} />
      <LinkButton to={'/results'} buttonText={'VER GRAFICA'}  />
    </div>
  )
}
