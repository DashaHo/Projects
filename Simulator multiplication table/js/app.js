import {parseRequestURL} from './helpers/utils.js';

import Header from './views/partials/header.js';
import Footer from './views/partials/footer.js';

import About from './views/pages/about.js';
import Error404 from './views/pages/error404.js';

import Exercises from './views/pages/practice/exercises.js';
import Samples from './views/pages/practice/samples.js';
import Signup from './views/pages/signup.js';
import Login from './views/pages/login.js';
import Cabinet from './views/pages/cabinet.js';

const Routes = {
    '/': About,
    '/exercises': Exercises,
    '/exercises/samples': Samples,
    '/signup': Signup,
    '/login': Login,
    '/cabinet': Cabinet,
        
};

function router() {
    const headerContainer = document.getElementsByClassName('header-container')[0],
          contentContainer = document.getElementsByClassName('content-container')[0],
          footerContainer = document.getElementsByClassName('footer-container')[0],
          header = new Header(),
          footer = new Footer();

    header.render().then(html => headerContainer.innerHTML = html);

    const request = parseRequestURL(),
          parsedURL = `/${request.resource || ''}${request.action ? `/${request.action}` : ''}`,
          page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

    page.render().then(html => {
        contentContainer.innerHTML = html;
        page.afterRender();
    });

    footer.render().then(html => footerContainer.innerHTML = html);
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);