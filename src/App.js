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
      inSaveButtonDisabled: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validateSaveButton = this.validateSaveButton.bind(this);
  }

  onInputChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: name === 'cardTrunfo' ? target.checked : value,
    }, this.validateSaveButton);
  }

  validateSaveButton() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const maxAttrPoints = 90;
    const maxPoints = 210;
    const noEmptyFields = (field) => field.length > 0;
    const validAttrPoints = (attr) => attr >= 0 && attr <= maxAttrPoints;
    const attrToNumber = [
      Number(cardAttr1),
      Number(cardAttr2),
      Number(cardAttr3),
    ];
    const validAttrAmount = attrToNumber.reduce((acc, crr) => acc + crr) <= maxPoints;

    const validFields = {
      cardName: noEmptyFields(cardName),
      cardDescription: noEmptyFields(cardDescription),
      cardImage: noEmptyFields(cardImage),
      cardAttr1: validAttrPoints(attrToNumber[0]),
      cardAttr2: validAttrPoints(attrToNumber[1]),
      cardAttr3: validAttrPoints(attrToNumber[2]),
      validAmountOfPoints: validAttrAmount,
    };

    this.setState({
      isSaveButtonDisabled: !Object.values(validFields).every((value) => value === true),
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
