import React, { Component } from 'react';
import '../styles/Form.css';
import { string, bool, func } from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form className="form" onSubmit={ () => {} }>
        <span>ADICIONE UMA NOVA CARTA</span>
        <div className="flex general-info">
          <label className="flex" htmlFor="card-name">
            Nome
            <input
              data-testid="name-input"
              type="text"
              name="card-name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label className="flex" htmlFor="card-description">
            Descrição
            <textarea
              name="card-description"
              data-testid="description-input"
              cols="30"
              rows="10"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="flex card-attributes">
          <label htmlFor="attr-1">
            Força Física
            <input
              min="0"
              type="number"
              name="attr-1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr-2">
            Velocidade
            <input
              type="number"
              min="0"
              name="attr-2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr-3">
            Força Mágica
            <input
              type="number"
              min="0"
              name="attr-3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="flex extra-info">
          <label htmlFor="card-image">
            Imagem
            <input
              type="text"
              name="card-image"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="card-rarity">
            Raridade
            <select
              name="card-rarity"
              onChange={ onInputChange }
              value={ cardRare }
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>
        <div className="form-footer">
          <label htmlFor="trump-card">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="trump-card"
              value={ cardTrunfo }
              onChange={ onInputChange }
              defaultChecked
            />
            Super Trunfo
          </label>
          <button
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            className="save-button"
            type="button"
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  hasTrunfo: bool.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};
