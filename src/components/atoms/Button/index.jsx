import React, { useContext } from 'react';
import style from './styles.module.scss';
import Context from '../../../context/context';

function PokeButton({ children, className }) {
  const { callback2 } = useContext(Context);

  return (
    <button 
      className={className ? className : `${style.button_div} ${style.red}`} 
      onClick={() => callback2('Diguxo')} > 
      {children}
    </button>
    );
}

export default PokeButton;