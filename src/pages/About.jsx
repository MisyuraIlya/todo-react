// Global
import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const About = () => {

  return (
    <Container text>
      <Header as='h2'>Todo App</Header>
      <Header as='h3'>A todo app, written in React and Mysql</Header>
      <p>
      Before use this app user must to register and verify his account in email.
      A user may add todo task list, and sub tasks.
      User can create tasks, delete tasks, create subtasks, delete subtasks.
      If the task is completed user can click on done button, and the completed tasks
      and subtasks (completed or not) completed will show as completed in the history page.
      another features is the time zone clock, user can choose his time zone and it will 
      allow to see the created tasks or complete tasks in current time zone user choose.
      
      </p>
      <Header as='h4'>Another functionalities</Header>
      <p>
      If the user forgot the password he may reset his password with mail link.
      
      </p>
    </Container>
  );
};

export default About;