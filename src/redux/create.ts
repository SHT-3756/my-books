import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSagaMiddelware from "redux-saga";
import rootSaga from './modules/rootSaga';

const create = () => {
    const sagaMiddelware = createSagaMiddelware();
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddelware)))
    
    sagaMiddelware.run(rootSaga);
    return store;
};

export default create;