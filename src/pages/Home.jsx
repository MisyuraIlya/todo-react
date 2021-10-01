import React, { useEffect, useState } from 'react';
import { Segment, Header, Dimmer, Loader, Image, Form, Icon } from 'semantic-ui-react'
import api from '../lib/api';
import PaginationModal from '../components/PaginationModal';
import HomeCards from '../components/HomeCards';

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
            <HomeCards
              id={id}
              name={name}
              date={date}
              description={description}
              donePost={() => donePost(id, name, description)}
              removePost={() => removePost(id)} />
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