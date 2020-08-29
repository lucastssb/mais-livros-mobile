import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;
export const CommentBox = styled.View`
    width: 300px;
    height: 150px;
    flex-direction: row;
    background-color: #C4C4C4;
    elevation: 5;
    padding: 15px;
    margin: 20px;
`;
export const UserPic = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 12px;
    margin-right: 5px;
`;
export const CommentData = styled.View`
    flex: 1;
    background-color: #C4C4C4;
    padding-left: 5px;
`;
export const UserName = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
export const Comment = styled.Text`
    font-size: 15px;
`;
