import React, { Component } from 'react';
import { func } from 'prop-types';

export default class FilterFields extends Component {
  render() {
    const { onInputChange } = this.props;
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
          />
        </label>
      </div>
    );
  }
}

FilterFields.propTypes = {
  onInputChange: func.isRequired,
};
