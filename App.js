import React from 'react'
import { Router } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { pathParams } from './routes'

const history = new createBrowserHistory()

class App extends React.Component {
    renderRoutes = () => {
      const routes = pathParams.map(route => {
        return <Route key={route.key} path={route.path} component={route.component} exact strict/>
      })
      return routes
    }
    render() {
        return (
            <Router history={history}>
              <Switch>
                {this.renderRoutes()}
              </Switch>
            </Router>
          )
    }
}

export default App
export { App }