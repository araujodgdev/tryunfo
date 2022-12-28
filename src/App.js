import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './styles/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: name === 'cardTrunfo' ? target.checked : value,
    });
  }

  render() {
    const { onInputChange } = this;
    return (
      <div className="main-container">
        <h1 className="title">Tryunfo</h1>
        <p>{'The Mystical Creatures\'s Edition'}</p>
        <div className="new-card-container">
          <Form onInputChange={ onInputChange } { ...this.state } />
          <Card { ...this.state } />
        </div>
      </div>
    );
  }
}

export default App;
