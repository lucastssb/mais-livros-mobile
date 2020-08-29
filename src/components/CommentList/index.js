import React from 'react';

import {
     Container,
     CommentBox,
     UserPic,
     UserName,
     CommentData,
     Comment
} from './styles';
import { FlatList } from 'react-native-gesture-handler';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Super recomendo!',
      userName: 'Lucas'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Gostei muito, vou ler novamente!',
      userName: 'Pedro'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Exelente livro. Recomendo!',
      userName: 'Thiago'
    },
  ];

const CommentList = () => {
  return(
      <Container>
        <FlatList
            data= {DATA}
            keyExtractor= {item => item.id}
            horizontal
            showsHorizontalScrollIndicator= {false}
            renderItem= {({item}) => (
                <CommentBox>
                    <UserPic source={require('../../assets/IMG_20191030_101256.jpg')} ></UserPic>
                    <CommentData>
                        <UserName>{item.userName}</UserName>
                        <Comment>{item.title}</Comment>
                    </CommentData>
                </CommentBox>
        )}/>
      </Container>
  );
}

export default CommentList;