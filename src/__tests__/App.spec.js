import React from 'react'
import { shallow } from 'enzyme'
import App from '../components/App'

describe('<App />', () => {
  let app

  beforeAll(() => {
    app = shallow(<App />)
  })

  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })

  it('renders the Header', () => {
    expect(app.find('Header').length).toEqual(1)
  })
})
