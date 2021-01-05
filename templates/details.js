import { Router } from 'https://unpkg.com/@vaadin/router'
import { html, render } from 'https://unpkg.com/lit-html?module';
import { loggedUser } from '../controller/data/userDATA.js';
import { getDetails } from '../controller/dataUsers.js'
import { sendMessages, getAllMessages, messageUser } from '../controller/message.js'
import { getUserProfile } from '../controller/profiles.js'

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
        <a href="js:;">${ctx.data.createrName}</a>
    </div>
    ${ctx.creater ? '' : html`<div class="message-details">

        <label class="input-sizer stacked">
            <span>Message: </span>
            <textarea rows="1" id="description-game"></textarea>
        </label>
        <button class="btn-message" @click=${ctx.sendMessage}>Send</button>

    </div>`}

    <div class="image-details">
        <div class="scene">
            <div class="card">
                <div class="card__face card__face--front">
                    <img src="${ctx.data.imgUrl}" />
                </div>
                <div class="card__faceP card__face--back">
                    <p> Details: ${ctx.data.description}</p>
                </div>
            </div>
        </div>
    </div>
</div>

`


export default class Details extends HTMLElement {


    sendMessage(e) {
        e.preventDefault();

        let [emtry, det, id] = location.pathname.split('/')
        let message = document.querySelector("#description-game").value;

        if (message.length < 0) {
            return;
        }

        let name = null;
        let senderId = loggedUser().id;
        let senderInitials = null;
        let sender = null;
        let splName = null;

        getDetails(id).then(data => {


            let user = {
                id: data.createrId,
                userIddataBase: data.createrIdBaseDate,
                creater: data.createrName,
            }
            return user
        }).then(user => {
            getUserProfile().then(res => {

                sender = res.find(user => user.idUser === senderId)
                user.sender = sender
                return user

            }).then(user => {

                
                if (user.creater) {
                   
                    name = user.sender.name
                    splName = user.creater.split(' ')
                    senderInitials = `${splName[0][0].toUpperCase()} ${splName[1][0].toUpperCase()}`
                } else {
                    name = loggedUser().email
                    splName = name.split('@')
                    senderInitials = `${splName[0][0].toUpperCase()}`
                }

                getAllMessages().then(res => {
                    if (res === null) {
                        sendMessages(user.id, message, name, senderInitials, senderId, user.userIddataBase, id).then(res => {
                            Router.go('/')
                        })
                    } else {
                        let sender = res.find(keys => keys.sender === senderId)
                        let isMessage = res.find(mess => mess.gameId === id)

                        if (sender && isMessage) {
                            sender.message.push({ sender: message })
                            messageUser(sender.key, sender.message).then(
                                Router.go('/')
                            )
                        }
                    }
                })
            })

        })

    }



    connectedCallback() {
        let [emtry, det, id] = location.pathname.split('/')

        getDetails(id).then(data => this.data = data)
            .then(userdata => {
                let sender = loggedUser().id

                if (sender === userdata.createrIdBaseDate) {
                    this.creater = true;
                } else {
                    this.creater = false;
                }
                this.render();

            })
    }

    render() {
        render(templateDetails(this), this)
    }
}