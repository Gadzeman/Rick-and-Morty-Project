import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/use-typed-selector";
import {useAction} from "../../../hooks/use-action";
import Character from "./Character/Character";

const Characters: FC = () => {
    const {characters, page, error, loading} = useTypedSelector(store => store.characters)
    const {fetchCharacters, setCharactersPage} = useAction()
    useEffect(() => {
        fetchCharacters(page)
    }, [page])
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <button
                onClick={() => setCharactersPage(page - 1)}
                style={{opacity: page === 1 ? "0.5" : "1", pointerEvents: page === 1 ? "none" : "all"}}
            >prev</button>
            <button onClick={() => setCharactersPage(page + 1)}>next</button>
            {characters.map(character => <Character character={character} key={character.id}/>)}
        </div>
    );
};

export default Characters;