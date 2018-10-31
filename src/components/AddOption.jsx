import React from 'react';

class AddOption extends React.Component {
  state = { error: undefined };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
    if (!error) e.target.option.value = '';
  };

  render() {
    return (
      <div>
        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
        <form className='add-option' onSubmit={this.handleAddOption}>
          <input className='add-option__input' name="option" type="text"/>
          <input className='button' type="submit" value="Add Option"/>
        </form>
      </div>
    );
  }
}

export default AddOption;
