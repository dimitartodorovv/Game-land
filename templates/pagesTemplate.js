import { html, render } from 'https://unpkg.com/lit-html?module';
import {getGameMarket} from '../controller/dataUsers.js';


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

export default class PageTemplate extends HTMLElement {

    connectedCallback() {
        getGameMarket().then(data => {
           
            let pages = [];
            let [one,two,three] = location.pathname.split('/')
            let num = three.replace('p','')
            let items = 12;
            let pageCalc = Math.ceil(data.length / 12)
            for (let i = 1; i < pageCalc + 1; i++) {
                    pages.push(i)
            }   
            let loopStart = items * Number(--num);
          
        
            this.pages = pages;

        
            this.data = data.slice(loopStart,loopStart + items)
            this.render()
        })
    }

    render() {
        render(templateMarket(this),this)
    }

}

