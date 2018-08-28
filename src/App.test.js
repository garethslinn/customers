import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('Customer list', () => {
    it('has correct caption', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('caption').text()).toEqual('Property details')
    });
    it('has received data', () => {
        const wrapper = shallow(<App />)
        const responseState = wrapper.state().response
        expect(responseState).not.toEqual(0)
    })
})

