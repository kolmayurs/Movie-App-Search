import React from 'react';
import ReactDOM from 'react-dom';
import Favorite from './components/Favorite';
import App from './components/App';
import NoMatch from './components/NoMatch';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from './store';

const Index = () => (
  <Router>
    <Switch>
      <Route exact path="/favorite" component={Favorite} />
      <Route exact path="/" component={App} />
      <Route  path='*' exact={true} component={NoMatch} />
    </Switch>
  </Router>
)

ReactDOM.render(<Provider store={store}>
	<Index />
	</Provider>, document.getElementById('root'));
