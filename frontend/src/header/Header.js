import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import logo from './compozed.jpg';
import './header.css';

function createLogo(showLogo) {
    let logoElement;
    if (showLogo) {
        logoElement = <img src={logo} className="Header-logo" alt=""/>;
    }
    return logoElement;
}

export default class Header extends Component{
    render() {
        const {showLogo, text, onToggleLogo} = this.props;

        return (
            <div className="Header">
                {createLogo(showLogo)}
                <h2>{text}</h2>
                <button onClick={onToggleLogo}>Toggle Logo</button>
            </div>
        );
    }
}

// Header.propTypes = {
//     text: PropTypes.string.isRequired,
//     showLogo: PropTypes.bool.isRequired,
//     onToggleLogo: PropTypes.func.isRequired
// };