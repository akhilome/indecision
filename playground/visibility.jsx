let isClicked = false;

const toggleClick = () => {
  isClicked = !isClicked;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility</h1>
      <button onClick={toggleClick}>{isClicked ? 'hide details' : 'show details'}</button>
      {isClicked && <p>Haha! You found me!</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
render();
