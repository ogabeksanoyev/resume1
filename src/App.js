import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Weather from './component/Weather';
import colors from './data/colors';
import Menu from './page/Menu';
import store from './redux/store';
import ThemeContext from './ThemeContext';

const AppWrapper = styled.div`

background-color: ${p => p.colors.hbgColor};
color:${p => p.colors.color}
`

function App() {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => theme === "dark" ? setTheme("light") : setTheme("dark");
    return (
        <AppWrapper colors={colors}>
            <ThemeContext.Provider value={{ theme, toggleTheme, colors: colors[theme] }}>
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
            </ThemeContext.Provider>
        </AppWrapper>
    );
}

export default App;