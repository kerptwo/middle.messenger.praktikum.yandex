import Block from "../../components/Block";
import template from "./ChangeUserInfo.hbs?raw";
import Avatar from "../../components/UI/Avatar/Avatar";
import Input from "../../components/UI/Input/input";
import Button from "../../components/UI/Button/Button";
import { handleFormSubmit } from "../FormHandler";

export default class ChangeUserInfoPage extends Block {
  constructor(props: Record<string, any> = {}) {
    super(template, { ...props, events: { submit: handleFormSubmit } });
  }

  afterRender(): void {
    const avatarContainer = this.getContent().querySelector("#avatar-container");
    if (avatarContainer) {
      avatarContainer.innerHTML = "";
      const avatar = new Avatar({
        src: "/icon-avatar.svg",
        alt: "avatar",
      });
      avatarContainer.appendChild(avatar.render());
      if (typeof (avatar as any).afterRender === "function") {
        (avatar as any).afterRender();
      }
    }

    const emailContainer = this.getContent().querySelector("#email-input-container");
    if (emailContainer) {
      const emailInput = new Input({
        id: "email",
        label: "Почта",
        type: "email",
        placeholder: "pochta@yandex.ru",
      });
      emailContainer.appendChild(emailInput.render());
    }

    const loginContainer = this.getContent().querySelector("#login-input-container");
    if (loginContainer) {
      const loginInput = new Input({
        id: "login",
        label: "Логин",
        type: "text",
        placeholder: "ivanivanov",
      });
      loginContainer.appendChild(loginInput.render());
    }

    const firstNameContainer = this.getContent().querySelector("#first_name-input-container");
    if (firstNameContainer) {
      const firstNameInput = new Input({
        id: "first_name",
        label: "Имя",
        type: "text",
        placeholder: "Иван",
      });
      firstNameContainer.appendChild(firstNameInput.render());
    }

    const secondNameContainer = this.getContent().querySelector("#second_name-input-container");
    if (secondNameContainer) {
      const secondNameInput = new Input({
        id: "second_name",
        label: "Фамилия",
        type: "text",
        placeholder: "Иванов",
      });
      secondNameContainer.appendChild(secondNameInput.render());
    }

    const nicknameContainer = this.getContent().querySelector("#nickname-input-container");
    if (nicknameContainer) {
      const nicknameInput = new Input({
        id: "nickname",
        label: "Имя в чате",
        type: "text",
        placeholder: "Иван",
      });
      nicknameContainer.appendChild(nicknameInput.render());
    }

    const phoneContainer = this.getContent().querySelector("#phone-input-container");
    if (phoneContainer) {
      const phoneInput = new Input({
        id: "phone",
        label: "Телефон",
        type: "tel",
        placeholder: "+7 (909) 967 30 30",
      });
      phoneContainer.appendChild(phoneInput.render());
    }

    const buttonContainer = this.getContent().querySelector("#button-container");
    if (buttonContainer) {
      const saveButton = new Button({
        id: "save-button", // изменён id для соответствия функционалу
        text: "Сохранить",
      });
      buttonContainer.appendChild(saveButton.render());
    }
  }
}
