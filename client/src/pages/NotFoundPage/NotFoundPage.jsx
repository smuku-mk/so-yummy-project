import notfound1x_mobile from "../../images/mobile_img/notfound1x_mobile.png";
import notfound2x_mobile from "../../images/mobile_img/notfound2x_mobile.png";
import notfound1x_tablet from "../../images/tablet_img/notfound1x_tablet.png";
import notfound2x_tablet from "../../images/tablet_img/notfound2x_tablet.png";
import notfound1x_desktop from "../../images/desktop_img/notfound1x_desktop.png";
import notfound2x_desktop from "../../images/desktop_img/notfound2x_desktop.png";
import { Container, PicBox, TextBox, Title, Text } from "./NotFoundPage.styled";

export const NotFoundPage = () => {
  return (
    <Container>
      <PicBox>
        <picture>
          <img
            src={notfound1x_mobile}
            srcSet={`${notfound1x_mobile}, ${notfound2x_mobile} 2x`}
            alt="Page not found"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${notfound1x_tablet}, ${notfound2x_tablet} 2x`}
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${notfound1x_desktop}, ${notfound2x_desktop} 2x`}
          />
        </picture>
      </PicBox>
      <TextBox>
        <Title>We are sorry,</Title>
        <Text>but the page you were looking for can't be found..</Text>
      </TextBox>
    </Container>
  );
};
