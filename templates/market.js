import { html, render } from 'https://unpkg.com/lit-html?module';
import {getGameMarket} from '../dataController/dataUsers.js';




const templateMarket = (ctx) => html`
       
<nav-components></nav-components>
<div class="cont-cards">
${ctx.data.map(game => html` 
  
    <div class="cards-maker">
    <img class="image-cards" src="${game.imgUrl}" alt="game imgae">
        <span>Game details: ${game.description}</span>
        <a href="/details/${game.key}" class="btn-cards">Details</a>
           
        </div>    
        `)}
       
    </div>
    <div class="pagenumber" id="pagination">
        <ul class="paginat">
    ${ctx.pages.map(num => html`<li><a href="/market/p${num}">${num}</a></li>`)}
        </ul>
`
export default class MarketPlace extends HTMLElement {


    connectedCallback() {
        
        getGameMarket().then(data => {
            let pages = [];
          
           
            let pageCalc = Math.ceil(data.length / 12)
            for (let i = 1; i < pageCalc + 1; i++) {
                    pages.push(i)
            }   

            this.pages = pages;

            
            this.data = data.slice(0,12)
            this.render()
        })
    }

    render() {
        render(templateMarket(this), this)
    }
}

