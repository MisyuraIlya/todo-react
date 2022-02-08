//GLOBAL
import React from 'react';
import { Card, Header, List } from 'semantic-ui-react'
import moment from 'moment'
//LOCAL
import { DATE_TIME_FORMAT, TODO_STATUS } from '../lib/enums';
import { useNav } from '../state/time-zone';

const HistoryCard = ({ title, ended, description, subTodo }) => {
  const { timeZone } = useNav();
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{moment(ended).tz(timeZone).format(DATE_TIME_FORMAT)}</Card.Meta>
        <Card.Description>{description}
        </Card.Description>
        <Header>Ended subtodos</Header>
        <List as='ol' >
          {subTodo.filter(({ status }) => status === TODO_STATUS.DONE).map(({ _id,subdescription, ended }) =>
            <List.Item as='li' style={{ marginTop: '10px' }} key={_id}>
              {subdescription}
              <List.Content floated='right'>
                <p>{moment(ended).tz(timeZone).format(DATE_TIME_FORMAT)}</p>
              </List.Content>
            </List.Item>
          )}
        </List>
        <Header>Not Ended subtodos</Header>
        <List as='ol'>
          {subTodo.filter(({ status }) => status === TODO_STATUS.ACTIVE).map(({ _id,subdescription }) =>
            <List.Item as='li' key={_id}>
              {subdescription}
            </List.Item>
          )}
        </List>
      </Card.Content>
    </Card>
  );
};

export default HistoryCard;