import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import filmNames from '../filmNames';
import { handleFilmChange } from '../actions/index';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value);
  if (escapedValue === '') {
    return [];
  }
  return filmNames
    .filter(name =>
      name.toLowerCase().indexOf(escapedValue.toLowerCase()) > -1
    )
    .slice(0, 5);
}

function getSuggestionValue(suggestion) {
  return suggestion;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion}</span>
  );
}

class FilmSuggest extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({ value: newValue });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value),
    });
  }

  onSuggestionsClearRequested() {
    this.setState({ suggestions: [] });
  }

  onSuggestionSelected(e, { suggestionValue }) {
    this.props.handleFilmChange(suggestionValue);
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Find Film',
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        onSuggestionSelected={this.onSuggestionSelected}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
export default connect(null, { handleFilmChange })(FilmSuggest);
