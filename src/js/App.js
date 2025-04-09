import van from '../img/van.png';
import '../style/App.scss';

function Header() {
  return (
    <div className='container-fluid'>
      <div className="van-container">
        <img className="van" alt="side view of a ford van" src={van}></img>
      </div>
      <div className="title">
        <h1 className="">Revelstoke ride share</h1>
      </div>
      <div className="van-fade"></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="container-fluid">
        <Header />
      </header>
    </div>
  );
}

export default App;
