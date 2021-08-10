import {combineReducers} from "redux";
import {charactersReducer} from "./characters-reducer";


export const combinedReducers = combineReducers({
    characters: charactersReducer
})

export type combinedReducers = ReturnType<typeof combinedReducers>