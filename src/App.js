import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
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
      <div>
        <CardList name='abdo'>
          <h1>Abdo</h1>
        </CardList>
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;