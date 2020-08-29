import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
`;
export const BackButton = styled.View`
    height: 30px;
    flex-direction: row;
    justify-content: space-between;
`;
export const Header = styled.View `
    height: 315px;
    background-color: #45D0C1;
    padding-top: 35px;
    padding-horizontal: 15px;
`;
export const StatusBar = styled.StatusBar `

`;
export const BookDetails = styled.View`
    height: 250px;
    flex-direction: row;
`;
export const Cover = styled.ImageBackground`
    height: 200px;
    width: 140px;
    margin-vertical: 15px;
    border-radius: 4px;
`;
export const Details = styled.View`
    flex: 2;
    margin-vertical: 15px;
    padding-left: 15px;
`;
export const BookTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`;
export const Author = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;
export const PublishingCompany = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;
export const Edition = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;
export const PublicationDate = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;
export const Rating = styled.View`

`;
export const TextRating = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;
export const IsAvailableOffline = styled.View`
    height: 60px;
    padding-horizontal: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const IsAvailable = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;
export const BookDescription = styled.View`
    max-height: 800px;
    padding: 15px;
`;
export const Description = styled.Text`
    font-size: 18px;
    
`;
export const Video = styled.View`
    flex: 1;
`;
export const TextVideo = styled.Text`
    font-size: 25px;
    font-weight: bold;
    padding: 15px;
`;
export const Comments = styled.View`
    height: 270px;
    margin-vertical: 50px;
`;
export const CommentsTitle = styled.Text`
    font-size: 25px;
    font-weight: bold;
    padding: 15px;
`;
export const CommentsBox = styled.View`
    flex: 1;
`;
export const PressToRead = styled.TouchableOpacity`
    height: 80px;
    background-color: #8839CF;
    margin-bottom: 50px;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
`;
export const TextPress = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: white;
`;


