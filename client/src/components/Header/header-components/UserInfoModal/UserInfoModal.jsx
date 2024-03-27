import { useDispatch } from "react-redux"; 
import { useState, useRef } from "react";
import { toggleProfileModal } from "../../../../redux/userModal/userModalSlice";
import { uploadAvatar } from "../../../../redux/auth/operations";
import { ModalContainer, SaveBtn, NameInput, InputWrapper, UserIcon, PencilIcon, Overlay, AvatarContainer, AvatarIcon, PlusIcon} from "./UserInfoModal.styled";
import icons from "../../../../images/icons.svg";

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
    // dispatch save avatar and name
  };
  console.log(content);

  const fileInputRef = useRef();

  const fileInputHandler = () => {
    fileInputRef.current.click();
  };

  const uploadAvatarHandler = event => {
    const file = event.target.files[0];
    dispatch(uploadAvatar(file));
  };

 

  return (
    <Overlay onClick={handleCloseModal}>
      <ModalContainer>
      <input type="file" onChange={uploadAvatarHandler} ref={fileInputRef} style={{ display: 'none' }} />
      <AvatarContainer onClick={fileInputHandler}>
        <AvatarIcon>
          <use href={icons + "#icon-user"} />
        </AvatarIcon>
        <PlusIcon>
          <use href={icons + "#icon-avatar-plus"} />
        </PlusIcon>
      </AvatarContainer>
          <InputWrapper>
            <NameInput 
            type="text"
            value={content} /* content = current user name???, or add placeholder*/
            onChange={handleContentChange}
            />
            <UserIcon>
            <use href={icons + "#icon-user"} />
            </UserIcon>
            <PencilIcon>
            <use href={icons + "#icon-pencil"} />
            </PencilIcon>
          </InputWrapper>
          <SaveBtn type="button">Save changes</SaveBtn>
      </ModalContainer>
    </Overlay>
  );
}