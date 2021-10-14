import React, { useState } from 'react';
import { Card, Header, Accordion, Segment, Icon, Menu, Button } from 'semantic-ui-react'
import moment from 'moment'
import { DATE_TIME_FORMAT } from '../lib/enums';
import { useNav } from '../state/navigation';

const HistoryCard = ({ name, date, description }) => {

  const [isDrop, setIsDrop] = useState({ activeIndex: 1 })
  const { activeIndex } = isDrop
  const { timeZone } = useNav();
  // helpers
  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = isDrop
    const newIndex = activeIndex === index ? -1 : index

    setIsDrop({ activeIndex: newIndex })
  }
  return (
    <Card fluid>
      <Card.Content>
        <Header floated='right'>sub Todos 3/3</Header>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{moment(date, DATE_TIME_FORMAT).tz(timeZone).format(DATE_TIME_FORMAT)}</Card.Meta>
        <Card.Description>{description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default HistoryCard;