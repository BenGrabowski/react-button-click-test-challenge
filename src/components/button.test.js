import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const wrapper = shallow(<Button onClick={props.onClick} />);
        wrapper.find('button').simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
