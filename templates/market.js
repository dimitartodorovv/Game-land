import { html, render } from 'https://unpkg.com/lit-html?module';

const templateMarket = () => html`
       
<nav-components></nav-components>
<div class="cont-cards">
        <div class="cards-maker">
            <img class="image-cards" src="/img/image home/mortal-kombat-11-pc-01.jpg" alt="">
            <span>Game info:asdasdasd</span>
            <a href="#" class="btn-cards">Details</a>
        </div>
        <div class="cards-maker">
            <img class="image-cards" src="/img/image home/mortal-kombat-11-pc-01.jpg" alt="">
            <span>Game info:asdasdasd</span>
            <a href="#" class="btn-cards">Details</a>
        </div>
        <div class="cards-maker">
            <img class="image-cards" src="/img/image home/mortal-kombat-11-pc-01.jpg" alt="">
            <span>Game info:asdasdasd</span>
            <a href="#" class="btn-cards">Details</a>
        </div>
        <div class="cards-maker">
            <img class="image-cards" src="/img/image home/mortal-kombat-11-pc-01.jpg" alt="">
            <span>Game info:asdasdasd</span>
            <a href="#" class="btn-cards">Details</a>
        </div>
        <div class="cards-maker">
            <img class="image-cards" src="/img/image home/mortal-kombat-11-pc-01.jpg" alt="">
            <span>Game info:asdasdasd</span>
            <a href="#" class="btn-cards">Details</a>
        </div>
      
    </div>

`
export default class MarketPlace extends HTMLElement {

    connectedCallback() {
        this.render()
    }

    render() {
        render(templateMarket(), this)
    }
}