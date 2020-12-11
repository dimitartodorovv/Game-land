import {Router} from 'https://unpkg.com/@vaadin/router'
import {html, render} from 'https://unpkg.com/lit-html?module';
import makeProfile, {getUserProfile, changeUser} from '../controller/profiles.js'
import {userDATA} from '../controller/data/userDATA.js'


const templateProfile = (ctx) => html`

<nav-components></nav-components>

 <div class="avatar">
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
                <label  for="City">City:</label>
                <input class="user-inputs" id="city-user" type="text" value="${ctx.data.city || ""}">
            </div>

            <div class="phone-user">
                <label class="semi-colon bolder" for="PhoneNumber">Phone number:</label>
                <input class="user-inputs" id="phonenumber-user" type="text" value="${ctx.data.phone || ""}">
            </div>

                <!-- I need to remove this form and set anything else  -->
                <label class="semi-colon bolder" for="FullNameBg">Category:</label>
                <input class="user-inputs" id="category-user" type="text" value="${ctx.data.category || ""}">
                        
    </div>

    ${ctx.data ? html ` <button class="btn-user" type="submit" @click=${ctx.correctProfileUser}>Change</button>` : html `<button class="btn-user" type="submit" @click=${ctx.makeProfile}>Submit</button>`}
             
       
   
    </div>
    
`

export default class Profile extends HTMLElement{
        

    makeProfile(e) {
            e.preventDefault();

        let id = userDATA.id;
        // Make check for empty inputs

        let name = document.querySelector('#name-user').value;
        let dateOfBirth = document.querySelector('#dateOfBirth-user').value;
        let city = document.querySelector('#city-user').value;
        let phone = document.querySelector('#phonenumber-user').value;
        let category = document.querySelector('#category-user').value;
     

            
        makeProfile(name,dateOfBirth,city,phone,category,id).then(res => {        
           
         
            Router.go('/market')
        })

        

        
    }

    correctProfileUser(e) {
            e.preventDefault();
            let id = userDATA.id;
            let findUser = null;

            let name = document.querySelector('#name-user').value;
            let dateOfBirth = document.querySelector('#dateOfBirth-user').value;
            let city = document.querySelector('#city-user').value;
            let phone = document.querySelector('#phonenumber-user').value;
            let category = document.querySelector('#category-user').value;

            getUserProfile().then(res => {
                findUser = res.find(el => el.idUser == id);
                if(findUser){
                    let key = findUser.key
                    changeUser(name,dateOfBirth,city,phone,category,key).then(res => {

                        Router.go('/market')
                    })
                }
               
            })

           
    }

    connectedCallback() {
        let id = userDATA.id;
        let findUser = null;

        getUserProfile().then(res => {
            findUser = res.find(el => el.idUser == id);
            if(findUser){
                this.data = findUser
            }
            this.render()
        })

    }

    render() {
        console.log(this.data);
        render(templateProfile(this), this)
    }
}

