import {Router} from 'https://unpkg.com/@vaadin/router'
import { html, render } from 'https://unpkg.com/lit-html?module';
import {login} from '../controller/auth.js'


const templateLogin = (ctx) => html`
    <nav-components></nav-components>
<main class="main-game">
 <div class="container auth">
<form action="/login" method="POST" @submit=${ctx.loginPost}>
    <fieldset>
        <legend>Login</legend>
        <blockquote></blockquote>
        <p class="field email">
            <input type="text" id="email" name="email" placeholder="maria@email.com">
            <label for="email">Email:</label>
        </p>
        <p class="field password">
            <input type="password" id="login-pass" name="password">
            <label for="login-pass">Password:</label>
        </p>
        <p class="field submit">
            <button class="btn submit" type="submit">Log In</button>
        </p>
        <p class="field">
            <span>If you don't have profile click <a href="/register"> here</a></span>
        </p>
    </fieldset>
</form>
</div>  
</main>

`




export default class Register extends HTMLElement {

    loginPost(e) {
            e.preventDefault();

            let formData = new FormData(e.target);
           
            let email = formData.get('email');
            let password = formData.get('password')

            login(email,password).then(res => {

                localStorage.setItem("gameLend",JSON.stringify({email: res.email,token: res.idToken,id: res.localId}))

                    Router.go('/market')
            })
          
    }


    connectedCallback() {
        this.render()
    }

    render() {
        render(templateLogin(this), this)
    }
}