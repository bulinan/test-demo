import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/home';

export default function RouterIndex(){
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home}></Route>                                         
            </Switch>
        </Router>
    )
}