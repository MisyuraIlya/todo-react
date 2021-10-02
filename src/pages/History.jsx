//GLOBAL
import React from 'react';
import { Segment, Header, Dimmer, Loader, Icon } from 'semantic-ui-react'

//LOCAL
import PaginationModal from '../components/PaginationModal';
import HistoryCard from '../components/HistoryCard';
import { useHistory } from '../state/history';


const History = () => {
  const { overlay, history } = useHistory();

  return (
    <Dimmer.Dimmable as={Segment} dimmed={overlay}>
      <Dimmer active={overlay} inverted>
        <Loader>Loading</Loader>
      </Dimmer>
      {history.length ?
        history.map(({ id, name, date, description }) =>
          <HistoryCard key={id} id={id} name={name} date={date} description={description} />
        ) :
        <Header as='h2'>
          <Icon name='pencil alternate' />
          <Header.Content>No History posts found!</Header.Content>
        </Header>}
      <Segment basic textAlign={"center"}>
        <PaginationModal />
      </Segment>
    </Dimmer.Dimmable>
  );
};

export default History;