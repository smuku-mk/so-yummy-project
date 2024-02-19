import React from 'react';
// import svg from '../../images/sprites.svg';
import { Subscription, Subscribe, Newsletter, Form, Email, Button } from './SubscribeForm.styled';

export const SubscribeForm = () => {
    return (
      <Subscription>
        <Subscribe>Subscribe to our Newsletter</Subscribe>
        <Newsletter>
          Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
        </Newsletter>
        <Form>
          {/*    <svg>
        <use xlinkHref={${svg}#icon-email} />
      </svg> */}
          <Email type="text" value="Enter your email address" />
          <Button type="submit">Subscribe</Button>
        </Form>
      </Subscription>
    );
};
