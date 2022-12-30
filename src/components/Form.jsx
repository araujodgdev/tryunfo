import React, { Component } from 'react';
import '../styles/Form.css';
import { string, bool, func } from 'prop-types';

export default class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="form" onSubmit={() => {}}>
        <span>ADICIONE UMA NOVA CARTA</span>
        <div className="flex general-info">
          <label className="flex" htmlFor="cardName">
            Nome
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              value={cardName}
              onChange={onInputChange}
            />
          </label>
          <label className="flex" htmlFor="cardDescription">
            Descrição
            <textarea
              name="cardDescription"
              data-testid="description-input"
              cols="30"
              rows="10"
              value={cardDescription}
              onChange={onInputChange}
            />
          </label>
        </div>
        <div className="flex card-attributes">
          <label htmlFor="cardAttr1">
            Força Física
            <input
              min="0"
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              value={cardAttr1}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="cardAttr2">
            Velocidade
            <input
              type="number"
              min="0"
              name="cardAttr2"
              data-testid="attr2-input"
              value={cardAttr2}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="cardAttr3">
            Força Mágica
            <input
              type="number"
              min="0"
              name="cardAttr3"
              data-testid="attr3-input"
              value={cardAttr3}
              onChange={onInputChange}
            />
          </label>
        </div>
        <div className="flex extra-info">
          <label htmlFor="cardImage">
            Imagem
            <input
              type="text"
              name="cardImage"
              data-testid="image-input"
              value={cardImage}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="cardRare">
            Raridade
            <select
              name="cardRare"
              onChange={onInputChange}
              value={cardRare}
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>
        <div className="form-footer">
          {hasTrunfo ? (
            'Você já tem um Super Trunfo em seu baralho.'
          ) : (
            <label htmlFor="cardTrunfo">
              <input
                type="checkbox"
                data-testid="trunfo-input"
                name="cardTrunfo"
                value={cardTrunfo}
                onChange={onInputChange}
                defaultChecked={false}
              />
              Super Trunfo
            </label>
          )}
          <button
            onClick={onSaveButtonClick}
            disabled={isSaveButtonDisabled}
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
  cardTrunfo: bool,
  hasTrunfo: bool.isRequired,
  isSaveButtonDisabled: bool,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};

Form.defaultProps = {
  isSaveButtonDisabled: true,
  cardTrunfo: false,
};
