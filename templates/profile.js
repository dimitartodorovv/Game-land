import {html, render} from 'https://unpkg.com/lit-html?module';

const templateProfile = () => html`

<nav-components></nav-components>

 <div class="avatar">
        <div class="avatar-wrapper">
            <img class="avatar-image"
                src="../img/8964998576cfac440b3a14df748fc670.png" 
                 alt="Profile picture"
                 title="Profile picture" />
                 <form >
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*">
                  </form>
        </div>
        <div class="user-information">
            <div class="fullname-user">
                <label class="semi-colon bolder" for="FullNameBg">Name:</label>
                <input class="user-inputs" type="text">
         </div>
           
            <div class="dataOfBirth-user">
                <label class="semi-colon bolder" for="DateOfBirth">Date of birth:</label>
                <input class="user-inputs" type="text">
            </div>

            <div class="city-user">
                <label  for="City">City:</label>
                <input class="user-inputs" type="text">
            </div>

            <div class="phone-user">
                <label class="semi-colon bolder" for="PhoneNumber">Phone number:</label>
                <input class="user-inputs" type="text">
            </div>

            <div class="sex-user">
                <form action="/action_page.php">
                    <p>Please select your gender:</p>
                    <input type="radio" id="male" name="gender" value="male">
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female">
                    <label for="female">Female</label>
                    <input type="radio" id="other" name="gender" value="other">
                    <label for="other">Other</label>
                </form>
             </div>

    </div>
            
                  <button class="btn-user" type="submit">Submit</button>
            
    </div>
    
`


export default class Profile extends HTMLElement{
        
    connectedCallback() {

        this.render()

    }

    render() {
        render(templateProfile(), this)
    }
}

