import { SearchBar } from "../../components/SearchPage/SearchBar/SearchBar.jsx";
import { SearchRecipesList } from "../../components/SearchPage/SearchRecipeList/SearchRecipesList.jsx";
import { Title, Container, PageContainer, Section } from "./SearchPage.styled";

export const SearchPage = () => {
  return (
    <Section>
      <Container>
        <Title>Search</Title>
        <PageContainer>
          <SearchBar />
          <SearchRecipesList />
        </PageContainer>
      </Container>
    </Section>
  );
};
