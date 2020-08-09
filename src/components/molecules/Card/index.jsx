import React, { useEffect } from 'react';
import getApi from '../../../requests/getApi';
import style from './styles.module.scss';
import { Title, Button, Image } from '../../atoms';

function PokeCard({ pokemon }) {
  const { url } = pokemon;
  const { data, isError, isLoading } = getApi(url);

  const loadData = () => {
    const title = data.name ? data.name : null;
    const img = data.sprites.front_default ? data.sprites.front_default : null;

    return <div className={style.card_style}>
      {title && <Title title={title} />}
      {img && <Image src={img} alt={title} />}
      <Button content='Mais detalhes' />
    </div>; 
  }

  return isError || isLoading ? null : loadData();
  
}

export default PokeCard;