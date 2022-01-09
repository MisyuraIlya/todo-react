// GLOBAL
import React from 'react';
import { Form, Message, Dimmer, Segment, Loader } from 'semantic-ui-react';
// LOCAL

const VerifyEmailComponent = ({ loading, success ,error}) => {
  return (
    <Dimmer.Dimmable  as={Segment} dimmed={loading} >
      <Dimmer active={loading} inverted>
        <Loader>Loading</Loader>
      </Dimmer>
      <Form unstackable error success>
        {error && <Message
          error
          header='Error'
          content={error}
        />}
        {success && <Message
          success
          header='Message '
          content={success}
        />}
      </Form>
    </Dimmer.Dimmable>
  );
};

export default VerifyEmailComponent;