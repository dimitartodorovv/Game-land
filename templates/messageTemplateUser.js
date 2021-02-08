import { html, render } from 'https://unpkg.com/lit-html?module';
import {getAllMessages} from '../dataController/message.js';
import { loggedUser,token } from '../dataController/data/userDATA.js';

const templateUsers = (ctx) => html`
    ${ctx.message ? html `      
               ${ctx.data.map(items => html`
               <div class="user-ms"> 
               <h3>${items.name}</h3>     
                <a href="/messages/${items.key}">
                 <span class="initials">${items.initials}</span>
                <div class="messg-user">
                    <p>${Object.values(items.message[items.message.length - 1])[0]}</p>
                </div>
             </a>
             </div>`)} 
            ` : ''}  
`


export default class MessageUserTemplate extends HTMLElement {

    connectedCallback(){

        getAllMessages().then(res => {
            let id = loggedUser().id
            let myMessages = [];
           
             let yourMessages = res.find(message => message.recipientId == id);
            let senderMess = res.find(message => message.sender === id);
            
             if(yourMessages){

                res.forEach(message => {
                    if(message.recipientId === id){
                        myMessages.push(message); 
                    }
                });
                   
                    this.message = true               
                    this.data = myMessages; 
            }
            if(senderMess){
                
                res.forEach(message => {
                    if(message.sender === id){
                        myMessages.push(message); 
                    }
                });
                   
                    this.message = true               
                    this.data = myMessages; 
            }
           
           
            this.render() 

        })


       
    }

    render() {
        render(templateUsers(this), this)
    }

}