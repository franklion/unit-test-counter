import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter'

describe('測試<Counter />', () => {
    const wrapper = shallow(<Counter />)
    // console.log(wrapper.debug())

    it('1. 包含一個樣式名為count的節點', () => {
        expect(wrapper.find('.count').exists()).toBeTruthy()
    })

    it('2. 包含一個樣式名為btn-inc的節點', () => {
        expect(wrapper.find('.btn-inc').exists()).toBeTruthy()
    })

    it('3. 包含一個樣式名為btn-dec的節點', () => {
        expect(wrapper.find('.btn-dec').exists()).toBeTruthy()
    })

    it('4. counter 初始值為零', () => {
        expect(wrapper.state('counter')).toBe(0)
    })

    it('5. 點擊+1按鈕', () => {
        wrapper.find('.btn-inc').simulate('click')
        expect(wrapper.state('counter')).toBe(1)
    })

    it('6. 點擊-1按鈕', () => {
        wrapper.find('.btn-dec').simulate('click')
        expect(wrapper.state('counter')).toBe(0)
    })
})