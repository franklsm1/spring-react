import React from 'react'

const mapStateToProps = (state) => ({
    text: state.app.text,
    showLogo: state.app.showLogo,
    value: state.app.value
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch({type: 'INCREMENT'}),
    onDecrement: () => dispatch({type: 'DECREMENT'}),
    onToggleLogo: () => dispatch({type: 'TOGGLE'})
});

module.exports = {
    mapStateToProps: mapStateToProps,
    mapDispatchToProps: mapDispatchToProps
};