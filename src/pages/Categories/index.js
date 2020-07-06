import React from 'react';
import Books1 from '../../components/Books';
import Books2 from '../../components/Books';
import Books3 from '../../components/Books';
import Books4 from '../../components/Books';

import { Tecologias, Romantico, Artes, FiccaoCientifica} from  '../../data/data';

import { Container, Footer, StatusBar } from './styles';

const Categories = () => {
  return (
    <Container>
    <StatusBar translucent={true} backgroundColor='transparent' barStyle='dark-content' />
        <Books3
        category='Artes'
        data={Artes}/>
        <Books2
        category='Ficção científica'
        data={FiccaoCientifica}/>
        <Books4
        category='Romance'
        data={Romantico}/>
        <Books1
        category='Tecnologia'
        data={Tecologias}/>
        <Footer/>
    </Container>
  );
}

export default Categories;