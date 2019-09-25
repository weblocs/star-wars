import React, { Component } from 'react';
import ButtonPlay from './components/buttonPlay'
const API = 'https://swapi.co/api/people/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      count: null
    };
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ people: data.results, count: data.count }));
  }
  render() {
    const { people, count } = this.state;
    return (
      <div>
        {count}
      <ul>
        {people.map(person =>
          <li key={person.name}>
            <a href={person.name}>{person.name}</a>
          </li>
        )}
      </ul>
      <ButtonPlay />
      </div>
    );
  }
}
export default App;