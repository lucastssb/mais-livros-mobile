import React from 'react';

import { Container, StatusBar, SearchInput, SearchButton, SearchBar} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeHeader = () => {
  return(
   <Container>
    <StatusBar translucent={true} backgroundColor='transparent' barStyle='light-content' />
    <SearchBar>
      <SearchInput placeholder='Buscar' />
      <SearchButton><Icon name='search1' size={30} color='#aaa' /></SearchButton>
    </SearchBar>
    </Container>
  );
}

export default HomeHeader;