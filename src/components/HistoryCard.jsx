import React from 'react';
import { Card } from 'semantic-ui-react'
import moment from 'moment'
import { DATE_TIME_FORMAT } from '../lib/enums';
const HistoryCard = ({ name, date, description }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        {console.log(date)}
        <Card.Meta>{moment(date, DATE_TIME_FORMAT).format(DATE_TIME_FORMAT)}</Card.Meta>
        <Card.Description>{description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default HistoryCard;