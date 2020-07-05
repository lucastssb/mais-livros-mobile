import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { Container, Category, Book, Thumbnail } from './styles';

const Books = (props) => {
  return(
      <Container>
        <Category>{props.category}</Category>
        <FlatList
            data= {props.data}
            keyExtractor= {item => item.id}
            horizontal
            showsHorizontalScrollIndicator= {false}
            renderItem= {({item}) => (
               <Book activeOpacity={1}>
                <Thumbnail source={require('../../assets/livro.jpg')}/>
               </Book> 
        )}/>
      </Container>
  );
}

export default Books;