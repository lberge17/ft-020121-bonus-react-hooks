import React, { useEffect } from 'react';
import { fetchSWAPI } from '../utils';
import { connect } from 'react-redux';
import { setPlanets } from '../../redux/planetsSlice';

function Planets({planets, setPlanets}) {

    useEffect(() => {
        console.log("mounting planets")
        fetchSWAPI("planets")
            .then(data => setPlanets(data))

        return () => {
            console.log("unmounting planets")
        }
    }, [setPlanets])

    return (
        <div>
            <h1>All Planets</h1>
            <ul>
                {planets.map((p, i) => <li key={i}>{p.name}</li>)}
            </ul>
        </div>
    );
};

function mapStateToProps(state){
    return {
        planets: state.planets
    }
}

function mapDispatchToProps(dispatch){
    return {
        setPlanets: (planets) => dispatch(setPlanets(planets))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planets)