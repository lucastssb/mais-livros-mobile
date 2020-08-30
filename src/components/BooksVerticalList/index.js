import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  Thumbnail, 
  Book 
} from './styles';

const BooksVerticalList = (props) => {
  const navigation = useNavigation();
  return(
      <Container>
        {props.data.map(item => {
            return(
                <Book activeOpacity={1} key={item.id} onPress={() => navigation.navigate('Info', {
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
                    <Thumbnail source={{uri: item.image}} />
                </Book>
            );
        })}
      </Container>
  );
}

export default BooksVerticalList;