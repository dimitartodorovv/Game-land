import {Router} from 'https://unpkg.com/@vaadin/router'
import { html, render } from 'https://unpkg.com/lit-html?module';
import {showInfo} from '../controller/notification.js'
import {register} from '../controller/auth.js'


const templateRegister = (ctx) => html`
 <nav-components></nav-components>

 <main class="main-game">

    <div class="container auth">
        <form action="/register" method="POST" @submit=${ctx.registerPost}>
            <fieldset>
                <legend>Register</legend>
                <blockquote></blockquote>
                <p class="field email">
                    <input type="text" id="email" name="email" placeholder="maria@email.com">
                    <label for="email">Email:</label>
                </p>
                <p class="field password">
                    <input type="password" name="password" id="register-pass">
                    <label for="register-pass">Password:</label>
                </p>
                <p class="field password">
                    <input type="password" name="reppass" id="rep-pass">
                    <label for="rep-pass">Repeat password:</label>
                </p>
                <p class="field submit">
                    <button class="btn submit" type="submit">Register</button>
                </p>
                <p class="field">
                    <span>If you already have profile click <a href="/login"> here</a></span>
                </p>
            </fieldset>
        </form>
    </div>

</main>


`


export default class Register extends HTMLElement {


     registerPost(e){
        e.preventDefault();
        let formData = new FormData(e.target);

        let emailRegex = /[A-z0-9]{3,}@(email|gmail|mail|abv).(com|bg|net)/g;

        let email = formData.get('email');
        let password = formData.get('password');
        let repPassword = formData.get ('reppass');
       
        if(email.length < 3){
            showInfo('Email is not correct!')
               return; 
        }
        if(!emailRegex.test(email)){
            showInfo('Email is not correct!')
            return;
        }
        if(password !== repPassword){
                showInfo(`Password doesn't match!`);
                return;
        }
        if(password < 6){
            showInfo(`Password is short!`);
            return;
        }

        let data =  register(email,password)
        .then(res=> {

            localStorage.setItem("gameLand",JSON.stringify({email: res.email,token: res.idToken,id: res.localId}))

                Router.go('/market')
        })
       

        console.log(data);
    }


    connectedCallback() {
        this.render()
    }

    render() {
        render(templateRegister(this), this)
    }
}