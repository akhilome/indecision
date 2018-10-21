// JSX 

const app = {
  title: 'Indecision?',
  subtitle: 'What exactly is on your mind?',
};

const template = (
  <div>
    <h1>{app.title.toLowerCase()}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item 2wo</li>
    </ol>
  </div>
);

const user = {
  name: 'Kizito Akhilome',
  age: '22',
  location: 'Lagos',
};

const secondTemplate = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
