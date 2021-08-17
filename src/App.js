import { Route, Switch,Redirect } from 'react-router-dom';
import TabBar from './commit/TabBar/index.jsx'
import login from '../src/pages/personal/login'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={login}></Route>
        <Route path='/TabBar' component={TabBar}></Route>
        <Redirect to="/TabBar"/>
      </Switch>
    </div>
  );
}

export default App;
