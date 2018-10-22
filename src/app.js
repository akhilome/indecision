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
      <p>{app.options.length}</p>
      <button onClick={emptyOptions}>remove all</button>
      <ol>
        <li>Item one</li>
        <li>Item 2wo</li>
      </ol>
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

const appRoot = document.getElementById('app');
renderer();
