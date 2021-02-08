import { html, render } from 'https://unpkg.com/lit-html?module';
import { getAllMessages, messageUser } from '../dataController/message.js';
import { loggedUser, token } from '../dataController/data/userDATA.js';
import {Router} from 'https://unpkg.com/@vaadin/router';
import { timeNow } from '../dataController/timeAndDate.js';


const templateMessage = (ctx) => html`
<nav-components></nav-components>
<div class="message-con">
    <div class="all-message">
        <h4 class="ms-title">Message</h4>
        <message-template></message-template>

    </div>
    <div class="container-chat">

    ${ctx.message ? html` ${ctx.data.map(items => html`
   ${items.sender ? html `<div class="chatBox">
            <img src="/img/8964998576cfac440b3a14df748fc670.png" alt="Avatar">
            <p>${items.sender}</p>
            <span class="time-right">${items.time}</span>
        </div>` : html ` <div class="chatBox darker">
            <img src="/img/8964998576cfac440b3a14df748fc670.png" alt="Avatar" class="right">
            <p>${items.recipient}</p>
            <span class="time-left">${items.time}</span>
        </div>`}`)}` : 'You don\'t have messages'}   
    </div>
    <div class="messageArea">
            <textarea  class="senderMessage" cols="60" rows="1"></textarea>
            <button class="messageBtn" @click=${ctx.messageReturn}><i class="fas fa-share"></i></button>
        </div>
</div>


`


export default class Messages extends HTMLElement {


    messageReturn(e) {
        e.preventDefault();

        console.log(this);
        let text = document.querySelector('.senderMessage').value;
        
        let id = loggedUser().id
        let email = loggedUser().email
        let time = timeNow()

        getAllMessages().then(respons => {
            let firstMessage = respons.find(message => message.recipientId == id)
                firstMessage.message.push({recipient: text, time: time})

                let userMessage = {
                    message:  firstMessage.message,
                    id: firstMessage.key
                }
                return userMessage
               
        }).then(res => {
             messageUser(res.id,res.message).then(res => {
                
                    if(res.statusText === 'OK'){
                        renderMessege();     
                    }else{
                        Router.go('/')
                    }
             })       
           
        })
      
        
    }

    connectedCallback() {  
        renderCall(this);
    }

    render() {
        render(templateMessage(this), this)
    }


}



function renderCall(context) {
    
    getAllMessages().then(res => {
        let id = loggedUser().id

        let firstMessageRec = res.find(message => message.recipientId == id)
        let firstMessageSen = res.find(mess => mess.sender === id)
        if(firstMessageRec){
            context.message = true;
            context.data = firstMessageSen.message
        }
        if(firstMessageSen) {
            context.message = true;
            context.data = firstMessageSen.message
        }


        context.render()

         
        var scroll = document.querySelector(".container-chat");

        scroll.scrollTop = scroll.scrollHeight;
    })
}

function renderMessege() {
  
    let container =  document.querySelector(".container-chat")
    let id = loggedUser().id
    getAllMessages().then(res => {

        let firstMessage = res.find(message => message.recipientId == id)
      console.log(firstMessage);
        let div = document.createElement('div')
            firstMessage.message.forEach(message => {
                console.log(message);
                    if(message.sender){
                            div.innerHTML = `<div class="chatBox">
                            <img src="/img/8964998576cfac440b3a14df748fc670.png" alt="Avatar">
                            <p>${message.sender}</p>
                            <span class="time-right">11:00</span>
                        </div>`
                    }else{
                        div.innerHTML = `<div class="chatBox darker">
                        <img src="/img/fifa-estara-disponible-en-octubre-removebg-preview.png" alt="Avatar" class="right">
                        <p>${message.recipient}</p>
                        <span class="time-left">11:01</span>
                    </div>`
                    }
            });  

            container.appendChild(div)
        }) 
}