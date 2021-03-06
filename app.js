import {Router} from 'https://unpkg.com/@vaadin/router'

import Nav from './templates/header.js'
import Home from './templates/home.js'
import GameCards from './templates/temp-games.js'
import Register from './templates/register.js'
import Login from './templates/login.js'
import MarketPlace from './templates/market.js'
import Logout from './templates/logout.js'
import Profile from './templates/profile.js'
import MakeOffer from './templates/makeOffer.js'
import  Details  from './templates/details.js'
import Messages from './templates/message.js'
import MessageUserTemplate from './templates/messageTemplateUser.js'
import renderMessage from './templates/messageAllTemp.js'
import PageTemplate from './templates/pagesTemplate.js'


customElements.define('nav-components', Nav);
customElements.define('home-components', Home);
customElements.define('game-template', GameCards)
customElements.define('register-components', Register);
customElements.define('login-components', Login);
customElements.define('marketplace-components', MarketPlace);
customElements.define("logout-components", Logout);
customElements.define('profile-components', Profile);
customElements.define('makeoffer-components', MakeOffer);
customElements.define('details-components', Details);
customElements.define('messages-components', Messages);
customElements.define('message-template', MessageUserTemplate);
customElements.define('messagerender-components', renderMessage)
customElements.define('page-components', PageTemplate)

const outlet = document.getElementById('root');

const router = new Router(outlet);

router.setRoutes([
  {path: '/', component: 'home-components'},
  {path: '/register', component: 'register-components'},
  {path: '/login', component: 'login-components'},
  {path: '/market', component: 'marketplace-components'},
  {path: '/logout', component: 'logout-components'},
  {path: '/profile', component: 'profile-components'},
  {path: '/sell', component: 'makeoffer-components'},
  {path: '/details/:id', component: 'details-components'},
  {path: '/messages', component: 'messages-components'},
  {path: '/messages/:id', component: 'messagerender-components'},
  {path: '/market/:id', component: 'page-components'}
]);