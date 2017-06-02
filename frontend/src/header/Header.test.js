import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './Header';

it('renders Create-React-App logo', () => {
    const app = shallow(<Header text='' />);
    expect(app.find('img').hasClass('Header-logo')).toBeTruthy();
});

it('renders header text', () => {
    const app = shallow(<Header text='header text' />);
    expect(app.find('h2').text()).toEqual('header text');
});

it('hides logo on button click', () => {
    const app = shallow(<Header text='' />);
    app.find('button').simulate('click');
    expect(app.find('img')).toHaveLength(0);
});

it('toggle logo on button click', () => {
    const app = shallow(<Header text='' />);
    app.find('button').simulate('click');
    app.find('button').simulate('click');
    expect(app.find('img')).toHaveLength(1);
    expect(app.find('img').hasClass('Header-logo')).toBeTruthy();
});

it('renders app component with logo visible', () => {
    const app = renderer.create(<Header text='Test Header String!' />).toJSON();
    expect(app).toMatchSnapshot();
});

it('renders app component without logo visible', () => {
    const app = renderer.create(<Header text='Test Header String' />);
    app.getInstance().toggleLogo();
    expect(app.toJSON()).toMatchSnapshot();
});