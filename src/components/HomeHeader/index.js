import React from 'react';

import { Container, StatusBar, SearchInput} from './styles';

const HomeHeader = () => {
  return(
   <Container>
    <StatusBar translucent={true} backgroundColor='transparent' barStyle='light-content' />
    <SearchInput placeholder='Buscar' />
   </Container>
  );
}

export default HomeHeader;