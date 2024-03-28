import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleLogOutModal } from "../../../../redux/userModal/userModalSlice";
import { ModalContainer, Title, Overlay, ButtonsContainer, CancelBtn, LogOutBtn} from "./LogoutBtn.styled";
import { logOut } from "../../../../redux/auth/operations";


export const LogoutBtn = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModal = (e) => {  
    e.stopPropagation();
    if (e.target === e.currentTarget) {
        dispatch(toggleLogOutModal());
    }
  };
  const handleLogOut = () => { 
    dispatch(logOut());
    navigate("/");
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