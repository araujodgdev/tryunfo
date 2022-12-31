import React from 'react';
import Card from './components/Card';
import FilterFields from './components/FilterFields';
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
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      savedCards: [],
      filteredCards: undefined,
      nameFilter: '',
      rareFilter: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validateSaveButton = this.validateSaveButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.handleHasTrunfo = this.handleHasTrunfo.bind(this);
    this.verifyHasTrunfo = this.verifyHasTrunfo.bind(this);
    this.fetchFilteredCards = this.fetchFilteredCards.bind(this);
  }

  handleHasTrunfo() {
    const { savedCards } = this.state;
    const output = savedCards.some((card) => card.cardTrunfo === true);
    if (output === false) {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  onInputChange({ target }) {
    const { value, name } = target;
    this.setState(
      {
        [name]: name === 'cardTrunfo' ? target.checked : value,
      },
      () => {
        this.validateSaveButton();
      },
    );
  }

  onSaveButtonClick(e) {
    e.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo: cardTrunfo ? true : cardTrunfo,
    };

    this.setState(
      (prevState) => ({
        savedCards: [...prevState.savedCards, newCard],
      }),
      this.verifyHasTrunfo,
    );

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  onDeleteButtonClick({ target }) {
    const { savedCards } = this.state;
    const { id } = target;
    const updatedSavedCards = savedCards.filter((card) => card.cardName !== id);
    this.setState(
      {
        savedCards: updatedSavedCards,
      },
      () => {
        this.handleHasTrunfo();
        this.fetchFilteredCards();
      },
    );
  }

  setFilterState = ({ target }) => {
    const { value, name } = target;
    if (name === 'nameFilter') {
      this.setState({
        [name]: value,
      }, this.fetchFilteredCards);
    }
    if (name === 'rareFilter') {
      this.setState({
        [name]: value,
      }, this.fetchFilteredCards);
    }
  };

  fetchFilteredCards() {
    const { nameFilter, savedCards, rareFilter } = this.state;
    if (rareFilter === '') {
      const filtered = savedCards.filter((card) => (
        card.cardName.toLowerCase().includes(nameFilter.toLowerCase())
         && card.cardRare.includes(rareFilter)
      ));
      this.setState({
        filteredCards: filtered === undefined ? '' : filtered,
      });
    }
    if (rareFilter !== '') {
      const filtered = savedCards.filter((card) => (
        card.cardName.toLowerCase().includes(nameFilter.toLowerCase())
         && card.cardRare === rareFilter
      ));
      this.setState({
        filteredCards: filtered === undefined ? '' : filtered,
      });
    }
  }

  verifyHasTrunfo() {
    const { savedCards } = this.state;
    const verifyHasTrunfo = savedCards.some((card) => card.cardTrunfo === true);
    if (verifyHasTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
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
      isSaveButtonDisabled: !Object.values(validFields).every(
        (value) => value === true,
      ),
    });
  }

  render() {
    const {
      onInputChange,
      onSaveButtonClick,
      onDeleteButtonClick,
      fetchFilteredCards,
    } = this;
    const { savedCards, filteredCards } = this.state;
    const savedCardsList = (list) => {
      const output = list.map((card) => (
        <Card
          isSavedCard="true"
          onDeleteButtonClick={ onDeleteButtonClick }
          key={ card.cardName }
          { ...card }
        />
      ));
      return output;
    };
    return (
      <div className="main-container">
        <h1 className="title">Tryunfo</h1>
        <p>{'The Mystical Creatures\'s Edition'}</p>
        <div className="new-card-container">
          <Form
            onInputChange={ onInputChange }
            onSaveButtonClick={ onSaveButtonClick }
            { ...this.state }
          />
          <Card { ...this.state } />
        </div>
        <FilterFields
          fetchFilteredCards={ fetchFilteredCards }
          onInputChange={ this.setFilterState }
        />
        <div className="saved-cards">
          {filteredCards === undefined
            ? savedCardsList(savedCards) : savedCardsList(filteredCards)}
        </div>
      </div>
    );
  }
}

export default App;
