import { Route, Switch, Redirect, } from 'react-router-dom';
import React, { Suspense, lazy } from 'react'
// import routerMap from './routerMap'
// import FrontendAuth from './FrontendAuth'
// let TabBar = asyncComponent(() => { return import("./pages/Login/Login") })
const TabBar = lazy(() => import('./commit/TabBar/index.jsx'));
const login = lazy(() => import('../src/pages/personal/login'));
const Register = lazy(() => import('../src/pages/personal/register'));
const Category = lazy(() => import('../src/pages/Health/category'));
const personal = lazy(() => import('../src/pages/personal'));
const set = lazy(() => import('../src/pages/personal/set'));
const inquiry = lazy(() => import('../src/pages/inquiry'));
const Checkoperation = lazy(() => import('./pages/Checkoperation'));
const CheckbBottle = lazy(() => import('../src/pages/CheckbBottle'));
const CheckbHospital = lazy(() => import('../src/pages/CheckbHospital'));
const Search1 = lazy(() => import('./components/Search'));
const AskDoctor = lazy(() => import('../src/pages/AskDoctor'));
const CheckDisease = lazy(() => import('../src/pages/CheckDisease'));
const SearchContent = lazy(() => import('./pages/SearchContent'));
const Vaccine = lazy(() => import('./pages/Vaccine'));
const Aid = lazy(() => import('./pages/aid'));
const Summer = lazy(() => import('./pages/Summer'));
const ScienceVideo = lazy(() => import('./pages/ScienceVideo'));
// import TabBar from './commit/TabBar/index.jsx'
// import login from '../src/pages/personal/login'
// import Register from '../src/pages/personal/register'
// import Category from '../src/pages/Health/category'
// import personal from '../src/pages/personal'
// import set from '../src/pages/personal/set'
// import inquiry from '../src/pages/inquiry'
// import Checkoperation from './pages/Checkoperation'
// import CheckbBottle from '../src/pages/CheckbBottle'
// import CheckbHospital from '../src/pages/CheckbHospital'
// import Search1 from './components/Search';
// import AskDoctor from '../src/pages/AskDoctor';
// import CheckDisease from '../src/pages/CheckDisease';
// import SearchContent from './pages/SearchContent';



// ??????????????????????????????
// import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

function App() {
  return (
    <div className="App">

      {/* {path: "/", name: "TabBar", component: TabBar, }, */}
      {/* {path: "/login", name: "login", component: login, }, */}
      {/* {path: "/Register", name: "LogiRegistern", component: Register, }, */}
      {/* {path: "/Category", name: "Category", component: Category }, */}
      {/* {path: "/personal", name: "personal", component: personal }, */}
      {/* {path: "/set", name: "set", component: set }, */}


      {/* ?????? CacheRoute ?????? Route*/}
      {/* ?????? CacheSwitch ?????? Switch????????? Switch ???????????????????????????????????????????????????????????????????????? */}
      <Suspense fallback={<div><img style={{ width: '100%' }} className='bigimg' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1b2dac68974a58b3c9d24a249eee9c4c5d6615ed930f-XyisBg_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632409525&t=29fa96dbdfedbe6ac9e5a6af1cb541c6' /></div>}>
        <Switch>
          <Route path="/TabBar" component={TabBar}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={login}></Route>
          <Route path="/set" component={set}></Route>
          <Route path="/personal" component={personal}></Route>
          <Route path="/Category" component={Category}></Route>
          <Route path="/Checkoperation" component={Checkoperation}></Route>
          <Route path="/inquiry/:id" component={inquiry}></Route>
          <Route path="/CheckbBottle" component={CheckbBottle}></Route>
          <Route path="/CheckbHospital" component={CheckbHospital}></Route>
          <Route path="/Search" component={Search1}></Route>
          <Route path="/AskDoctor" component={AskDoctor}></Route>
          <Route path="/CheckDisease" component={CheckDisease}></Route>
          <Route path="/SearchContent" component={SearchContent}></Route>
          <Route path="/Vaccine" component={Vaccine}></Route>
          <Route path="/Aid" component={Aid}></Route>
          <Route path="/Summer" component={Summer}></Route>
          <Route path="/ScienceVideo" component={ScienceVideo}></Route>
          <Redirect to='/TabBar'></Redirect>
        </Switch>
      </Suspense>

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
