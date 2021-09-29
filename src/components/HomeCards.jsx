import React from 'react';

const HomeCards = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{date}</Card.Meta>
        <Card.Description>{description}

        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={() => donePost(id,name,description)}>Done
          </Button>
          <Button basic color='red' onClick={() => removePost(id)}>Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default HomeCards;