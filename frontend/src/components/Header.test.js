import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

function setup(text = 'test', showLogo = true) {
    const onToggleLogo = jest.fn();
    const component = shallow(
        <Header text={text} showLogo={showLogo} onToggleLogo={onToggleLogo}/>
    );

    return {
        component: component,
        action: onToggleLogo,
        button: component.find('button'),
        header: component.find('h2'),
        img: component.find('img')
    };
}

it('renders Create-React-App logo', () => {
    const {img} = setup();
    expect(img.hasClass('Header-logo')).toBeTruthy();
});

it('renders header text with no button click', () => {
    const {header, action} = setup('header text');
    expect(header.text()).toEqual('header text');
    expect(action).not.toBeCalled();
});

it('toggleHandler ran once on button click', () => {
    const {action, button} = setup();
    button.simulate('click');
    expect(action).toHaveBeenCalledTimes(1);
});

it('toggleHandler ran twice when button clicked twice', () => {
    const {action, button} = setup();
    button.simulate('click');
    button.simulate('click');
    expect(action).toHaveBeenCalledTimes(2);
});

it('renders app component without logo visible', () => {
    const {img} = setup('header text', false);
    expect(img).toHaveLength(0);

});