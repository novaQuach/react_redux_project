// This is the root reducer, by convention it is called "index.js" in the reducers folder
// the root reducer will contain all the states returned by the individual reducers.
import { combineReducers } from 'redux';
// nb: that courses above is a name we choose to reference it at the bottom, so chosoe one that makes sense, whats importatnt is that we reference the reducer name correctly
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses: courses,
});

export default rootReducer;
