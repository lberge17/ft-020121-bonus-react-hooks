// import React, { useState, useEffect } from 'react';
// import { fetchSWAPI } from './utils';

// function Page({page}) {
//     const [resource, setResource] = useState([])

//     // componentDidMount
//     useEffect(() => {
//         console.log("mounting page")
//         if (page !== "about") {
//             fetchSWAPI(page)
//                 .then(data => setResource(data.results))
//         }

//         // componentWillUnmount
//         return () => {
//             console.log("unmounting page")
//             setResource([])
//         }
//     }, [page])

//     return (
//         <div>
//             <h1>All {page}</h1>
//             <ul>
//                 {resource.map((r, idx) => <li key={idx}>{r.name}</li>)}
//             </ul>
//         </div>
//     );
// }
 
// export default Page;