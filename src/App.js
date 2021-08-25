import { Route, Switch, Redirect,} from 'react-router-dom';
import routerMap from './routerMap'
import FrontendAuth from './FrontendAuth'

import TabBar from './commit/TabBar/index.jsx'
import login from '../src/pages/personal/login'
import Register from '../src/pages/personal/register'
import Category from '../src/pages/Health/category'
import personal from '../src/pages/personal'
import set from '../src/pages/personal/set'
import Search1 from './components/Search';
import AskDoctor from '../src/pages/AskDoctor';
import CheckDisease from '../src/pages/CheckDisease';
import SearchContent from './pages/SearchContent';



// 带缓存功能的路由组件
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

function App() {
  return (
    <div className="App">
      
      {/* {path: "/", name: "TabBar", component: TabBar, }, */}
      {/* {path: "/login", name: "login", component: login, }, */}
      {/* {path: "/Register", name: "LogiRegistern", component: Register, }, */}
      {/* {path: "/Category", name: "Category", component: Category }, */}
      {/* {path: "/personal", name: "personal", component: personal }, */}
      {/* {path: "/set", name: "set", component: set }, */}


      {/* 使用 CacheRoute 替换 Route*/}
      {/* 使用 CacheSwitch 替换 Switch（因为 Switch 组件只保留第一个匹配状态的路由，卸载掉其他路由） */}
      <Switch>
        <Route path="/TabBar" component={TabBar}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={login}></Route>
        <Route path="/set" component={set}></Route>
        <Route path="/personal" component={personal}></Route>
        <Route path="/Category" component={Category}></Route>
        <Route path="/Search" component={Search1}></Route>
        <Route path="/AskDoctor" component={AskDoctor}></Route>
        <Route path="/CheckDisease" component={CheckDisease}></Route>
        <Route path="/SearchContent" component={SearchContent}></Route>

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
