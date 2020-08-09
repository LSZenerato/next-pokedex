import React, { useEffect } from 'react';
import getApi from '../../../requests/getApi';
import style from './styles.module.scss';
import { Title, Button, Image } from '../../atoms';

function PokeCard({ pokemon }) {
  const { url } = pokemon;
  const { data, isError, isLoading } = getApi(url);

  const loadData = () => {
    const title = data.name ? data.name : '';
    const img = data.sprites.front_default ? data.sprites.front_default : '';

    return <div className={style.card_style}>
      <Title title={title} />
      <Image src={img} alt={title} />
      <Button content='Mais detalhes' />
    </div>; 
  }

  return isError || isLoading ? null : loadData();
  
}

export default PokeCard;