import React from 'react';
import Books1 from '../../components/Books';
import Books2 from '../../components/Books';
import Books3 from '../../components/BooksVerticalList';
import Books4 from '../../components/Books';

import { Tecologias, Romantico, Artes, FiccaoCientifica} from  '../../data/data';

import { Container, Footer, StatusBar } from './styles';

const Categories = () => {
  return (
    <Container>
        <StatusBar backgroundColor='#45D0C1' translucent={true}/>
        <Books3
          data={Artes}/>
        <Footer/>
    </Container>
  );
}

export default Categories;