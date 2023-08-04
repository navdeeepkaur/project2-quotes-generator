import logo from './logo.svg';
import './App.css';
import Quotes from './quotes';

function App() {
  return (
    <div className="App">
      <div className='git'>
      <a href="https://github.com/navdeeepkaur/project2-quotes-generator" target="_blank"><i class="fa-brands fa-github"></i></a>
      </div>
      <Quotes/>
    </div>
  );
}

export default App;
