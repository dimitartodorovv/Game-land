
let API_profiles = `https://game-land-58011-default-rtdb.firebaseio.com/profiles`


export default async function makeProfile(name,dateOfBirth,city,phone,category,idUser){
   
    // I need to save picture in cloud not in realtime database

    let result = await fetch(`${API_profiles}.json`, {method: "POST", body: JSON.stringify({name,dateOfBirth,city,phone,category,idUser})})


    return result
}


export async function getUserProfile() {

        let resData = await fetch(`${API_profiles}.json`)
        let result = await resData.json()
        
        let data = Object.keys(result).map(key => ({key, ...result[key]}))

        return data
}

export async function changeUser(name,dateOfBirth,city,phone,category,id) {

    let userCHange = {
        name,
        dateOfBirth,
        city,
        phone,
        category
    }

    let result = fetch(`${API_profiles}/${id}.json`,{method: "PATCH", body: JSON.stringify(userCHange)})

    return result
}
