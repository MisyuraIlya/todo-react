import React from 'react';
import { Grid, Segment , Card, Button, Header } from 'semantic-ui-react'

const Home = () => {
  return (
    <Grid relaxed>
      <Grid.Row>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>

            <Card fluid>
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

            <Card fluid>
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

            <Card fluid>
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

          </Segment>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;