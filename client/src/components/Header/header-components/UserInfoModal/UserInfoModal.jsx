import { useDispatch } from "react-redux";
import { toggleProfileModal } from "../../../../redux/userModal/userModalSlice";
import { ModalContainer, Text, Title, Overlay} from "./UserInfoModal.styled";

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
    <Title>info
    </Title>
    <Text>będzie</Text>
    </ModalContainer>
    </Overlay>
    );
  }