import React from 'react';
import styles from './styles.module.scss';
import { Title, Image, Button } from '../../atoms';

function SearchBar() {
  return <div className={styles.searchBar_div}>
    <div className={styles.searchBar_top_div} />
    <div className={styles.searchBar_bottom_div}>
      <Image src="" alt="" />
      <Title> Pokedex </Title>
      <Button className={styles.searchBar_btn} > Buscar diguxo </Button>
    </div>
  </div>;
}

export default SearchBar;