import Block from "../../components/Block";
import loginTemplate from "./Login.hbs?raw";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/input";
import Link from "../../components/UI/Link/Link";
import { handleFormSubmit } from "../FormHandler";

export default class LoginPage extends Block {
  constructor(props: Record<string, any> = {}) {
    super(loginTemplate, {
      ...props,
      events: {
        submit: handleFormSubmit,
      },
    });
  }

  afterRender(): void {
    const loginInputContainer = this.getContent().querySelector(
      "#login-input-container"
    );
    if (loginInputContainer) {
      const loginInput = new Input({
        id: "login",
        label: "Логин",
        type: "text",
        placeholder: "ivanivanov",
      });
      loginInputContainer.appendChild(loginInput.render());
    }

    const passwordInputContainer = this.getContent().querySelector(
      "#password-input-container"
    );
    if (passwordInputContainer) {
      const passwordInput = new Input({
        id: "password",
        label: "Пароль",
        type: "password",
        placeholder: "••••••••••••",
      });
      passwordInputContainer.appendChild(passwordInput.render());
    }

    const buttonContainer =
      this.getContent().querySelector("#button-container");
    if (buttonContainer) {
      const loginButton = new Button({
        id: "login-button",
        text: "Авторизоваться",
      });
      buttonContainer.appendChild(loginButton.render());
    }

    const linkContainer = this.getContent().querySelector("#link-container");
    if (linkContainer) {
      const loginLink = new Link({
        link: "#",
        textLink: "Нет аккаунта?",
      });
      linkContainer.appendChild(loginLink.render());
    }
  }
}
