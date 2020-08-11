import React from 'react';
import styles from './styles.module.scss';
import { Title, Image, Button } from '../../atoms';

function SearchBar() {
  return <div className={styles.searchBar_div}>
    <div className={styles.searchBar_top_div} />
    <div className={styles.searchBar_bottom_div}>
      <Image src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9" alt="" />
      <Title> Pokedex </Title>
      <Button className={styles.searchBar_btn}> Buscar </Button>
    </div>
  </div>;
}

export default SearchBar;