import TabBar from './commit/TabBar/'
import login from '../src/pages/personal/login'
import Register from '../src/pages/personal/register'
import Category from '../src/pages/Health/category'
import personal from '../src/pages/personal'
import set from '../src/pages/personal/set'

export default [
    { path: "/", name: "TabBar", component: TabBar, },
    { path: "/login", name: "login", component: login, },
    { path: "/Register", name: "LogiRegistern", component: Register, },
    { path: "/Category", name: "Category", component: Category },
    { path: "/personal", name: "personal", component: personal },
    { path: "/set", name: "set", component: set },
];