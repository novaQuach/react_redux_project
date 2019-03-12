// this function will be called at the application's entry point,  the store is configured when the app starts up

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
    }

// applying middleware will enhance our store, it takes all the middleware as agruments, here we are using the reduxImmutableStateInvaraint function from redux-immutable-state-invariant 