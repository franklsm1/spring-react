import React, {Component} from 'react'
import logo from '../data/compozed.jpg';

export default class Header extends Component {
    createLogo(showLogo) {
        let logoElement;
        if (showLogo) {
            logoElement = <img style={this.headerLogoStyle} src={logo} className="Header-logo" alt=""/>;
        }
        return logoElement;
    }

    get headerStyle() {
        return {
            height: '150px',
            padding: '20px',
            textAlign: 'center'
        };
    }

    get headerLogoStyle() {
        return {
            height: '80px'
        };
    }

    render() {
        const {text, showLogo, onToggleLogo} = this.props;
        return (
            <div style={this.headerStyle}>
                {this.createLogo(showLogo)}
                <h2 >{text}</h2>
                <button onClick={onToggleLogo}>Toggle Logo</button>
            </div>
        );
    }
}
