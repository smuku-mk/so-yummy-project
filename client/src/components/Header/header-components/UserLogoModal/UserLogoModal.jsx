import { useState } from "react";
import { ModalContainer, Profile, LogOutBtn} from "./UserLogoModal.styled";


export const UserLogoModal = () => {
    
    const [isProfileModalOpen, setProfileModalOpen] = useState(false);

    const handleProfileClick = () => {
        setProfileModalOpen(!isProfileModalOpen);
        // setIsUserModalOpen(!isUserModalOpen); redux dispatch
      };

    /*    const handleLogOutClick = () => {
        setLogOutModalOpen(!isLogutModalOpen); analogicznie z powyższym
         setIsUserModalOpen(!isUserModalOpen); redux dispatch
     }; */
    
      // {isProfileModalOpen && <ProfileModal />} lokalny stan + render
      // {isLogOutModalOpen && <LogOutModal />} lokalny stan + render

    
    return (
        <ModalContainer>
            <Profile onClick={handleProfileClick}>Edit Profile</Profile>
            <LogOutBtn>Log Out</LogOutBtn>
        </ModalContainer>
      );
    };