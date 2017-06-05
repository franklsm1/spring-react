import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'

const mapStateToProps = (state) => ({
    text: state.app.text,
    showLogo: state.app.showLogo
});

const mapDispatchToProps = (dispatch) => ({
    onToggleLogo: () => dispatch({type: 'TOGGLE'}),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
