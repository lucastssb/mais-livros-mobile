import React, {useState} from 'react';
import { Dimensions } from 'react-native';
import YouTube from 'react-native-youtube';

import CommentList from '../../components/CommentList'; 

import Icon from  'react-native-vector-icons/AntDesign';
import Icon2 from  'react-native-vector-icons/Entypo';

import {
   Container,
   BookDetails,
   BookDescription,
   Video,
   Comments,
   PressToRead,
   Cover,
   Details,
   IsAvailableOffline,
   IsAvailable,
   Description,
   CommentsBox,
   CommentsTitle,
   TextPress,
   TextVideo,
   BookTitleAndShare,
   BookTitle,
   Author,
   PublishingCompany,
   Edition,
   PublicationDate,
   Rating,
   TextRating,
   StatusBar,
   BackButton

} from './styles';

const BookInfo = ({route, navigation }) => {
  const {
    title,
    description,
    thumbnail,
    author,
    publishingCompany,
    edition,
    publicationDate,
    rating,
    videoId
  } = route.params;

  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState(null);
  const [quality, setQuality] = useState(null);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [playerWidth, setPlayerWidth] = useState(Dimensions.get('window').width);

  return(
    <Container>
    <BackButton><Icon name='arrowleft' size={30} color='white' onPress={() => navigation.goBack()}/><Icon name='sharealt' size={30} color='purple'/></BackButton>
    <StatusBar translucent={true} backgroundColor='transparent' barStyle='light-content' />
      <BookDetails>
        <Cover source={{uri: thumbnail }}><Icon style={{marginLeft: 5, marginTop: 5}} name='heart' size={30} color='red' /></Cover>
        <Details>
          <BookTitleAndShare>
            <BookTitle>{title}</BookTitle>
            
          </BookTitleAndShare>
          <Author>Autor: {author} </Author>
          <PublishingCompany>Editora: {publishingCompany} </PublishingCompany>
          <Edition>Edição: {edition} </Edition>
          <PublicationDate>Publicação: {publicationDate} </PublicationDate>
          <Rating>
            <TextRating>Avaliação: {rating}</TextRating>
          </Rating>
        </Details>
      </BookDetails>
      <IsAvailableOffline>
        <IsAvailable>Disponível offline:</IsAvailable>
        <Icon2 name='switch' size={35} color='black' />
      </IsAvailableOffline>
      <BookDescription>
        <Description>{description}</Description>
      </BookDescription>
      <Video>
        <TextVideo>Confira uma resenha sobre o livro:</TextVideo>
        <YouTube
          apiKey='AIzaSyAcf9ijMWz5MypS_RogDDMIkA3gY1BXScE'
          videoId={videoId ? videoId : 'wHzpWi3FxI8'}
          play={isPlaying} 
          fullscreen={fullscreen} 
          loop={isLooping}
          controls={2}
          onReady={e => setIsReady(true)}
          onChangeState={e => setStatus(e.state)}
          onChangeQuality={e => setQuality(e.quality)}
          onError={e => setError(e.error)}
          onChangeFullscreen={e => setFullscreen(e.isFullscreen)}
          onProgress={e => setCurrentTime(e.currentTime)}
          style={{ alignSelf: 'stretch', height: 300 }}
        />
      </Video>
      <Comments>
        <CommentsTitle>Principais comentários:</CommentsTitle>
        <CommentsBox>
          <CommentList/>
        </CommentsBox>
      </Comments>
      <PressToRead>
        <TextPress>Ler</TextPress>
      </PressToRead>
    </Container>
  );
}

export default BookInfo;