import React, { useEffect } from 'react';
import { fetchSWAPI } from '../utils';
import { useSelector, useDispatch } from 'react-redux';
import { setPeople } from '../../redux/peopleSlice';

function Characters() {
    const characters = useSelector(state => state.people)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("mounting characters")
        fetchSWAPI("people")
            .then(data => dispatch(setPeople(data)))
        
        return () => {
            console.log("unmounting characters")
        }
    }, [])

    return (
        <div>
            <h1>All Characters</h1>
            <ul>
                {characters.map((c, i) => <li key={i}>{c.name}</li>)}
            </ul>
        </div>
    );
};

// function mapStateToProps(state){
//     return {
//         characters: state.people
//     }
// }

// function mapDispatchToProps(dispatch){
//     return {
//         setCharacters: (people) => dispatch(setPeople(people))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Characters);
export default Characters;