import { Route, Switch,Redirect } from 'react-router-dom';
import TabBar from './commit/TabBar/index.jsx'
import login from '../src/pages/personal/login'
import Search from '../src/pages/Search'
import Epidemic from '../src/pages/Epidemic'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={login}></Route>
        <Route path='/TabBar' component={TabBar}></Route>
        <Route path='/Search' component={Search}></Route>
        <Route path='/Epidemic' component={Epidemic}></Route>
       
        <Redirect to="/TabBar"/>
      </Switch>
    </div>
  );
}

export default App;
