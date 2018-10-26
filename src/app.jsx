class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = { options: props.options };
  }

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

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }));
  }

  handlePick() {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randNum]);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.includes(option)) {
      return 'That option already exists!';
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
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

IndecisionApp.defaultProps = { options: [] };

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = { title: 'Indecision App' };

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >What should I do?</button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map(option => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}</p>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >remove</button>
    </div>
  );
};

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
