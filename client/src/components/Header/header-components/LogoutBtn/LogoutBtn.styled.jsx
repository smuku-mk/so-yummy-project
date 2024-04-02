import styled from 'styled-components';

export const ModalContainer = styled.div`
position: absolute;
top: 10%;
right: 10%;
background-color: white;
border: 1px solid green;
border-radius: 8px;
padding: 30px;
`
export const CloseButton = styled.button`
position: absolute;
width: 30px;
height: 30px;
top: 10px;
right: 10px;
`

export const Title= styled.p`
color: black;
font-size: 20px;
cursor: pointer;   
`
export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.5);
`
export const ButtonsContainer = styled.div`
display: flex;
justify-content: space-between;
`
export const CancelBtn = styled.button`
width: 125px;
height: 45px;
background-color: grey;
border-radius: 8px;
color: white;
font-size: 16px;
border: none;
margin-top: 16px;
`
export const LogOutBtn = styled.button`
width: 125px;
height: 45px;
background-color: #8baa36;
border-radius: 8px;
color: white;
font-size: 16px;
border: none;
margin-top: 16px;
`
