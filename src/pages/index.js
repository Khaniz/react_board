import {BrowserRouter, Route, Switch} from "react-router-dom";
import HelloPage from "./HelloPage";
import Page404 from "./Page404";
import MainPage from "./MainPage";
import Portfolio from "./Portfolio";
import Board from "./Board";


export default () => {
    return(
        <Switch>
            <Route path="/hello" component={HelloPage}></Route>
            <Route path="/main" component={MainPage}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/board" component={Board}></Route>
            <Route path="/" component={HelloPage} exact={true}></Route>
            <Route path="" component={Page404}></Route>


        </Switch>


    )
}