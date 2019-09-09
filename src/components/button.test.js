import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const wrapper = shallow(<Button onClick={() => console.log('Click')} />);
        wrapper.find('button').simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
