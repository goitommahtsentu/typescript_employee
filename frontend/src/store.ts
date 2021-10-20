import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    createEmployeeReducer, deleteEmployeeReducer,
    employeeEditReducer,
    employeeListReducer,
    getEmployeeByIdReducer
} from "./reducer/employeeReducer";


export type RootState = ReturnType<typeof store.getState>

const reducer = combineReducers({
    createEmployeeReducer:createEmployeeReducer,
    employeeListReducer:employeeListReducer,
    getEmployeeByIdReducer:getEmployeeByIdReducer,
    employeeEditReducer:employeeEditReducer,
    deleteEmployeeReducer:deleteEmployeeReducer
})



const initialState = {

}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
