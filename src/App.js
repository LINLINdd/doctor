import { Route, Switch, Redirect } from 'react-router-dom';
import routerMap from './routerMap'
import FrontendAuth from './FrontendAuth'

import TabBar from './commit/TabBar/index.jsx'
import login from '../src/pages/personal/login'
import Register from '../src/pages/personal/register'
import Category from '../src/pages/Health/category'
import personal from '../src/pages/personal'
import set from '../src/pages/personal/set'
import inquiry from '../src/pages/inquiry'
import CheckDisease from '../src/pages/CheckDisease'
import CheckbBottle from '../src/pages/CheckbBottle'
function App() {
  return (
    <div className="App">
      {/* {path: "/", name: "TabBar", component: TabBar, }, */}
      {/* {path: "/login", name: "login", component: login, }, */}
      {/* {path: "/Register", name: "LogiRegistern", component: Register, }, */}
      {/* {path: "/Category", name: "Category", component: Category }, */}
      {/* {path: "/personal", name: "personal", component: personal }, */}
      {/* {path: "/set", name: "set", component: set }, */}
      <Switch>
        <Route path="/TabBar" component={TabBar}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={login}></Route>
        <Route path="/set" component={set}></Route>
        <Route path="/personal" component={personal}></Route>
        <Route path="/Category" component={Category}></Route>
        <Route path="/CheckDisease" component={CheckDisease}></Route>
        <Route path="/inquiry/:id" component={inquiry}></Route>
        <Route path="/CheckbBottle" component={CheckbBottle}></Route>
        <Redirect to='/TabBar'></Redirect>
      </Switch>
      {/* <Route>
        <div>
          <Switch>
            <FrontendAuth routerConfig={routerMap} />
          </Switch>
        </div>
      </Route> */}
    </div>
  );
}

export default App;
