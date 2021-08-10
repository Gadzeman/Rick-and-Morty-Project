import {Dispatch} from "redux";
import {CharactersActionTypes, IResults, TCharactersAction} from "../../types-and-interfaces";
import axios from "axios";
import {url} from "../../services/characters";


export const fetchCharacters = (page: number) => async (dispatch: Dispatch<TCharactersAction>) => {
    try {
        dispatch({type: CharactersActionTypes.FETCH_CHARACTERS})
        const resp = await axios.get<IResults>(url + page)
        dispatch({type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS, payload: resp.data.results})
    } catch (e) {
        dispatch({type: CharactersActionTypes.FETCH_CHARACTERS_ERROR, payload: "Error"})
    }
}
export const setCharactersPage = (page: number): TCharactersAction => {
    return {type: CharactersActionTypes.SET_PAGE_CHARACTERS, payload: page}
}