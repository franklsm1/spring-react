import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './Header';

it('renders Create-React-App logo', () => {
    const app = shallow(<Header text='' showLogo={true} onToggleLogo={()=> true}/>);
    expect(app.find('img').hasClass('Header-logo')).toBeTruthy();
});

it('renders header text', () => {
    const app = shallow(<Header text='header text' showLogo={true} onToggleLogo={()=> true}/>);
    expect(app.find('h2').text()).toEqual('header text');
});

it('hides logo on button click', () => {
    const toggleHandler = jest.fn();
    const app = shallow(<Header text='' showLogo={true} onToggleLogo={toggleHandler}/>);
    app.find('button').simulate('click');
    expect(toggleHandler).toHaveBeenCalledTimes(1);
});

it('toggle logo on button click', () => {
    const toggleHandler = jest.fn();
    const app = shallow(<Header text='' showLogo={true} onToggleLogo={toggleHandler}/>);
    app.find('button').simulate('click');
    app.find('button').simulate('click');
    expect(toggleHandler).toHaveBeenCalledTimes(2);
});

it('renders app component without logo visible', () => {
    const app = shallow(<Header text='Test Header String' showLogo={false} onToggleLogo={()=> true}/>);
    expect(app.find('img')).toHaveLength(0);

});