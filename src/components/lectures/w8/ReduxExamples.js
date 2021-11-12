import React from "react";
import Hello from "./Hello";
import {combineReducers, createStore} from "redux";
import helloReducer from "./helloReducer";
import {Provider} from "react-redux";
import Counter from "./Counter";
import counterReducer from "./counterReducer";
import BankAccount from "./BankAccount";
import bankAccountReducer from "./bankAccountReducer";
import Todos from "./Todos";
import todosReducer from "./todosReducer";

const mainReducer = combineReducers({
    hello: helloReducer,
    count: counterReducer,
    account: bankAccountReducer,
    todos: todosReducer
})
const store = createStore(mainReducer);

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h1>My app</h1>
                <Todos/>
                <BankAccount/>
                <Counter/>
                <Hello/>
            </div>
        </Provider>
    )
}
export default ReduxExamples;