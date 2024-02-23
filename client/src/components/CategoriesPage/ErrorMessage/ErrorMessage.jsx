import { ErrorMessage } from "./ErrorMessage.styled";

const ErrorMessage = ({ message }) => {
  return (
    <div style={{ color: "red" }}>
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;
