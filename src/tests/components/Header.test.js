import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent, cleanup, getByTestId, screen } from '@testing-library/react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Header from '../../components/Header'

const mockStore = configureMockStore([thunk])


describe('Header', () => {
  it('should render Header component', () => {
    const store = mockStore({})
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <Header startLogout={() => { }} />
      </Provider>
      ,
      div)
  })

  it('should find h1', () => {
    const store = mockStore({})

    const { getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    const heading = getByTestId('main-heading')
    expect(heading.innerHTML).toBe('Bloggen')
  })

  it('should logut from firebase on click', () => {
    const store = mockStore({})

    render(
      <Provider store={store}>
        <Header startLogout={() => { }} />
      </Provider>
    )

    fireEvent.click(screen.getByTestId('logout'))

  })

  afterEach(cleanup)
})

