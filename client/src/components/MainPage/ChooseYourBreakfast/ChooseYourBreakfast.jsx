import {
  Block,
  Text,
  TextDAH,
  Button,
  IconArrow,
} from "./ChooseYourBreakfast.styled";
import svg from "../../../images/sprites.svg";

const ChooseYourBreakfast = () => {
  return (
    <Block>
      <Text>
        <TextDAH>Delicious and healthy</TextDAH> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </Text>
      <Button href="/categories">
        See recipes
        <IconArrow>
          <use xlinkHref={svg + "#icon-arrow-right"} />
        </IconArrow>
      </Button>
    </Block>
  );
};

export default ChooseYourBreakfast;
