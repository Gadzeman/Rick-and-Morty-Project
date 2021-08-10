interface ILocation {
    name: string,
    url?: string
}
export interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    location: ILocation,
    image: string,
    episode: any[]
}
export interface IResults {
    results: ICharacter[]
}
export interface ICharacterComponent {
    character: ICharacter
}
export interface ICharactersState {
    characters: any[],
    loading: boolean,
    error: null | string,
    page: number,
}
export enum CharactersActionTypes {
    FETCH_CHARACTERS = "FETCH_CHARACTERS",
    FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS",
    FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR",
    SET_PAGE_CHARACTERS = "SET_PAGE_CHARACTERS"
}
interface IFetchCharacters {
    type: CharactersActionTypes.FETCH_CHARACTERS
}
interface IFetchCharactersSuccess {
    type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS
    payload: any[]
}
interface IFetchCharactersError {
    type: CharactersActionTypes.FETCH_CHARACTERS_ERROR
    payload: string
}
interface ISetPageCharacters {
    type: CharactersActionTypes.SET_PAGE_CHARACTERS
    payload: number
}
export type TCharactersAction =
    IFetchCharacters |
    IFetchCharactersSuccess |
    IFetchCharactersError |
    ISetPageCharacters