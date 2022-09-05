import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';

import bookReducer from "./book-reducer";
import catalogReducer from "./catalog-reducer";

let reducers = combineReducers({
    Catalog: catalogReducer,
    Book: bookReducer
})

type RootReducerType = typeof reducers

export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

//@ts-ignore
window.store = store;

export default store;