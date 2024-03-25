import styled from 'styled-components';


export const ModalContainer = styled.div`
position: absolute;
top: 10%;
right: 10%;
width: 330px;
background-color: white;
border: 1px solid green;
border-radius: 8px;
padding: 30px;
z-index: 1000;
display: flex;
flex-direction: column;
align-items: center;
`
export const SaveBtn = styled.button`
width: 282px;
height: 45px;
background-color: #8baa36;
border-radius: 8px;
color: white;
font-size: 16px;
border: none;
margin-top: 24px;
`
export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.5);
z-index: 999;
`

export const AvatarContainer = styled.div`
background-color: #d9d9d9;
width: 88px;
height: 88px;
border-radius: 50%;
position: relative;
margin-bottom: 54px;
`

export const AvatarIcon = styled.svg`
width: 40px;
height: 40px;
position: absolute;
top: 25%;
left: 25%;
`
export const PlusIcon = styled.svg`
width: 20px;
height: 20px;
position: absolute;
top: 85%;
left: 55%;
`

export const InputWrapper = styled.div`
position: relative;
display: flex;
align-items: center;
width: 282px;
height: 45px;
`;

export const NameInput = styled.input`
padding-left: 30px;
padding-right: 30px;
width: 100%;
height: 100%;
border-radius: 8px;
border-color: #23262A;
`;

export const UserIcon = styled.svg`
position: absolute;
width: 18px;
height: 18px;
left: 10px; 
`;

export const PencilIcon = styled.svg`
position: absolute;
width: 17px;
height: 17px;
right: 10px;
`;