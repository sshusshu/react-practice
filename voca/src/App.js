import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import CreateDay from './component/CreateDay';
import CreateWord from './component/CreateWord';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <DayList />
          </Route>
          <Route path='/day/:day'>
            <Day />
          </Route>
          <Route path='/create_word'>
            <CreateWord/>
          </Route>
          <Route path='/create_day'>
            <CreateDay/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
