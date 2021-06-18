import React, { useEffect } from 'react';
import { fetchSWAPI } from '../utils';
import { useSelector, useDispatch } from 'react-redux';
import { setPlanets } from '../../redux/planetsSlice';

function Planets() {
    const planets = useSelector(state => state.planets);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("mounting planets")
        fetchSWAPI("planets")
            .then(data => dispatch(setPlanets(data)))

        return () => {
            console.log("unmounting planets")
        }
    }, [])

    return (
        <div>
            <h1>All Planets</h1>
            <ul>
                {planets.map((p, i) => <li key={i}>{p.name}</li>)}
            </ul>
        </div>
    );
};

export default Planets