import {Route, Switch} from "react-router-dom";
import BoardListPage from "./BoardListPage";
import BoardRegisterPage from "./BoardRegisterPage";

export default () => {

    return(
        <Switch>
            <Route path={"/board/list"} component={BoardListPage}></Route>
            <Route path={"/board/register"} component={BoardRegisterPage}></Route>
            <Route path={"/board/"} component={BoardListPage}></Route>
        </Switch>
    )
}
