import { Route, Switch} from 'react-router-dom';

import Home from '../pages/Home/Home';
import User from '../pages/User/User';
import NotFound from '../pages/NotFound/NotFound'

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path:"/user",
        exact:true,
        component:User

    }
]

// 路由渲染函数
const Routes = ()=>{
    return (
        <Switch>
            {routes.map(item => {
                const {path,exact,component} = item;
                return <Route path={path} exact={exact} component={component} key={component} />
            })}
            <Route component={NotFound}></Route>
        </Switch>
    )
}
export default Routes