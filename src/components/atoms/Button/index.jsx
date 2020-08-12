import React, { useContext } from 'react';
import style from './styles.module.scss';
import Context from '../../../utils/context';

function PokeButton({ children, className }) {
  const { callback } = useContext(Context);

  return (
    <button 
      className={className ? className : `${style.button_div} ${style.red}`} 
      onClick={() => callback('Diguxo')} > 
      {children}
    </button>
    );
}

export default PokeButton;