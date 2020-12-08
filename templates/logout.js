import {Router} from 'https://unpkg.com/@vaadin/router'
import { userDATA } from '../controller/data/userDATA.js';


export default class Logout extends HTMLElement {

    connectedCallback() {
        
        localStorage.removeItem('gameLend');

        Router.go('/login')

    }



}