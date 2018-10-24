class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClick = this.toggleClick.bind(this);
    this.state = {
      isClicked: false
    };
  }

  toggleClick() {
    this.setState((prevState) => {
      return {
        isClicked: !prevState.isClicked
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.toggleClick}>{this.state.isClicked ? 'hide details' : 'show details'}</button>
        {this.state.isClicked && <p>Haha! Found me!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
