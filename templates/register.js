import { html, render } from 'https://unpkg.com/lit-html?module';

const templateRegister = () => html`
 <nav-components></nav-components>

 <main class="main-game">

    <div class="container auth">
        <form action="/register" method="POST">
            <fieldset>
                <legend>Register</legend>
                <blockquote></blockquote>
                <p class="field email">
                    <input type="email" id="email" name="email" placeholder="maria@email.com">
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

    connectedCallback() {
        this.render()
    }

    render() {
        render(templateRegister(), this)
    }
}