import './style.scss'
import Handlebars from 'handlebars';

import inputTemplate from './components/UI/Input/Input.hbs?raw';
import buttonTemplate from './components/UI/Button/Button.hbs?raw';
import linkTemplate from './components/UI/Link/Link.hbs?raw';
import NavigationTemplate from './components/common/Navigation/Navigation.hbs?raw';
import ChatWindoowTemplate from './components/common/ChatWindoow/ChatWindoow.hbs?raw';
import ContactTemplate from './components/UI/Contact/Contact.hbs?raw';
import UserInfoRowTemplate from './components/UI/UserInfoRow/UserInfoRow.hbs?raw';

Handlebars.registerPartial('input', inputTemplate);
Handlebars.registerPartial('button', buttonTemplate);
Handlebars.registerPartial('link', linkTemplate);
Handlebars.registerPartial('navigation', NavigationTemplate);
Handlebars.registerPartial('chatWindow', ChatWindoowTemplate);
Handlebars.registerPartial('contact', ContactTemplate);
Handlebars.registerPartial('userInfoRow', UserInfoRowTemplate);

import { router, initRouter } from './routes/router';

document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  router();

  const listHTML = `
  <nav>
    <ul>
      <li>
        <a href="/">Логин</a>
      </li>
      <li>
        <a href="/registration">Регистрация</a>
      </li>
      <li>
        <a href="/chat">Чат</a>
      </li>
      <li>
        <a href="/profile">Профиль</a>
      </li>
      <li>
        <a href="/changeUserInfo">Смена данных</a>
      </li>
      <li>
        <a href="/changePassword">Смена пароля</a>
      </li>
      <li>
        <a href="/rn">Ошибка 404</a>
      </li>
    </ul> 
  </nav>
`;

  const targetElement = document.querySelector('#listLink'); // Замените на ваш целевой элемент
  if (targetElement) {
    targetElement.innerHTML = listHTML;
  }
});
