import './App.css';
import logo from './logo.png';
import dashboard from './dashboard.jpg';

const feature = [
  "{logo}","{dashboard}"
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>ROME</title>
        <nav className='navbar'>
          <div className='logo'>
            <img src={logo} alt='logo'></img>
            <h1 className='rome'>ROME</h1>
          </div>
          <ul className='nav-list'>
            <li className='App-link'>
              <a href='#Home'>Home</a>
            </li>
            <li>
              <a href='#Features'>Features</a>
            </li>
            <li>
              <a href='#contacts'>Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className='dashboard'>
        <div>
        <h1 className='title1'> ROME </h1>
        <p className='description'>Rome is a simple virtual pet that you can talk to or play with when you feeling lonely or sad and need someone to talk to or have fun with.</p>
        <button className='btn btn-sm'>Start using Rome Now</button>
        </div>
        <div className='image'>
          <img src={dashboard} alt='rome'/>
        </div>
      </section>
      <section className='features'>
        <h3>Features</h3>
        <div className='container'>
          {feature.map(src => (
            <div key={src}
            className="card"
            ></div>
          ))}
        </div>
      </section>
      
      
    </div>
  );
}

export default App;
