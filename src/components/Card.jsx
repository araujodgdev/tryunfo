import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';
import '../styles/Card.css';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSavedCard,
      onDeleteButtonClick,
    } = this.props;
    const deleteButton = (
      <button
        type="button"
        onClick={ onDeleteButtonClick }
        data-testid="delete-button"
        className="delete-button"
        id={ cardName }
      >
        Excluir
      </button>
    );
    return (
      <div className="card-container">
        <span>PRÉ-VISUALIZAÇÃO</span>
        <div>
          <h3 data-testid="name-card">{cardName}</h3>
          <img
            className="card-image"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <p data-testid="description-card">{cardDescription}</p>
        </div>
        <div>
          <p data-testid="attr1-card">{`Força Física: ${cardAttr1}`}</p>
          <p data-testid="attr2-card">{`Velocidade: ${cardAttr2}`}</p>
          <p data-testid="attr3-card">{`Força Mágica: ${cardAttr3}`}</p>
        </div>
        <span data-testid="rare-card">{cardRare}</span>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        {isSavedCard === 'true' && deleteButton}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  isSavedCard: string,
  onDeleteButtonClick: func,
};

Card.defaultProps = {
  isSavedCard: 'false',
  onDeleteButtonClick: () => {},
};
