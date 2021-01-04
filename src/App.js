import logo from './logo.svg';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Link from './Link';

function App() {

  
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Switch>
            <Route exact path='/' component={() => <Link destination='/next'/>} />
            <Route path='/next' component={() => <Link destination='/'/>} />
          </Switch>
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
