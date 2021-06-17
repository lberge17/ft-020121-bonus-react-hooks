export async function fetchSWAPI(arg){
    return await fetch(`http://localhost:3000/${arg}`).then(r => r.json())
}