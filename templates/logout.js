import {Router} from 'https://unpkg.com/@vaadin/router'
import {token} from '../dataController/data/userDATA.js'


export default class Logout extends HTMLElement {

    connectedCallback() {
        
        token.splice(0,1)
        localStorage.removeItem('gameLand');

        Router.go('/login')

    }



}