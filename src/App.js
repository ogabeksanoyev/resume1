import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Weather from './component/Weather';
import Menu from './page/Menu';
import store from './redux/store';


function App() {
    return (
        <Provider store={store}>

            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="solution/solution" />
                    </Route>
                    <Route path="/solution/weather">
                        <Weather />
                    </Route>
                    <Route path="/solution/:menu" >
                        <Menu />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;