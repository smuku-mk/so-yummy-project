import { useDispatch } from "react-redux";
import { toggleProfileModal } from "../../../../redux/userModal/userModalSlice";
import { ModalContainer, SaveBtn, NameInput, Overlay} from "./UserInfoModal.styled";

export const UserInfoModal = () => {

const dispatch = useDispatch();

const handleCloseModal = (e) => {  
    if (e.target === e.currentTarget) {
      dispatch(toggleProfileModal());
    }
  };

  

    return (
      <Overlay onClick={handleCloseModal}>
      <ModalContainer>
      <NameInput 
          type="text"
          placeholder="Enter new username"
          autoFocus />
      <SaveBtn>Save changes</SaveBtn>
      </ModalContainer>
      </Overlay>
  );
  }