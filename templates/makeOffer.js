import {Router} from 'https://unpkg.com/@vaadin/router';
import { html, render } from 'https://unpkg.com/lit-html?module';
import { loggedUser } from '../dataController/data/userDATA.js';
import { setGameInMarket } from '../dataController/dataUsers.js';
import {getUserProfile} from '../dataController/profiles.js';
import {showInfo,errorMessage} from '../dataController/notification.js';
import {timeNow} from '../dataController/timeAndDate.js';


const templateMakeOffer = (ctx) => html`

<nav-components></nav-components>


<div class="container-offer">

    <div class="image-offer">
        <img src="/img/mirage (1).png" class="img-offer">
    </div>

    <div class="container-divs">
        <div class="addGame">
            <label for="destination">Title:</label>
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
            <label for="imgUrl">Phone number:</label>
            <input type="number" id="phonenumber" name="phone">
        </div>
        <div class="addGame">
            <label for="imgUrl">Currency:</label>
            <select id="currency">
                <option value="€">Euro €</option>
                <option value="$">Dollars $</option>
                <option value="лв">Leva лв</option>
            </select>
        </div>
        <div class="addGame">
            <label class="input-sizer stacked">
            <span>Description: </span>
            <textarea  rows="1" id="description-game"></textarea>
            <!-- <textarea name="description" class="des-game" id="description-game" cols="30" rows="10"></textarea> -->
            </label>
        </div>
        <input type="submit" class="create-game" @click=${ctx.addGame} value="Add" >

    </div>
    <div class="image-offer">
        <img src="/img/mirage (2).png" class="img-offerTwo">
    </div>
</div>


   
`

export default class MakeOffer extends HTMLElement {



   addGame(e){
            e.preventDefault();
            let name = document.querySelector('#game-name').value
            let category = document.querySelector('#category').value
            let imgUrl = document.querySelector('#imgUrl').value
            let price = document.querySelector('#price').value
            let currency = document.querySelector('#currency').value
            let description = document.querySelector('#description-game').value
            let phoneNumber = document.querySelector('#phonenumber').value
  
           
            let uploadDate = timeNow()
          
            let id = loggedUser().id
            let findUser = null;

            getUserProfile().then(res => {
                return res
            }).then(data => {
               findUser = data.find(user => user.idUser == id)
              
                if(findUser){
                    return findUser
                }else{
                    showInfo("Create your acount")
                    Router.go('/profile')
                }
            
            }).then(user => {
              
                    setGameInMarket(name,category,imgUrl,price,currency,uploadDate,phoneNumber,user.name,user.key,description,id).then(res => {
                   
                    Router.go('/market')
                })
            })


      


            
    }

    connectedCallback() {


        this.render()
    }

    render() {

        render(templateMakeOffer(this), this)
    }

}