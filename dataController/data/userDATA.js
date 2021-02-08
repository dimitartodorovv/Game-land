


export const  userDATA = {
    email: loggedUser().email,
    token: loggedUser().token,
    id: loggedUser().id

}

export let token = [];



export function loggedUser() {


    try {
        let userDATA = JSON.parse(localStorage.getItem('gameLand'));
        if(userDATA === {}){
            throw new Error("error") 
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