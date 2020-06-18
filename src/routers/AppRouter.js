import React from "react"
import {
  Router,
  Switch,
  Route,
} from "react-router-dom"
import { createBrowserHistory } from 'history'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import DashboardPage from '../components/DashboardPage'
import LoginPage from '../components/LoginPage'
import ErrorDetailPage from '../components/ErrorDetailPage'
import AddErrorPost from '../components/AddErrorPost'
import Header from '../components/Header'
import ErrorsPublicPage from "../components/ErrorsPublicPage"
import ErrorEditPage from "../components/ErrorEditPage"

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ErrorsPublicPage} />
        <Route path="/post/:id" component={ErrorDetailPage} />
        <PublicRoute path="/login" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/add" component={AddErrorPost} />
        <PrivateRoute path="/edit/:id" component={ErrorEditPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
