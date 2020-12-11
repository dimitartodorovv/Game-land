import { html, render } from 'https://unpkg.com/lit-html?module';


const templateMakeOffer = () => html`

<nav-components></nav-components>


<div class="container-offer">
   
    
        <div class="addGame">
       
            <label for="destination">Game title:</label>
            <input type="text" id="game-name" name="gameTitle" placeholder="Mortal Combat">
        </div>
        <div class="addGame">
            <label for="duration">Category:</label>
            <input id="category" name="category" placeholder="Action">
        </div>
        <div class="addGame">
            <label for="imgUrl">Image URL:</label>
            <input type="text" id="imgUrl" name="imgUrl" placeholder="https://">
        </div>
        <div class="addGame">
            <label for="imgUrl">Price:</label>
            <input type="number" id="price" name="price">
        </div>
        <div class="addGame">
            <label for="imgUrl">Currency:</label>
            <input type="number" id="currency" name="currency">
        </div>
        <div class="addGame">
            <label for="city" class="des-leb">Description:</label>
            <textarea name="description" class="des-game" id="description-game" cols="30" rows="10"></textarea>
        </div>
        <input type="submit" class="create-game" value="Add">
    </div>


   
`

export default class MakeOffer extends HTMLElement {


    connectedCallback() {
        this.render()
    }

    render() {
        render(templateMakeOffer(), this)
    }

}