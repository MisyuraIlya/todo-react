import React, { useState, useEffect } from 'react';
import { Grid, Segment, Card, Button, Header, Dimmer, Loader, Image, Form, Icon } from 'semantic-ui-react'
import api from '../lib/api';
import PaginationModal from '../components/PaginationModal';
import moment from 'moment'
const History = () => {

  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false);
  async function loadHistory() {
    setLoading(true);
    try {
      const { page, limit, total, data } = await api.fetchHistory({ page: 0, limit: 5 });
      setHistory(data)

    } catch (error) {
      console.log('find error', error)

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => loadHistory(), [])



  return (

    <Segment>
      {loading && <Segment>
        <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>

        <Image src='paragraph.png' />
      </Segment>}
      {history.length ?
        history.map(({ id, name, date, description }) =>
          <Card fluid>
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Meta>{moment(date, 'DD.MM.YYYY').utc().format('DD.MM.YYYY')}</Card.Meta>
              <Card.Description>{description}
              </Card.Description>
            </Card.Content>
          </Card>
        ) :
        <Header as='h2'>
          <Icon name='pencil alternate' />
          <Header.Content>No History posts found!</Header.Content>
        </Header>}
      <Segment basic textAlign={"center"}>
        <PaginationModal />
      </Segment>
    </Segment>

  );
};

export default History;