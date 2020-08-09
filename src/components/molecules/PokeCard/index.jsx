import React, { useContext } from 'react';
import style from './styles.module.scss';
import PokeButton from '../../atoms/PokeButton';
import PokeDesc from '../../atoms/PokeDesc';

function PokeCard() {
  const pokemon = useContext(PokedexContext);

  return <div className={style.card_style}>
    <PokeDesc />
    <PokeButton />
  </div>;
}

export default PokeCard;