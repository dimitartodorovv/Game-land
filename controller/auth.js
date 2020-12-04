


const apiKey = `AIzaSyDrkXeiakzcvQOCKhLv3xreaKqTdblul8g`;
const databaseURL = `<DATA GIVE YOU>`;

const endpoint = {
    // Every database have different adress
    LOGIN: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, 
    REGISTER: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
}


// function host(url) {
//     let result = `<DATABASE URL>`
//     const auth = `<IF USER IS LOGIN>`
//     if(auth != null){
//         result += `<PUT ID TOKEN>`
//     }
//     return result
// }

async function request(url,method,body) {

    let options = {
        method,
    }

    if(body){
        Object.assign(options, { 
            header: {'content-type': 'application/json'},
            body: JSON.stringify(body),
            returnSecureToken: true 
        });

        let response = await fetch(url, options);

        let data = await response.json();

        return data
    }

}

async function get(url) {
    return request(url, 'GET');
}

async function post(url,body){
    return request(url,'POST',body);
}

async function del(url){
    return request(url, 'DELETE')
}

async function patch(url,body){
    return request(url,'PATCH',body)
}


export async function register(email,password){

    let registration = await post(endpoint.REGISTER, {
        email,
        password
    });


    return registration;
}