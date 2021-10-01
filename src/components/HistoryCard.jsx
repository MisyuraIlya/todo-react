import React from 'react';
import { Segment, Card, Header, Dimmer, Loader, Image, Icon } from 'semantic-ui-react'
import moment from 'moment'
const HistoryCard = ({name,date,description}) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{moment(date, 'DD.MM.YYYY').utc().format('DD.MM.YYYY')}</Card.Meta>
        <Card.Description>{description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default HistoryCard;