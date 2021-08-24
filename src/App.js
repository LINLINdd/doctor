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
      <CacheSwitch>
        <CacheRoute path="/TabBar" component={TabBar}></CacheRoute>
        <CacheRoute path="/register" component={Register}></CacheRoute>
        <CacheRoute path="/login" component={login}></CacheRoute>
        <CacheRoute path="/set" component={set}></CacheRoute>
        <CacheRoute path="/personal" component={personal}></CacheRoute>
        <CacheRoute path="/Category" component={Category}></CacheRoute>
        <CacheRoute path="/Search" component={Search1}></CacheRoute>
        <CacheRoute path="/AskDoctor" component={AskDoctor}></CacheRoute>
        <CacheRoute path="/CheckDisease" component={CheckDisease}></CacheRoute>
        <CacheRoute path="/SearchContent" component={SearchContent}></CacheRoute>

        <Redirect to='/TabBar'></Redirect>
      </CacheSwitch>

      
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
