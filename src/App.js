import { Route, Switch, Redirect } from 'react-router-dom';
import TabBar from './commit/TabBar/'
import login from '../src/pages/personal/login'
import Register from '../src/pages/personal/register'
import Category from '../src/pages/Health/category'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/TabBar' component={TabBar}></Route>
        <Route path='/category' component={Category}></Route>
        <Redirect to="/TabBar" />
      </Switch>
    </div>
  );
}

export default App;
