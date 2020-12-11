import {Router} from 'https://unpkg.com/@vaadin/router'



export default class Logout extends HTMLElement {

    connectedCallback() {
        
        localStorage.removeItem('gameLend');

        Router.go('/login')

    }



}