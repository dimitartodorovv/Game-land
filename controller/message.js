
let API_messages = `https://game-land-58011-default-rtdb.firebaseio.com/messages`

export async function sendMessages(recipientId,message,name,initials,senderId,userIdBaseDate,id, time) {

    let messages = {
        recipient: recipientId,
        message: [{sender: message, time: time}],
        name,
        initials,
        sender: senderId,
        recipientId: userIdBaseDate,
        gameId: id
    }

        let result = fetch(`${API_messages}/.json`, {method: 'POST', body: JSON.stringify(messages)})

        return result

}

export async function getAllMessages() {

    let resData = await fetch(`${API_messages}/.json`)
    let alldata = await resData.json();

    let data = null;
   
    if(alldata === null){
        return data
    }else{
         data = Object.keys(alldata).map(key => ({key,...alldata[key]}))
    }
    return data
}

export async function messageUser(id,message) {

    let mess = {
        message
    }

    let result = fetch(`${API_messages}/${id}/.json`, {method: "PATCH", body: JSON.stringify(mess)})

    return result
}

export async function oneMessage(id){

    let resData = await fetch(`${API_messages}/${id}/.json`)
    
    let alldata = await resData.json();

    return alldata

}