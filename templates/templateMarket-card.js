import { html, render } from 'https://unpkg.com/lit-html?module';
import {getGameMarket} from '../dataController/dataUsers.js'

const templateMarketCard = (ctx) => html`
   
    ${ctx.data.map(game => html` 
    <div class="cards-maker">
    <img class="image-cards" src="${game.imgUrl}" alt="game imgae">
        <span>Game details: ${game.description}</span>
        <a href="/details/${game.key}" class="btn-cards">Details</a>
           
        </div>    
        `)}
       
    
`


export default class TemplateCardMarket extends HTMLElement {


    connectedCallback() {

        getGameMarket().then(data => {
            this.data = data
            this.render()
        })

       

    }

    render() {
     
        render(templateMarketCard(this), this)
    }

}