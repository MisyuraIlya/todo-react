import React from 'react';
import { Segment , Card, Button} from 'semantic-ui-react'

const Home = () => {
  return (
    <Segment>
      <Card.Group itemsPerRow={2}>
        <Card >
          <Card.Content>
            <Card.Header>Jenny Lawrence</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Done
              </Button>
              <Button basic color='red'>Delete
              </Button>
            </div>
          </Card.Content>
        </Card>

        <Card >
          <Card.Content>
            <Card.Header>Jenny Lawrence</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Done
              </Button>
              <Button basic color='red'>Delete
              </Button>
            </div>
          </Card.Content>
        </Card>

        <Card >
          <Card.Content>
            <Card.Header>Jenny Lawrence</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Done
              </Button>
              <Button basic color='red'>Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </Segment>
  );
};

export default Home;