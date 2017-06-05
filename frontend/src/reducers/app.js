export default (state = {}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                value: state.value + 1,
                text: state.text,
                showLogo: state.showLogo
            };
        case 'DECREMENT':
            return {
                value: state.value - 1,
                text: state.text,
                showLogo: state.showLogo
            };
        case 'TOGGLE':
            return {
                value: state.value,
                text: state.text,
                showLogo: !state.showLogo
            };
        default:
            return state;
    }
};
