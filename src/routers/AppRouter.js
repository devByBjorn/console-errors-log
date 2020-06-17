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
import EditErrorPost from '../components/EditErrorPost'
import Header from '../components/Header'
import ConsoleErrorsPage from "../components/ConsoleErrorsPage"

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <PublicRoute exact path="/" component={ConsoleErrorsPage} />
        <Route path="/post/:id" component={ErrorDetailPage} />
        <PublicRoute path="/login" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/add" component={AddErrorPost} />
        <PrivateRoute path="/edit/:id" component={EditErrorPost} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
