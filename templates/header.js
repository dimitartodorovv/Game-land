import {html, render} from 'https://unpkg.com/lit-html?module';


const templateNav = () => html `

    <nav class="navbar">
            <div class="icon-comp"><img src="/img/gaminggame-icon-video-games-icon-11553438228yzhcz9vwvj.png" alt=""></div>
            <a href="/">GAME</a>
            <a href="/shop">SHOP</a>
            <a href="/community">COMMUNITY</a>
            <a href="/about">ABOUT</a>
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