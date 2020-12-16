let API_DATA = `https://game-land-58011-default-rtdb.firebaseio.com/gameLand`


export async function getGameMarket() {

    let resDAta = await fetch(`${API_DATA}/.json`)
    
    let result = await resDAta.json(); 

    let data = Object.keys(result).map(key => ({key, ...result[key]}))

    return data
}

export async function setGameInMarket(title,category,imgUrl,price,currency,uploadDate,phoneNumber,userName,userKey,description) {

    let game = {
        title,
        category,
        imgUrl,
        price,
        currency,
        uploadDate,
        phoneNumber,
        userName,
        userKey,
        description,
      
    }


    let resData =  fetch(`${API_DATA}/.json`,{method: 'POST', body: JSON.stringify(game)}) 

    return resData
}

export async function getDetails(id) {


        let result = fetch(`${API_DATA}/${id}/.json`)
        .then(res=> res.json())
        .then(data => {return data})

        return result
}