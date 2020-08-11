import React from 'react';
import styles from './styles.module.scss';

function Title({ children, className }) {
  return <h1 className={className ? className : styles.title_style}>{children}</h1>;
}

export default Title;