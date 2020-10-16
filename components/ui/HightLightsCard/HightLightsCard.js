import React from 'react';
import ProgressBar from '../progressBar/ProgressBar';
import { HightLightCardContainer } from './Styles';

const HightLigthsCard = ({hightLight}) => {
  return (
    <HightLightCardContainer>
      <h2 className="card-title">{hightLight.title}</h2>
      <p className="card-information">{hightLight.data.toFixed()}<span>{hightLight.unit}</span></p>
      {hightLight.showWind && <p className="card-footer">WSW</p>}
      {hightLight.showBar && <ProgressBar percentage={hightLight.data}/>}
    </HightLightCardContainer>
  );
}

export default HightLigthsCard;