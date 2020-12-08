


export const  userDATA = {
    email: loggedUser().email,
    token: loggedUser().token,
    id: loggedUser().id
}




export function loggedUser() {


    try {
        let userDATA = JSON.parse(localStorage.getItem('gameLend'));
        if(!userDATA){
            throw new error 
        }

        return  {
                email: userDATA.email,
                token: userDATA.token,
                id: userDATA.id
        }

    } catch (error) {

        return{
            email: '',
            token: '',
            id: ''
        }
    }


}