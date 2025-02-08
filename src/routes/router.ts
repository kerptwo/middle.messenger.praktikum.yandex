import Handlebars from 'handlebars';
import profileTemplate from '../pages/Profile/Profile.hbs?raw';
import chatTemplate from '../pages/Chat/Chat.hbs?raw';
import loginTemplate from '../pages/Login/Login.hbs?raw';
import registrationTemplate from '../pages/Registration/Registration.hbs?raw';
import errorTemplate from '../pages/NotFound/NotFound.hbs?raw';
import changePasswordTemplate from '../pages/ChangePassword/ChangePassword.hbs?raw';
import changeUserInfoTemplate from '../pages/ChangeUserInfo/ChangeUserInfo.hbs?raw';

interface Route {
  path: string;
  template: string;
}

const routes: Route[] = [
  { path: '/', template: loginTemplate },
  { path: '/profile', template: profileTemplate },
  { path: '/registration', template: registrationTemplate },
  { path: '/chat', template: chatTemplate },
  { path: '/changePassword', template: changePasswordTemplate },
  { path: '/changeUserInfo', template: changeUserInfoTemplate },
];

export function renderPage(templateContent: string, data: any = {}) {
  const template = Handlebars.compile(templateContent);
  const generatedHTML = template(data);
  const appDiv = document.getElementById('app');
  if (appDiv) {
    appDiv.innerHTML = generatedHTML;
  }
}

export function router() {
  const currentPath = window.location.pathname;
  const route = routes.find(r => r.path === currentPath);

  if (route) {
    renderPage(route.template);
  } else {
    renderPage(errorTemplate);
  }
}

export function navigateTo(url: string) {
  history.pushState(null, '', url);
  router();
}

export function initRouter() {
  document.body.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.matches('[data-link]')) {
      event.preventDefault();
      const url = target.getAttribute('href');
      if (url) {
        navigateTo(url);
      }
    }
  });

  window.addEventListener('popstate', router);
}
