import React, { useEffect, useState } from 'react';

import { Container, Footer } from './styles';
import Books from '../../components/Books';
import Books1 from '../../components/Books';
import Books2 from '../../components/Books';
import Books3 from '../../components/Books';
import Books4 from '../../components/Books';
import api from '../../services/api';
import {LivrosInfantis, Tecologias, Romantico, Artes, FiccaoCientifica} from  '../../data/data';


const Explore = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
      async function loadBBooks() {
          const response = await api.get('./books')
          setBooks(response.data);
        }

      loadBBooks();       
  },[])
  return(
    <Container>
      <Books
        category='Recomendados'
        data={LivrosInfantis}/>
        <Books1
        category='Tecnologia'
        data={Tecologias}/>
        <Books2
        category='Ficção científica'
        data={FiccaoCientifica}/>
        <Books3
        category='Artes'
        data={Artes}/>
        <Books4
        category='Romance'
        data={Romantico}/>
        <Footer/>
    </Container>
      
  );
}

export default Explore;