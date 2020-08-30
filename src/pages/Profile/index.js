import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
     Container,
     StatusBar,
     Header,
     TopBar,
     PageTitle,
     ProfileInfo,
     ProfilePicArea,
     ProfilePic,
     UserStatus,
     UserName,
     Footer,
     StatusText,
     FooterTitle,
     Interests,
     InterestItem,
     TitleInterest
     
} from './styles';

const DATA = [
    {
      title: 'Romance',
    },
    {
      title: 'Ficção',
    },
    {
      title: 'Conto de fadas',
    },
    {
      title: 'Fantasia',
    },
    {
      title: 'Terror',
    },
  ];

const Profile = () => {
  return(
    <Container>
    <StatusBar backgroundColor='#45D0C1'/>
        <Header>
            <TopBar>
                <PageTitle>Perfil</PageTitle>
                <Icon name='setting' size={30} color='black' />
            </TopBar>
            <ProfileInfo>
                <ProfilePicArea>
                    <ProfilePic source={require('../../assets/IMG_20191030_101256.jpg')}></ProfilePic>
                    <Icon style={{position: 'absolute', marginLeft: '42%', marginTop: '75%' }} name='camerao' size={30} color='white' />
                    <UserName>Lucas Barbosa</UserName>
                </ProfilePicArea>
                <UserStatus>
                    <StatusText>Hi, i'm Lucas a computer science student who loves tecnology and books.</StatusText>
                </UserStatus>
            </ProfileInfo>
        </Header>
        <Footer>
            <FooterTitle>Interesses</FooterTitle>
            <Interests>
                {DATA.map(item => {
                    return(
                        <InterestItem key={item.title}>
                            <TitleInterest>{item.title}</TitleInterest>
                        </InterestItem>
                    );
                })}
            </Interests>
        </Footer>


    </Container>
    );}

export default Profile;