import { debug } from 'util';

// in the params we are setting state to an empty array, initalizing the state, makes it easier by using the spread operator to spread out the conents once state gets populated
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            debugger;
            return [...state, Object.assign({}, action.course)];
        // returning an array, where the current state is spread into it, and then by using object assign we have the updated course state piece, so this array will contain the mosted updated state.
        default:
            // always have a default, since there may be multiple reducers that are handling actions if this reducer is not handling the specific action, then it'll just return the current state
            return state;
    }
}
