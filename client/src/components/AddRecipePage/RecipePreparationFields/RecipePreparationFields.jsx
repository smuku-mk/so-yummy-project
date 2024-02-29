import { Title, Container, TextArea } from "./RecipePreparationFields.styled";

export const RecipePreparationFields = () => {
  return (
    <Container>
      <Title>Recipe Preparation</Title>
      <TextArea
        name="preparation"
        rows="20"
        placeholder="Enter recipe here..."
        required
        minLength="10"
      ></TextArea>
    </Container>
  );
};
