// GLOBAL
import React, { useEffect } from 'react';
import { Segment, Header, Dimmer, Loader, Icon } from 'semantic-ui-react'

// LOCAL
import PaginationModal from '../components/PaginationModal';
import HistoryCard from '../components/HistoryCard';
import { useHistory } from '../state/history';

const History = () => {
  const { loading, subTodo, history, pagination, page, methods } = useHistory();
  const onPageChange = async (_, { activePage }) => {
    await methods.onPageChange(activePage - 1);
  }
  useEffect(() => methods.loadHistory(), [page])
  const historyElement = history.map(({ id, title, ended, description }) =>
    <HistoryCard
      key={id}
      id={id}
      title={title}
      ended={ended}
      description={description}
      subTodo={subTodo.filter(({ parentid }) => parentid === id)}
    />
  )

  const missingElement = <Header as='h2'>
    <Icon name='pencil alternate' />
    <Header.Content>No History posts found!</Header.Content>
  </Header>

  return (
    <Dimmer.Dimmable as={Segment} dimmed={loading}>
      <Dimmer active={loading} inverted>
        <Loader>Loading</Loader>
      </Dimmer>
      {history.length ? historyElement : missingElement}
      <Segment basic textAlign={'center'}>
        <PaginationModal {...pagination} page={page} onPageChange={onPageChange} />
      </Segment>
    </Dimmer.Dimmable>
  );
};

export default History;