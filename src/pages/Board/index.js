import {Route, Switch} from "react-router-dom";
import BoardListPage from "./BoardListPage";

export default () => {

    return(
        <Switch>
            <Route path={"/board/list"} component={BoardListPage}></Route>
            <Route path={"/board/"} component={BoardListPage}></Route>
        </Switch>
    )
}
