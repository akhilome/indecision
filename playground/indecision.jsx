// JSX 
const app = {
  title: 'Indecision?',
  subtitle: 'What exactly is on your mind?',
  options: [],
};

const renderer = () => {
  const template = (
    <div>
      <h1>{app.title.toLowerCase()}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}

      <p>{app.options.length ? 'Here are your options' : 'No Options' }</p>
      <ol>{ app.options.map((option, i) => <li key={i}>{option}</li>) }</ol>

      <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
      <button onClick={emptyOptions}>remove all</button>
      
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

const onFormSubmit = (e) => {
  e.preventDefault();
  if (!e.target.option.value) return;

  app.options.push(e.target.option.value);
  e.target.option.value = '';
  renderer();
}

const emptyOptions = () => {
  app.options = [];
  renderer();
}

const makeDecision = () => {
  const randDecisionIndex = Math.floor(Math.random() * app.options.length);
  alert(app.options[randDecisionIndex]);
}

const appRoot = document.getElementById('app');
renderer();
