// JSX 
const template = (
  <div>
    <h1>This is a heading</h1>
    <p>This is jsx from src/app.js</p>
    <ol>
      <li>Item one</li>
      <li>Item 2wo</li>
    </ol>
  </div>
);

const secondTemplate = (
  <div>
    <h1>Kizito Akhilome</h1>
    <p>Age: 22</p>
    <p>Location: Lagos</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(secondTemplate, appRoot);
