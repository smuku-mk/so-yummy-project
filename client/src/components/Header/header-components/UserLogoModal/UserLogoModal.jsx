import { useDispatch } from "react-redux";
import { toggleProfileModal, toggleUserModal, toggleLogOutModal } from "../../../../redux/userModal/userModalSlice";
import { ModalContainer, Profile, LogOutBtn, Overlay} from "./UserLogoModal.styled";

export const UserLogoModal = () => {

    const dispatch = useDispatch();

    const handleCloseModal = (e) => {  
      if (e.target === e.currentTarget) {
        dispatch(toggleUserModal());
      }
    };
    
    const handleProfileClick = () => {
        dispatch(toggleProfileModal());
        dispatch(toggleUserModal());
      };

    const handleLogOutClick = () => {
        dispatch(toggleLogOutModal());
        dispatch(toggleUserModal());
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