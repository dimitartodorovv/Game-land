import { html, render } from 'https://unpkg.com/lit-html?module';


const templateLogin = () => html`
    <nav-components></nav-components>
<main class="main-game">
 <div class="container auth">
<form action="/login" method="POST">
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

    connectedCallback() {
        this.render()
    }

    render() {
        render(templateLogin(), this)
    }
}