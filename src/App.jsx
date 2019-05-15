import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

const App = () => {
    return (
        <main>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PageOne} />
                    <Route exact path="/:id/details" component={PageTwo} />
                </Switch>
            </BrowserRouter>
        </main>
    );
}

export default App;