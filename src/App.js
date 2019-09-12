import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users =>
        this.setState({
          monsters: users
        })
      );
  }

  render() {
    return (
      <div className='App'>
        <input
          onChange={e => this.setState({ searchField: e.target.value })}
          type='search'
          name='q'
          placeholder='Search Monsters'
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
