import React from 'react';
import styles from './styles.module.scss'

function Header() {
  return <div className={styles.footer_div}>
    <div className={styles.footer_top_div}>
      Site desenvolvido por Lucas S. Zenerato | Next js
    </div>
    <div className={styles.footer_bottom_div} />
  </div>
}

export default Header;