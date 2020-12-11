let API_DATA = `https://game-land-58011-default-rtdb.firebaseio.com/gameLand`


export async function getGameMarket() {

    let resDAta = await fetch(`${API_DATA}/.json`)
    
    let result = await resDAta.json(); 
    
    let data = Object.keys(result).map(key => ({key, ...result[key]}))

    return data
}