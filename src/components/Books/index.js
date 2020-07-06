import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from  '@react-navigation/native';

import { Container, Category, Book, Thumbnail } from './styles';

const Books = (props) => {
  const navigation = useNavigation();
  return(
      <Container>
        {props.category ? <Category>{props.category}</Category> : null}
        <FlatList
            data= {props.data}
            keyExtractor= {item => item.id}
            horizontal
            showsHorizontalScrollIndicator= {false}
            renderItem= {({item}) => (
               <Book activeOpacity={1} onPress={() => navigation.navigate('Info', {
                 title: item.title,
                 description: item.description,
                 thumbnail: item.image,
                 author: item.autor || null,
                 publishingCompany: item.editora || null,
                 edition: item.edicao || null,
                 publicationDate: item.ano_publicacao|| null,
                 rating: item.rating || null,
                 videoId: item.video_link || null,
               })}>
                <Thumbnail source={{uri : item.image}}/>
               </Book> 
        )}/>
      </Container>
  );
}

export default Books;