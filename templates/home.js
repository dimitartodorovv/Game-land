import { html, render } from 'https://unpkg.com/lit-html?module';


const templateHome = () => html`
    <nav-components></nav-components>
    <main class="main-game">
        <div class="game-home-page">
            <div class="container-games">
            <game-template></game-template>
            </div>
        </div>
    </main>

`



export default class Home extends HTMLElement {

    connectedCallback() {
        console.log(this);
        this.render();
    }


    render(){
        render(templateHome(), this)
    }

}