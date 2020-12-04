import { html, render } from 'https://unpkg.com/lit-html?module';
import { userDATA } from '../controller/data/userDATA.js'

const templateNav = () => html`

    <nav class="navbar">
        ${!userDATA.email ? html`
        <div class="icon-comp"><img src="/img/gameicopn 2.png" alt="">
        </div>
        <a href="/"><i class="fas fa-home"></i></a>
        <a href="/market"><i class="fas fa-store"></i></a>
        `
            : html`<a href="/community"><i class="fas fa-users"></i></a>
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
        </ul>`}
        <ul class="nav-bar game">
            <li class="nav-item">
                <a class="nav-link">Welcome, </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/logout">logout</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
            </li>
        </ul>
    </nav>

`



export default class Nav extends HTMLElement {


    connectedCallback() {
        this.render();
    }

    render() {
        render(templateNav(), this)
    }

}