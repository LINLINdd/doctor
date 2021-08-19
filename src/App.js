import { Route, Switch, Redirect } from 'react-router-dom';
import routerMap from './routerMap'
import FrontendAuth from './FrontendAuth'

import TabBar from './commit/TabBar/index.jsx'

function App() {
  return (
    <div className="App">
      {/* {path: "/", name: "TabBar", component: TabBar, },
      {path: "/login", name: "login", component: login, },
      {path: "/Register", name: "LogiRegistern", component: Register, },
      {path: "/Category", name: "Category", component: Category },
      {path: "/personal", name: "personal", component: personal },
      {path: "/set", name: "set", component: set }, */}
      <Route path="/TabBar" component={TabBar}></Route>
      <Redirect to='/TabBar'></Redirect>
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
