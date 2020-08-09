import React from 'react';
import styles from './styles.module.scss';

function Title({ title }) {
  return <h1 className={styles.title_style}>{title}</h1>;
}

export default Title;