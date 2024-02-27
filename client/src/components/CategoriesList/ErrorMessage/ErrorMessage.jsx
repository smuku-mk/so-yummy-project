import { ErrorMess } from "./ErrorMessage.styled";

export const ErrorMessage = ({ message }) => {
  return (
    <ErrorMess style={{ color: "red" }}>
      <p>Error: {message}</p>
    </ErrorMess>
  );
};
