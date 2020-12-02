import {html, render} from 'https://unpkg.com/lit-html?module';

const templateCards = () => html`
    

         <div class="tooltip"><img src="/img/image home/FIFA-20-demo-1168115.jpg" alt="">
        <span class="tooltiptext">Game info: </span>
        </div>
      


`


export default class GameCards extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        render(templateCards(),this)
    }

}   


