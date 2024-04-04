import { useDispatch } from "react-redux"; 
import { useState, useRef, useEffect} from "react";
import { toggleUserInfoModal } from "../../../../redux/userModal/userModalSlice";
import { uploadAvatar } from "../../../../redux/auth/operations";
import { updateUserName } from "../../../../redux/auth/authSlice";
import { CloseButton, ModalContainer, SaveBtn, NameInput, InputWrapper, UserIcon, PencilIcon, Overlay, AvatarContainer, AvatarIcon, PlusIcon} from "./UserInfoModal.styled";
import icons from "../../../../images/icons.svg";


// Ewentualnie można przechowywać lokalnie awatar i nawzę usera zanim wyślemy zmiany.
// Można dzięki temu zastąpić to szare pole nowym awatarem( początkowo też aktualnym).
// jako placeholder w inpucie wyświetlić aktualną nazwę usera???

//trzeba naprawić te svg...

export const UserInfoModal = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleEsc = (event) => {
    if (event.keyCode === 27) {
        dispatch(toggleUserInfoModal());
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
        window.removeEventListener('keydown', handleEsc);
  };
  }, []);

  const handleCloseModal = (e) => {  
    if (e.target === e.currentTarget) {
      dispatch(toggleUserInfoModal());
    }
  };

  const handleContentChange = (e) => {
   setContent(e.target.value);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    dispatch(updateUserName(content));
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
        <CloseButton onClick={handleCloseModal}>
          <use href={icons + "#icon-avatar-plus"} />
        </CloseButton>
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
            value={content}
            onChange={handleContentChange}
            />
            <UserIcon>
            <use href={icons + "#icon-user"} />
            </UserIcon>
            <PencilIcon>
            <use href={icons + "#icon-pencil"} />
            </PencilIcon>
          </InputWrapper>
          <SaveBtn type="button" onClick={handleSaveChanges}>Save changes</SaveBtn>
      </ModalContainer>
    </Overlay>
  );
}