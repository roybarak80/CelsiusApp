import {combineReducers} from 'redux';
import { discoverReducer } from '../../routes/Discover/store/reducer';

const reducers = combineReducers({
    discover: discoverReducer
})

export default reducers;