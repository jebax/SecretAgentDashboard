import React from 'react'
import { shallow } from 'enzyme'
import Header from '../components/Header'

describe('<Header />', () => {
  let header

  beforeAll(() => {
    header = shallow(<Header />)
  })

  it('renders correctly', () => {
    expect(header).toMatchSnapshot()
  })

  it('renders a title', () => {
    const title = header.find('#dashboardTitle')
    expect(title.text()).toEqual('Secret Agent Dashboard')
  })
})
