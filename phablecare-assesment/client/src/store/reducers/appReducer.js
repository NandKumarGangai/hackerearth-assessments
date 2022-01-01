import * as Actions from "../actionTypes";

const messageReducer = (state = {items: []}, { type, payload }) => {
    switch (type) {
        case Actions.SET_TDEE:
            return { ...state, tdeeScore: payload };
        case Actions.FETCH_ITEMS: {

            const newState = [...payload];
            const totalCalories = newState.reduce((count, item) => count + Number(item.calories), 0);

            return { ...state, items: newState, totalCalories: totalCalories };
        }
        case Actions.ADD_ITEM: {
            const currentState = state.items;
            const newState = [ ...currentState, ...payload];
            const totalCalories = newState.reduce((count, item) => count + Number(item.calories), 0);

            return { ...state, items: newState, totalCalories: totalCalories };
        }
        case Actions.REMOVE_ITEM: {
            const newState = [...payload];
            const totalCalories = newState.reduce((count, item) => count + Number(item.calories), 0);

            return { ...state, items: newState, totalCalories: totalCalories };
        }

        default:
            return state;
    }
};

export default messageReducer;