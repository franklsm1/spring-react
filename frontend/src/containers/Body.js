import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Counter from '../counter/Counter'

const Body = ({value, onIncrement, onDecrement}) => (
    <div>
        <Counter value={value} onIncrement={onIncrement} onDecrement={onDecrement}/>
    </div>
);

Body.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    value: state.app.value
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch({type: 'INCREMENT'}),
    onDecrement: () => dispatch({type: 'DECREMENT'})
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body);
