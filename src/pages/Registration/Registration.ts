import Block from "../../components/Block";
import registrationTemplate from "./Registration.hbs?raw";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/input";
import Link from "../../components/UI/Link/Link";

export default class RegistrationPage extends Block {
  constructor(props: Record<string, any> = {}) {
    super(registrationTemplate, props);
  }

  afterRender(): void {
    const emailContainer = this.getContent().querySelector(
      "#email-input-container"
    );
    if (emailContainer) {
      const emailInput = new Input({
        id: "email",
        label: "Почта",
        type: "email",
        placeholder: "pochta@yandex.ru",
        errorMessage: "",
      });
      emailContainer.appendChild(emailInput.render());
    }

    const loginContainer = this.getContent().querySelector(
      "#login-input-container"
    );
    if (loginContainer) {
      const loginInput = new Input({
        id: "login",
        label: "Логин",
        type: "text",
        placeholder: "ivanivanov",
        errorMessage: "",
      });
      loginContainer.appendChild(loginInput.render());
    }

    const firstNameContainer = this.getContent().querySelector(
      "#first_name-input-container"
    );
    if (firstNameContainer) {
      const firstNameInput = new Input({
        id: "first_name",
        label: "Имя",
        type: "text",
        placeholder: "Иван",
        errorMessage: "",
      });
      firstNameContainer.appendChild(firstNameInput.render());
    }

    const secondNameContainer = this.getContent().querySelector(
      "#second_name-input-container"
    );
    if (secondNameContainer) {
      const secondNameInput = new Input({
        id: "second_name",
        label: "Фамилия",
        type: "text",
        placeholder: "Иванов",
        errorMessage: "",
      });
      secondNameContainer.appendChild(secondNameInput.render());
    }

    const phoneContainer = this.getContent().querySelector(
      "#phone-input-container"
    );
    if (phoneContainer) {
      const phoneInput = new Input({
        id: "phone",
        label: "Телефон",
        type: "tel",
        placeholder: "+7 (909) 967 30 30",
        errorMessage: "",
      });
      phoneContainer.appendChild(phoneInput.render());
    }

    const passwordContainer = this.getContent().querySelector(
      "#password-input-container"
    );
    if (passwordContainer) {
      const passwordInput = new Input({
        id: "password",
        label: "Пароль",
        type: "password",
        placeholder: "••••••••••••",
        errorMessage: "",
      });
      passwordContainer.appendChild(passwordInput.render());
    }

    const passwordRepeatContainer = this.getContent().querySelector(
      "#passwordRepeat-input-container"
    );
    if (passwordRepeatContainer) {
      const passwordRepeatInput = new Input({
        id: "passwordRepeat",
        label: "Пароль (ещё раз)",
        type: "password",
        placeholder: "••••••••••••",
        errorMessage: "",
      });
      passwordRepeatContainer.appendChild(passwordRepeatInput.render());
    }

    const buttonContainer =
      this.getContent().querySelector("#button-container");
    if (buttonContainer) {
      const registerButton = new Button({
        id: "register-button",
        text: "Зарегистрироваться",
      });
      buttonContainer.appendChild(registerButton.render());
    }

    const linkContainer = this.getContent().querySelector("#link-container");
    if (linkContainer) {
      const loginLink = new Link({
        link: "#",
        text: "Войти",
      });
      linkContainer.appendChild(loginLink.render());
    }
  }
}
