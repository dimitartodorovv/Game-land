import { html, render } from 'https://unpkg.com/lit-html?module';
import {getDetails} from '../controller/dataUsers.js'

const templateDetails = (ctx) => html`
<nav-components></nav-components>
    <div class="container-details">
        <div class="con-details">
            <h3>Title</h3>
            <label for="">${ctx.data.title}</label>
            <h3>Category</h3>
            <label for="">${ctx.data.category}</label>
            <h3>Price</h3>
            <label for="">${ctx.data.price} ${ctx.data.currency}</label>
            <h3>Date</h3>
            <label for="">${ctx.data.uploadDate}</label>
            <h3>Phone number</h3>
            <label>${ctx.data.phoneNumber}</label>
            <h3>From</h3>
            <!-- guide  to profile with all games -->
           <a href="js:;">${ctx.data.userName}</a>
        </div>
        <div class="message-details">
           
            <label class="input-sizer stacked">
                <span>Message: </span>
                <textarea rows="1" id="description-game"></textarea>
            </label>
            <button class="btn-message" @click=${ctx.sendMessage}>Send</button>
       
        </div>
        <div class="image-details">
            <div class="scene">
                <div class="card">
                    <div class="card__face card__face--front">
                        <img src="${ctx.data.imgUrl}" />
                    </div>
                    <div class="card__faceP card__face--back">
                        <p> Details:  ${ctx.data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

`


export class Details extends HTMLElement {

    sendMessage(e) {
            e.preventDefault();
        let button = document.querySelector("#description-game").value;
        console.log(button);
    }   


    connectedCallback() {
        let [emtry,det,id] = location.pathname.split('/')

        getDetails(id).then(data => {
           console.log(data);
           this.data = data
           this.render();
        })
    }

    render() {
        render(templateDetails(this), this)
    }
}