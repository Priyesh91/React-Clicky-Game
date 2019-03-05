import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const Root = () => (
  <React.Fragment>
    <Router>
    <div>
     
    
      <Switch>
        <Route component={App} exact path="/" />
         
      </Switch>
    </div>
    </Router>
  </React.Fragment>
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
