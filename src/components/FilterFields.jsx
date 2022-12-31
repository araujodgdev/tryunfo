import React, { Component } from 'react';
import { func, bool } from 'prop-types';

export default class FilterFields extends Component {
  render() {
    const { onInputChange, handleTrunfoFilter, disabledFilter } = this.props;
    return (
      <div className="filter-container">
        <span>Filtros de Busca</span>
        <label htmlFor="filter-name">
          <input
            name="nameFilter"
            data-testid="name-filter"
            placeholder="Nome da carta"
            type="text"
            onChange={ onInputChange }
            disabled={ disabledFilter }
          />
        </label>
        <label htmlFor="rareFilter">
          <select
            disabled={ disabledFilter }
            onChange={ onInputChange }
            data-testid="rare-filter"
            name="rareFilter"
            id="rareFilter"
          >
            <option value="">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          <input
            type="checkbox"
            name="trunfoFilter"
            data-testid="trunfo-filter"
            onChange={ handleTrunfoFilter }
          />
          Super Trunfo
        </label>
      </div>
    );
  }
}

FilterFields.propTypes = {
  onInputChange: func.isRequired,
  handleTrunfoFilter: func.isRequired,
  disabledFilter: bool.isRequired,
};
