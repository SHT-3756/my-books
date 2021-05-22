import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSagaMiddelware from "redux-saga";
import rootSaga from './modules/rootSaga';
import {routerMiddleware} from 'connected-react-router';
import history from '../history';

const create = () => {
    const sagaMiddelware = createSagaMiddelware();
    const store = createStore(
        reducer(history), 
        composeWithDevTools(
            applyMiddleware(sagaMiddelware, routerMiddleware(history))
        )
    );
    
    sagaMiddelware.run(rootSaga);
    return store;
};

export default create;