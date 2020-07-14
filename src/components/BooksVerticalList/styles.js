import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Book = styled.TouchableOpacity `
    height: 200px;
    width: 140px;
    margin: 10px;
    elevation: 8;
    border-radius: 4px;
`;
export const Thumbnail = styled.Image `
    height: 100%;
    resize-mode: contain;
    border-radius: 4px;
`;
