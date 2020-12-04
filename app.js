import {Router} from 'https://unpkg.com/@vaadin/router'

import Nav from './templates/header.js'
import Home from './templates/home.js'
import GameCards from './templates/temp-games.js'
import Register from './templates/register.js'
import Login from './templates/login.js'
import MarketPlace from './templates/market.js'

customElements.define('nav-components', Nav);
customElements.define('home-components', Home);
customElements.define('game-template', GameCards)
customElements.define('register-components', Register)
customElements.define('login-components', Login)
customElements.define('marketplace-components', MarketPlace)

const outlet = document.getElementById('root');

const router = new Router(outlet);

router.setRoutes([
  {path: '/', component: 'home-components'},
  {path: '/register', component: 'register-components'},
  {path: '/login', component: 'login-components'},
  {path: '/market', component: 'marketplace-components'}
]);