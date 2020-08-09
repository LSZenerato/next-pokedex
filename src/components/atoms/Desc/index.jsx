import React from 'react';
import styles from './styles.module.scss';

function Desc({ description }) {
  return <p className={styles.desc_style}> {description} </p>;
}

export default Desc;