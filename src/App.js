import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
  // adding state to our app
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: '',
    };
  }

  // Search event
  onSearchChange = (event) => {
    // if you want to change the state of a value, you should use this.setState({the state : the value})
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}></SearchBox>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
