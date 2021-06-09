import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import { fetchSWAPI } from '../utils';

export default function Characters() {
    const [characters, setCharacters] = useState([])

    return (
        <div>
            <h1>All Characters</h1>
            <ul>
                {characters.map((c, idx) => <CharacterCard key={idx} {...c} />)}
            </ul>
        </div>
    );
};