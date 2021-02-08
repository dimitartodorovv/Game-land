import { html, render } from 'https://unpkg.com/lit-html?module';
import { loggedUser,token } from '../dataController/data/userDATA.js'
import {getUserProfile} from '../dataController/profiles.js'
import { getAllMessages } from '../dataController/message.js';


const templateNav = (ctx) => html`

    <nav class="navbar">
        ${!ctx.email ? html`
        <div class="icon-comp"><img src="/img/gameicopn 2.png" alt="">
        </div>
        <a href="/"><i class="fas fa-home"></i></a>
        <a href="/market"><i class="fas fa-store"></i></a>
        `
            : html`
             <div class="icon-comp"><img src="/img/gameicopn 2.png" alt="">
        </div>
        <a href="/"><i class="fas fa-home"></i></a>
        <a href="/market"><i class="fas fa-store"></i></a>
            <a href="/community"><i class="fas fa-users"></i></a>
        <ul class="menu cf">
            <li>
                <a href="#"><i class="fas fa-user-circle"></i></a>
                <ul class="submenu">
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/sell">Make offer</a></li>
                    <!-- <li><a href="">Submenu item</a></li>
                        <li><a href="">Submenu item</a></li> -->
                </ul>
            </li>
        </ul>
            <a href="/messages" class="message-users"><i class="fas fa-envelope"></i>
        <span class="badge">${ctx.emailCount}</span>
             </a>
        `}
        ${!ctx.email ? html`
        <ul class="nav-bar game">         
            <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
            </li>
        </ul>` : html ` 
        <ul class="nav-bar game">   
        <li class="nav-item">
                <a class="nav-link">Welcome, ${ctx.email}</a>
            </li>
           
            <li class="nav-item">
                <a class="nav-link" href="/logout">logout</a>
            </li>
        </ul>`}
        
    </nav>

`



export default class Nav extends HTMLElement {


    connectedCallback() {  
        let id = loggedUser().id;
        let findUser = null;
       
        getUserProfile().then(res => {
            let email =  loggedUser().email.split('@');
        
            findUser = res.find(el => el.idUser == id);
        
            if (findUser) {
                this.email = findUser.name
            }else {
                this.email =  email[0]
            }
        }).then(res => {

            getAllMessages().then(res => {
            
                let countMessages = 0;
               

                Object.entries(res).forEach(([key,value]) => {
                    if(value.recipientId === id || value.sender === id){
                        countMessages++;
                    }
                })
                
                    
                this.emailCount = countMessages
    
                this.render()
            })
        })
       
        
    }

    render() {
       
      
        render(templateNav(this), this)
    }

}



