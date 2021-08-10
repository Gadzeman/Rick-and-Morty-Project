import {CharactersActionTypes, ICharactersState, TCharactersAction} from "../../types-and-interfaces";

const initialState: ICharactersState = {
    characters: [],
    loading: false,
    error: null,
    page: 1,
}
export const charactersReducer = (state: ICharactersState = initialState, action: TCharactersAction): ICharactersState => {
    switch (action.type) {
        case CharactersActionTypes.FETCH_CHARACTERS: {
            return {...state, loading: true}
        }
        case CharactersActionTypes.FETCH_CHARACTERS_SUCCESS: {
            return {...state, loading: false, characters: action.payload}
        }
        case CharactersActionTypes.FETCH_CHARACTERS_ERROR: {
            return {...state, loading: false, error: action.payload}
        }
        case CharactersActionTypes.SET_PAGE_CHARACTERS: {
            return {...state, page: action.payload}
        }
        default: {
            return state
        }
    }
}