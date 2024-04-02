import { useDispatch } from "react-redux";
import { toggleUserInfoModal, toggleUserLogoModal, toggleLogOutModal } from "../../../../redux/userModal/userModalSlice";
import { PencilIcon, ModalContainer, Profile, LogOutBtn, Overlay} from "./UserLogoModal.styled";
import icons from "../../../../images/icons.svg";


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
          <div>
            <Profile onClick={handleProfileClick}>Edit Profile</Profile>
            <PencilIcon>
            <use href={icons + "#icon-pencil"} />
            </PencilIcon>
          </div>
          <LogOutBtn onClick={handleLogOutClick}>Log Out</LogOutBtn>
        </ModalContainer>
      </Overlay>
      );
    };