import React, { useEffect } from 'react';
import { fetchSWAPI } from '../utils';
import { connect } from 'react-redux';
import { setStarships } from '../../redux/starshipsSlice';

function Starships({starships, setStarships}) {

    useEffect(() => {
        console.log("mounting starships")
        fetchSWAPI("starships")
            .then(data => setStarships(data))

        return () => {
            console.log("unmounting starships")
        }
    }, [setStarships])

    return (
        <div>
            <h1>All Starships</h1>
            <ul>
                {starships.map((s, idx) => <li key={idx}>{s.name}</li>)}
            </ul>
        </div>
    );
}
 
function mapStateToProps(state){
    return {
        starships: state.starships
    }
}

function mapDispatchToProps(dispatch){
    return {
        setStarships: (starships) => dispatch(setStarships(starships))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Starships);