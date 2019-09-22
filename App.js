import React from 'react'
import { Router } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { SignInPage, SignUpPage, MoviesListPage, Description } from './src/pages'

const history = new createBrowserHistory()

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
              <Switch>
                <Route key={'home'} path="/" component={SignInPage} exact strict/>
                <Route key={'signin'} path="/signin" component={SignInPage} exact strict/>
                <Route key={'signup'} path="/signup" component={SignUpPage} exact strict />
                <Route key={'moviesList'} path="/moviesList" component={MoviesListPage} exact strict />
                <Route key={'description'} path="/description" component={Description} exact strict />
              </Switch>
            </Router>
          )
    }
}

export default App
export { App }