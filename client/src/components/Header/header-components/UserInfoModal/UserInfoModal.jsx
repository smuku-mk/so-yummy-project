import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleProfileModal } from "../../../../redux/userModal/userModalSlice";
import { ModalContainer, SaveBtn, NameInput, Overlay} from "./UserInfoModal.styled";

export const UserInfoModal = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleCloseModal = (e) => {  
    if (e.target === e.currentTarget) {
      dispatch(toggleProfileModal());
    }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // dispatch
  };
  console.log(content);

  return (
    <Overlay onClick={handleCloseModal}>
      <ModalContainer>
        <form onSubmit={handleSaveChanges}>
          <NameInput 
            type="text"
            value={content}
            onChange={handleContentChange}
            placeholder="Enter new username"
            autoFocus
          />
          <SaveBtn type="submit">Save changes</SaveBtn>
        </form>
      </ModalContainer>
    </Overlay>
  );
}