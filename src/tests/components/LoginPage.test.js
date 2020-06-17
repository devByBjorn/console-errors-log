import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent, cleanup, screen, getByTestId } from '@testing-library/react'

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import LoginPage from '../../components/LoginPage'

const mockStore = configureMockStore([thunk])

describe('LoginPage', () => {
  it('should render LoginPage component', () => {
    const store = mockStore({})
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <LoginPage startLogin={() => { }} />
      </Provider>
      , div)
  })


  it('should login via firebase on click', () => {
    const store = mockStore({})
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    )
    fireEvent.click(screen.getByTestId('login'))
  })


  afterEach(cleanup)
})

