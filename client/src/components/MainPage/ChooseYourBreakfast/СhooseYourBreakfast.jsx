import {
  Block,
  Text,
  TextDAH,
  Button,
} from "./MobileChooseYourBreakfast.styled";

const ChooseYourBreakfast = () => {
  return (
    <Block>
      <Text>
        <TextDAH>Delicious and healthy</TextDAH> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </Text>
      <Button href="/categories">See recipes</Button>
    </Block>
  );
};

export default ChooseYourBreakfast;
