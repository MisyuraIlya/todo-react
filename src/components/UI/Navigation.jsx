import React, { Component } from 'react'
import { Menu,Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu >
        <Container>
          <Link to = '/'>
            <Menu.Item
              name='Home'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
            >
          Home
            </Menu.Item>
          </Link>
          <Link to = '/history'>
            <Menu.Item
              name='History'
              active={activeItem === 'History'}
              onClick={this.handleItemClick}
            >
          History
            </Menu.Item>
          </Link>
          <Link to = '/about'>
            <Menu.Item
              name='About Us'
              active={activeItem === 'About Us'}
              onClick={this.handleItemClick}
            >
          About Us
            </Menu.Item>
          </Link>
        </Container>
      </Menu>
    )
  }
}