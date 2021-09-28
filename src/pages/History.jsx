import React, { useState,useEffect } from 'react';
import { Grid, Segment , Card, Button, Header ,  Dimmer, Loader, Image, Form} from 'semantic-ui-react'
import api from '../lib/api';
const History = () => {

  const [history,setHistory] = useState([])
  const [loading,setLoading] = useState(false);
  async function loadHistory() {
    setLoading(true);
    try{
      const {page,limit,total,data} = await api.fetchHistory({page:0,limit:5});
      setHistory(data)

    }catch(error){
      console.log('find error',error)

    }finally{
      setLoading(false);
    }
  }

  useEffect(() => loadHistory() , [] )



  return (
    <Grid relaxed>
      <Grid.Row>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            {loading &&     <Segment>
              <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
              </Dimmer>

              <Image src='paragraph.png' />
            </Segment>}
            {history.map(({id,name,date,description}) => 
              <Card fluid>
                <Card.Content>
                  <Card.Header>{name}</Card.Header>
                  <Card.Meta>{date}</Card.Meta>
                  <Card.Description>{description}
                  </Card.Description>
                </Card.Content>
              </Card>
            )}
          </Segment>
        </Grid.Column>
        <Grid.Column width={3}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default History;