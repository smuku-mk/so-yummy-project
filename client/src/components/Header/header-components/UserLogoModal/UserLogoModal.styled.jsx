import styled from 'styled-components';


export const ModalContainer = styled.div`
position: absolute;
top: 10%;
right: 10%;
background-color: white;
border: 1px solid green;
border-radius: 8px;
padding: 18px;
z-index: 1000;
`
export const Title = styled.div`
display: flex;
justify-content: space-between;
gap: 37px;
`

export const Profile = styled.p`
color: black;
font-size: 20px;
cursor: pointer;   
`

export const PencilIcon = styled.svg`
width: 17px;
height: 17px;
`;

export const CloseButton = styled.button`
position: absolute;
width: 30px;
height: 30px;
top: 10px;
right: 10px;
`

export const LogOutBtn = styled.button`
background-color: #8baa36;
border-radius: 15px 50px;
color: white;
font-size: 16px;
border: none;
margin-top: 28px;
padding: 12px 24px;
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

