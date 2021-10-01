//GLOBAL
import React, { useState, useEffect } from 'react';
import { Segment, Card, Header, Dimmer, Loader, Image, Icon } from 'semantic-ui-react'
import moment from 'moment'

//LOCAL
import api from '../lib/api';
import PaginationModal from '../components/PaginationModal';
import HistoryCard from '../components/HistoryCard';


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
          <HistoryCard id={id} name={name} date={date} description={description} />
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