import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../redux/theme/themeSlice";
import { Label, Input } from "./ThemeToggler.styled";

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <Label>
      <Input type="checkbox" checked={darkMode} onChange={handleToggle}></Input>
    </Label>
  );
};
