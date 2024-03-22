import styled from 'styled-components';


export const ModalContainer = styled.div`
position: absolute;
top: 10%;
right: 10%;
background-color: white;
border: 1px solid green;
border-radius: 8px;
padding: 30px;
z-index: 1000;
`
export const Title = styled.p`
color: black;
font-size: 20px;
`
export const Text = styled.p`
color: black;
font-size: 20px;   
`
export const SaveBtn = styled.button`
width: 125px;
height: 45px;
background-color: #8baa36;
border-radius: 8px;
color: white;
font-size: 16px;
border: none;
margin-top: 16px;
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
export const NameInput = styled.input`
width: 90%;
color: black;
background-color: aliceblue;
height: 45px;
border-radius: 8px;
border: 1px solid;
margin-bottom: 16px;
`