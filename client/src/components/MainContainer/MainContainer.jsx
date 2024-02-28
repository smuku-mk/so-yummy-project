import { Main } from './MainContainer.styled';

export const MainContainer = props => {
  const { children } = props;
  return <Main>{children}</Main>;
};
