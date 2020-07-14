import styled from 'styled-components/native';

export const Container = styled.View `
    background-color: #45D0C1;
    max-height: 130px;
`;
export const StatusBar = styled.StatusBar `

`;
export const SearchBar = styled.View `
    margin-horizontal: 20px;
    margin-top: 60px;
    max-height: 60px;
    background: white;
    font-size: 19px;
    border-radius: 4px;
    flex-direction: row;
    border-top-right-radius: 25px;
`;
export const SearchButton = styled.TouchableOpacity `
    width: 15%;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-color: #45D0C1;
    border-width: 2px;
    justify-content: center;
    align-items: center;
`;
export const SearchInput = styled.TextInput `
    width: 85%;
    padding-left: 10px;
    border-radius: 4px;
`;