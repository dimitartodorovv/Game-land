import { html, render } from 'https://unpkg.com/lit-html?module';

const templateMarket = () => html`
       
<nav-components></nav-components>
<div class="cont-cards">
    <templatecard-components class="cards-temp"></templatecard-components>
   
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