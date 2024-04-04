import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toggleLogOutModal } from "../../../../redux/userModal/userModalSlice";
import { CloseButton, ModalContainer, Title, Overlay, ButtonsContainer, CancelBtn, LogOutBtn} from "./LogoutBtn.styled";
import { logOut } from "../../../../redux/auth/operations";
import icons from "../../../../images/icons.svg";


export const LogoutBtn = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEsc = (event) => {
    if (event.keyCode === 27) {
        dispatch(toggleLogOutModal());
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
        window.removeEventListener('keydown', handleEsc);
  };
  }, []);

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
        <CloseButton onClick={handleCloseModal}>
          <use href={icons + "#icon-avatar-plus"} />
        </CloseButton>
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