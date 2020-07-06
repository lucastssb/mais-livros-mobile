import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;
export const CommentBox = styled.View`
    flex: 1;
    width: 300px;
    flex-direction: row;
    margin-horizontal: 5px;
    background-color: #45D0C1;
    elevation: 10;
`;
export const UserPic = styled.Image`
    height: 50px;
    width: 50px;
    align-self: center;
    border-radius: 100px;
    margin-right: 5px;
`;
export const CommentData = styled.View`
    flex: 1;
    padding: 15px;
    background-color: #C4C4C4;
`;
export const UserName = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
export const Comment = styled.Text`
    font-size: 15px;
`;
