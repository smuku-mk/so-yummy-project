import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleProfileModal } from "../../../../redux/userModal/userModalSlice";
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

  return (
    <Overlay onClick={handleCloseModal}>
      <ModalContainer>
          <AvatarContainer> {/* onclick */}
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