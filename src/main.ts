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
});
