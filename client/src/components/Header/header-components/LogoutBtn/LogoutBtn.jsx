import { useDispatch } from "react-redux";
import { toggleLogOutModal } from "../../../../redux/userModal/userModalSlice";
import { ModalContainer, Title, Overlay, ButtonsContainer, CancelBtn, LogOutBtn} from "./LogoutBtn.styled";


export const LogoutBtn = () => {

//podpiąć backend
  const dispatch = useDispatch();

  const handleCloseModal = (e) => {  
      if (e.target === e.currentTarget) {
        dispatch(toggleLogOutModal());
      }
    };
  const handleLogOut = () => { 
    dispatch(toggleLogOutModal());//placeholder
  };

  return (
    <Overlay onClick={handleCloseModal}>
      <ModalContainer>
        <Title>Are you sure you want to log out?
        </Title>
        <ButtonsContainer>
          <LogOutBtn onClick={handleLogOut}>Log out</LogOutBtn>
          <CancelBtn onClick={handleCloseModal}>Cancel</CancelBtn>
        </ButtonsContainer>
      </ModalContainer>
    </Overlay>
  );
}