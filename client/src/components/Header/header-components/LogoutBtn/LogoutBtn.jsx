import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleLogOutModal } from "../../../../redux/userModal/userModalSlice";
import { ModalContainer, Text, Title, Overlay} from "./LogoutBtn.styled";


export const LogoutBtn = () => {
//odświeżanie
//podpiąć backend
  const dispatch = useDispatch();

  const handleCloseModal = (e) => {  
      if (e.target === e.currentTarget) {
        dispatch(toggleLogOutModal());
      }
    };
  

  return (
    <Overlay onClick={handleCloseModal}>
      <ModalContainer>
        <Title>logout
        </Title>
        <Text>albo i nie</Text>
      </ModalContainer>
    </Overlay>
  );
}