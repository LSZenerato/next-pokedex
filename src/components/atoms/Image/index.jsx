import React from 'react';
import styles from './styles.module.scss';

function Image({ src, alt }) {
  return <img src={src} alt={alt} className={styles.img_style} />;
}

export default Image;