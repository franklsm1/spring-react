const initialState = {
  value: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      state.value += 1;
      return state;
    case 'DECREMENT':
      state.value -= 1;
      return state;
    default:
      state.value += 5;
      return state;
  }
};
