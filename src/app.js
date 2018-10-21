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

const user = {
  name: 'Kizito Akhilome',
  age: '22',
  location: 'Lagos',
};

function getLocation(location) {
  if (location) return <p>Location: {location}</p>;
}

const secondTemplate = (
  <div>
    <h1>{user.name ? user.name : 'Anon'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
