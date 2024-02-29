import { useEffect, useState } from "react";
import { AddRecipeForm } from "../../components/AddRecipePage/AddRecipeForm/AddRecipeForm.jsx";
import { FollowUs } from "../../../src/components/AddRecipePage/FollowUs/FollowUs.jsx";
import { PopularRecipe } from "../../../src/components/AddRecipePage/PopularRecipe/PopularRecipe.jsx";

import {
  Section,
  Container,
  Title,
  PageContainer,
  CommonContainer,
} from "./AddRecipePage.styled.jsx";

export const AddRecipePage = () => {
  const [showFollowUs, setShowFollowUs] = useState(false);

  useEffect(() => {
    const updateDimension = () => {
      setShowFollowUs(window.innerWidth >= 1440);
    };
    window.addEventListener("resize", updateDimension);

    updateDimension();

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return (
    <Section>
      <Container>
        <Title>Add Recipe</Title>
        <PageContainer>
          <AddRecipeForm />
          <CommonContainer>
            {showFollowUs && <FollowUs />}
            <PopularRecipe />
          </CommonContainer>
        </PageContainer>
      </Container>
    </Section>
  );
};
