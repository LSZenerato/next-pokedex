import React, { useContext } from 'react';
import style from './styles.module.scss';
import Context from '../../../context/context';

function PokeButton({ callback, content }) {
  return <button className={style.button_div} onClick={() => callback()} > {content} </button>;
}

export default PokeButton;