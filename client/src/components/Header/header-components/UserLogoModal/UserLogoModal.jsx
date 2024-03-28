import { useDispatch } from "react-redux";
import { toggleUserInfoModal, toggleUserLogoModal, toggleLogOutModal } from "../../../../redux/userModal/userModalSlice";
import { ModalContainer, Profile, LogOutBtn, Overlay} from "./UserLogoModal.styled";

// w modalach brakuje jeszcze X do zamknięcia, oraz obsługi escape'a. 
//można do nich podpiąć resetModals z reduxa. onClick i keyDown 
export const UserLogoModal = () => {

    const dispatch = useDispatch();

    const handleCloseModal = (e) => {  
      e.stopPropagation();
      dispatch(toggleUserLogoModal());
    };
    
    const handleProfileClick = (e) => {
      e.stopPropagation();
      dispatch(toggleUserInfoModal());
      dispatch(toggleUserLogoModal());
    };

    const handleLogOutClick = (e) => {
      e.stopPropagation();
      dispatch(toggleLogOutModal());
      dispatch(toggleUserLogoModal());
    };
     
    return (
      <Overlay onClick={handleCloseModal}>
        <ModalContainer>
            <Profile onClick={handleProfileClick}>Edit Profile</Profile>
            <LogOutBtn onClick={handleLogOutClick}>Log Out</LogOutBtn>
        </ModalContainer>
      </Overlay>
      );
    };