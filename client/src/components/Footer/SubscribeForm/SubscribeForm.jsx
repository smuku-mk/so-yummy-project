import React from 'react';
import sprites from '../../images/sprites.svg';
import {
  Subscription,
  Subscribe,
  Newsletter,
  Form,
  FormContainer,
  Email,
  Button,
  Icon,
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
  return (
    <Subscription>
      <Subscribe>Subscribe to our Newsletter</Subscribe>
      <Newsletter>
        Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
      </Newsletter>
      <Form>
        <FormContainer>
          <Icon>
            <use xlinkHref={`${sprites}#icon-email`} />
          </Icon>
          <Email type="text" value="Enter your email address" />
        </FormContainer>

        <Button type="submit">Subscribe</Button>
      </Form>
    </Subscription>
  );
};
