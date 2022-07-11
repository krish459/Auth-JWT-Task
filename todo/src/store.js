import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux' 

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { addItemReducer, getAllItemsReducer,editItemReducer , deleteItemReducer} from './reducers/itemReducer'

const finalReducer = combineReducers({
    getAllItemsReducer : getAllItemsReducer,
    addItemReducer : addItemReducer,
    editItemReducer : editItemReducer,
    deleteItemReducer : deleteItemReducer
})

const initialState = {
  

}

const composeEnhancers= composeWithDevTools({})
const store = createStore(finalReducer , initialState, composeEnhancers(applyMiddleware(thunk)))

export default store
