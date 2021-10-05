import React from 'react';
import { Card, Button } from 'semantic-ui-react'
import moment from 'moment'
import {  DATE_TIME_FORMAT } from '../lib/enums';
const HomeCards = ({ id, name, date, description ,donePost , removePost }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{moment(date,DATE_TIME_FORMAT).utc().format(DATE_TIME_FORMAT )}</Card.Meta>
        <Card.Description>{description}

        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={donePost}>Done
          </Button>
          <Button basic color='red' onClick={removePost}>Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default HomeCards;