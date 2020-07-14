import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    background: #ffffff;
`
export const StatusBar = styled.StatusBar `

`
export const Header = styled.View `
    flex: 3;
    justify-content: center;
    align-items: center;
`
export const Logo = styled.Image `
    height: 5%;
    resize-mode: contain;
`
export const HeaderImage = styled.Image `
    height: 50%;
    resize-mode: contain;
    margin-vertical: 40px;
`
export const LoginEntry = styled.KeyboardAvoidingView `
    flex: 2;
    padding-horizontal: 16px;
`
export const LoginInput = styled.TextInput `
    height: 60px;
    border-width: 1px;
    border-color: #999999;
    border-radius: 4px;
    font-size: 20px;
    font-family: Ubuntu;
    padding-left: 14px;
`
export const SubmitButton = styled.TouchableOpacity `
    height: 60px;
    background: #068577;
    margin-vertical: 12px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`
export const TextSubmitButton = styled.Text `
    font-family: Ubuntu;
    font-size: 25px;
    color: #F9F9F9;
`
export const LoginOptions = styled.View `
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`
export const ForgotPassword = styled.Text `
    font-family: Lora;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #068577;
`
export const FirstAccess = styled.Text `
    font-family: Lora;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #068577;
`
export const Footer = styled.View `
    flex: 1;
    margin-horizontal: 16px;
    min-height: 50px;
`
export const Separator = styled.View `
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center
`
export const LeftSeparator = styled.View `
    flex: 5;
    border:  1px solid #989898;
    max-height: 0;
`
export const SeparatorText = styled.Text `
    font-size: 15px;
    color: #989898;
    margin-horizontal: 5.5px;
    font-family: Lora;
    font-weight: bold;

`
export const RightSeparator = styled.View `
    flex: 5;
    border:  1px solid #989898;
    max-height: 0;
`
export const LoginAlternatives = styled.View `
    flex: 5;
    flex-direction: row;
    margin-vertical: 15px;
`
export const Google = styled.TouchableOpacity `
    flex: 1;
    max-height: 70px;
    border:  1px solid #989898;
    margin-right: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`
export const LogoGoogle = styled.Image `
    height: 50%;
    resize-mode: contain;
    margin-right: 8px;
`
export const TitleGoogle = styled.Text `
    font-family: Ubuntu;
    font-size: 19px;
    color: #1D1C1C;
`
export const Microsoft = styled.TouchableOpacity `
    flex: 1;
    max-height: 70px;
    border:  1px solid #989898;
    margin-left: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`
export const LogoMicrosoft = styled.Image `
    height: 50%;
    resize-mode: contain;
    margin-right: 8px;
`
export const TitleMicrosoft = styled.Text `
    font-family: Ubuntu;
    font-size: 19px;
    color: #1D1C1C;
`