import { Router } from 'https://unpkg.com/@vaadin/router'
import { html, render } from 'https://unpkg.com/lit-html?module';
import makeProfile, { getUserProfile, changeUser } from '../controller/profiles.js'
import { loggedUser, userDATA, token } from '../controller/data/userDATA.js'
import { showInfo, errorMessage } from '../controller/notification.js';


const templateProfile = (ctx) => html`

<nav-components></nav-components>

<div class="avatar">
        <div class="profile-imgF">
        <img src="/img/fifa-estara-disponible-en-octubre-removebg-preview.png">
        </div>
    <div class="avatar-wrapper">

        <div class="user-information">

            <div class="fullname-user">
                <label class="semi-colon bolder" for="FullNameBg">Name:</label>
                <input class="user-inputs" id="name-user" type="text" value="${ctx.data.name || ""}">
            </div>

            <div class="dataOfBirth-user">
                <label class="semi-colon bolder" for="DateOfBirth">Date of birth:</label>
                <input class="user-inputs" id="dateOfBirth-user" type="text" value="${ctx.data.dateOfBirth || ""}">
            </div>

            <div class="city-user">
                <label for="City">City:</label>
                <input class="user-inputs" id="city-user" type="text" value="${ctx.data.city || ""}">
            </div>

            <div class="phone-user">
                <label class="semi-colon bolder" for="PhoneNumber">Phone number:</label>
                <input class="user-inputs" id="phonenumber-user" type="text" value="${ctx.data.phone || ""}">
            </div>

            <!-- I need to remove this form and set anything else  -->
            <label class="semi-colon bolder" for="FullNameBg">Favorite category:</label>
            <input class="user-inputs" id="category-user" type="text" value="${ctx.data.category || ""}">

        </div>
       
        ${ctx.data.key ? html` <button class="btn-user" type="button"  @click=${ctx.correctProfileUser}>Change</button>` :
        html`<button class="btn-user" type="submit" @click=${ctx.makeProfile}>Submit</button>`}

    
    </div>
     <div class="profile-img">       
         <img src="/img/wallpapersden.com_nba-2k20-cover_1920x1080-removebg-preview.png" >
         </div>

</div>  
`

export default class Profile extends HTMLElement {


    makeProfile(e) {
        e.preventDefault();

        let ids = loggedUser().id;
        // Make check for empty inputs

        let regDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

        let name = document.querySelector('#name-user').value;
        let dateOfBirth = document.querySelector('#dateOfBirth-user').value;
        let city = document.querySelector('#city-user').value;
        let phone = document.querySelector('#phonenumber-user').value;
        let category = document.querySelector('#category-user').value;
      
        if(name.length < 3 ){
                errorMessage('The name is very short!')
                return;
        }
        if(!regDate.test(dateOfBirth)){
                errorMessage("Date is not correct!")
                return;
        }
        if(phone.length < 10){
            errorMessage("The number is not correct!")
            return;
        }

        makeProfile(name, dateOfBirth, city, phone, category, ids).then(res => {

     
            localStorage.setItem('gameLand', JSON.stringify({email: name,token: token[0],id: ids}))

            Router.go('/market')
        })




    }

    correctProfileUser(e) {
        e.preventDefault();
        let id = loggedUser().id;
        let findUser = null;

        let name = document.querySelector('#name-user').value;
        let dateOfBirth = document.querySelector('#dateOfBirth-user').value;
        let city = document.querySelector('#city-user').value;
        let phone = document.querySelector('#phonenumber-user').value;
        let category = document.querySelector('#category-user').value;


        getUserProfile().then(res => {
            findUser = res.find(el => el.idUser == id);
            console.log(findUser);
            if (findUser) {
                let key = findUser.key
                changeUser(name, dateOfBirth, city, phone, category, key).then(res => {

                    Router.go('/market')
                })
            }

        })


    }

    connectedCallback() {
        let id = loggedUser().id;
        let findUser = null;
        
        getUserProfile().then(res => {
            findUser = res.find(el => el.idUser == id);
        
            if (findUser) {
                this.data = findUser
            }else {
                this.data = []
            }
            this.render()
        })

    }

    render() {
       
        render(templateProfile(this), this)
    }
}

