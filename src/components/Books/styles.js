import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`
export const Category = styled.Text `
    font-size: 20px;
    margin-left: 5px;
    margin-vertical: 15px;
    font-weight: bold;
`
export const Book = styled.TouchableOpacity`
    elevation: 5;
    height: 200px;
    width:140px;
    margin: 10px 5px;
    border-radius: 4px;
    background-color: white;
`;
export const Thumbnail = styled.Image`
    height: 100%;
    width:100%;
    border-radius: 4px;
`
