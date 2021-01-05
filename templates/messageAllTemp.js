import { html, render } from 'https://unpkg.com/lit-html?module';
import { getAllMessages , oneMessage } from '../controller/message.js';
import { loggedUser, token } from '../controller/data/userDATA.js';



const allMessageTemp = (ctx) => html`
<nav-components></nav-components>
<div class="message-con">
    <div class="message-con">
        <div class="all-message">
            <h4 class="ms-title">Message</h4>
            <message-template></message-template>

        </div>
        <div class="container-chat">

            ${ctx.data.map(items => html`
            ${items.sender ? html`<div class="chatBox">
                <img src="/img/8964998576cfac440b3a14df748fc670.png" alt="Avatar">
                <p>${items.sender}</p>
                <span class="time-right">11:00</span>
            </div>` : html` <div class="chatBox darker">
                <img src="/img/fifa-estara-disponible-en-octubre-removebg-preview.png" alt="Avatar" class="right">
                <p>${items.recipient}</p>
                <span class="time-left">11:01</span>
            </div>`}`)}

            <div class="messageArea">
                <textarea class="senderMessage" cols="60" rows="1"></textarea>
                <button class="messageBtn"><i class="fas fa-share"></i></button>
            </div>
        </div>
    </div>`



export default class renderMessage extends HTMLElement {

    connectedCallback() {

        let [emtry, det, idPath] = location.pathname.split('/');
        let id = loggedUser().id;

      
         oneMessage(idPath).then(res => {
           
 
             this.data = res.message
              
             this.render()

             
            var scroll = document.querySelector(".container-chat");

            scroll.scrollTop = scroll.scrollHeight;
        })
    }
    render() {
        render(allMessageTemp(this), this)
    }
}