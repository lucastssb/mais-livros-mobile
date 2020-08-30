import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;
export const StatusBar = styled.StatusBar `

`
export const Header = styled.View `
    flex: 1;
    height: 250px;
    margin-top: 15px;
`;
export const TopBar = styled.View `
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const PageTitle = styled.Text `
    font-size: 20px;
    font-weight: bold;
`;
export const ProfileInfo = styled.View `
    flex: 5;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;
export const ProfilePicArea = styled.View `
    flex: 1;
    max-height: 150px;
    max-width: 150px;
    margin-right: 10px;
`;
export const ProfilePic = styled.Image`
    height: 100%;
    width: 100%;
    border-radius: 50px;
`;
export const UserStatus = styled.View `
    flex: 1;
    height: 150px;
    max-width: 180px;
    padding-vertical: 10px;
`;
export const StatusText = styled.Text `
    font-size: 20px;
`;
export const UserName = styled.Text `
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    margin-vertical: 10px;
`;
export const Footer = styled.View `
    flex: 1;
`;
export const FooterTitle = styled.Text `
    font-size: 20px;
    font-weight: bold;
`;
export const Interests = styled.View `
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
`;
export const InterestItem = styled.View `
    padding: 15px;
    background-color: #ccc;
    margin: 10px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    elevation: 5;

`;
export const TitleInterest = styled.Text `
    font-size: 15px;
    font-weight: bold;
`;





