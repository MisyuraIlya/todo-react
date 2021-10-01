import React, { useEffect, useState } from 'react';
import { Segment, Card, Button, Header, Dimmer, Loader, Image, Form, Icon } from 'semantic-ui-react'
import api from '../lib/api';
import moment from 'moment'
import PaginationModal from '../components/PaginationModal';

const Home = () => {

  const [post, setPost] = useState({ title: '', description: '' })
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadPosts() {
    setLoading(true);
    try {
      const { page, limit, total, data } = await api.fetchPosts({ page: 0, limit: 5 });
      setPosts(data)

    } catch (error) {
      console.log('find error', error)

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => loadPosts(), [])
  const removePost = async (id) => {
    try {
      await api.removePost(id);
    } catch (error) {
      console.log('Found error', error)
    } finally {
    }
    await loadPosts();
  }

  const createPost = async () => {
    try {
      await api.addPosts(post.title, post.description);
    } catch (error) {
      console.log('Found error', error)
    } finally {
      setPost({ title: '', description: '' })
    }
    await loadPosts();
  }

  const donePost = async (id, name, description) => {
    try {
      await api.donePost(id, name, description);
    } catch (error) {
      console.log('Found error', error)
    }
    await loadPosts();
  }

  return (

    <Segment>

      <Form>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Title'
            placeholder='Title'
            value={post.title}
            onChange={e => setPost({ ...post, title: e.target.value })} />
        </Form.Group>
        <Form.TextArea
          label='Description'
          placeholder='Tell more about what need to do...'
          value={post.description}
          onChange={e => setPost({ ...post, description: e.target.value })} />
        <Form.Button primary onClick={createPost}>Add ToDo</Form.Button>
      </Form>

      {loading ?
        <Segment>
          <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
          </Dimmer>

          <Image src='paragraph.png' />
        </Segment> :
        //card to component
        posts.length ?
          posts.map(({ id, name, date, description }) =>
            <Card fluid>
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{moment(date, 'DD.MM.YYYY').utc().format('DD.MM.YYYY')}</Card.Meta>
                <Card.Description>{description}

                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' onClick={() => donePost(id, name, description)}>Done
                  </Button>
                  <Button basic color='red' onClick={() => removePost(id)}>Delete
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ) :
          <Header as='h2'>
            <Icon name='pencil alternate' />
            <Header.Content>No posts found!</Header.Content>
          </Header>}

      <Segment basic textAlign={"center"}>
        <PaginationModal />
      </Segment>


    </Segment>

  );
};

export default Home;