import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Counter from '../counter/Counter'

const Home = ({value, onIncrement, onDecrement}) => (
  <div>
    <Counter value={value} onIncrement={onIncrement} onDecrement={onDecrement} />
  </div>
);

Home.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  value: state.counter.value
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
