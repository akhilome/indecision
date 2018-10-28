import React from 'react';

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
    if (!error) e.target.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input name="option" type="text"/>
          <input type="submit" value="Add Option"/>
        </form>
      </div>
    );
  }
}

export default AddOption;
