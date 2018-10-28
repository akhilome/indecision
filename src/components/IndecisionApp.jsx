import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

class IndecisionApp extends React.Component {
  state = { options: [] };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }));
  };

  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randNum]);
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.includes(option)) {
      return 'That option already exists!';
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      console.error(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default IndecisionApp;
