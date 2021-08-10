import React from 'react';
import "./Character.css"
import {ICharacterComponent} from "../../../../types-and-interfaces";

export default function Character (props: ICharacterComponent)  {
    return (
        <div>
            <p>{props.character.name}</p>
        </div>
    );
};
