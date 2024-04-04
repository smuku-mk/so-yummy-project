import { useDispatch } from "react-redux";
import { toggleUserInfoModal, toggleUserLogoModal, toggleLogOutModal } from "../../../../redux/userModal/userModalSlice";
import { PencilIcon, ModalContainer, Profile, LogOutBtn, Overlay, Title} from "./UserLogoModal.styled";
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
          <Title>
            <Profile onClick={handleProfileClick}>Edit Profile</Profile>
            <PencilIcon>
            <use href={icons + "#icon-pencil"} />
            </PencilIcon>
          </Title>
          <LogOutBtn onClick={handleLogOutClick}>Log Out &#8594;</LogOutBtn>
        </ModalContainer>
      </Overlay>
      );
    };