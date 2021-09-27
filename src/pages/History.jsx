import React from 'react';
import { Grid, Segment , Card, Button, Header } from 'semantic-ui-react'
const History = () => {
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
            </Card>

            <Card fluid>
              <Card.Content>
                <Card.Header>Jenny Lawrence</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>Jenny requested permission to view your contact details
                </Card.Description>
              </Card.Content>
            </Card>

            <Card fluid>
              <Card.Content>
                <Card.Header>Jenny Lawrence</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>Jenny requested permission to view your contact details
                </Card.Description>
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

export default History;