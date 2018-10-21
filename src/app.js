// JSX 

const app = {
  title: 'Indecision?',
  subtitle: 'What exactly is on your mind?',
  options: ['one'],
};

const template = (
  <div>
    <h1>{app.title.toLowerCase()}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length ? 'Here are your options' : 'No Options' }</p>
    <ol>
      <li>Item one</li>
      <li>Item 2wo</li>
    </ol>
  </div>
);

let count = 0;
function addOne() {
  console.log('addone');
}

function minusOne() {
  console.log('minusOne');
}

function reset() {
  console.log('reset');
}

const secondTemplate = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(secondTemplate, appRoot);
