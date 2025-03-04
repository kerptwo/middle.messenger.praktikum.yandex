import Block from "../../components/Block";
import template from "./ChangePassword.hbs?raw";
import Avatar from "../../components/UI/Avatar/Avatar";
import Input from "../../components/UI/Input/input";
import Button from "../../components/UI/Button/Button";
import { handleFormSubmit } from "../FormHandler";

export default class ChangePasswordPage extends Block {
  constructor(props: Record<string, any> = {}) {
    super(template, { ...props, events: { submit: handleFormSubmit } });
  }

  afterRender(): void {
    const avatarContainer =
      this.getContent().querySelector("#avatar-container");
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

    const oldPasswordContainer = this.getContent().querySelector(
      "#old-password-input-container"
    );
    if (oldPasswordContainer) {
      const oldPasswordInput = new Input({
        id: "oldPassword",
        label: "Старый пароль",
        type: "password",
        placeholder: "••••••••••••",
      });
      oldPasswordContainer.appendChild(oldPasswordInput.render());
    }

    const newPasswordContainer = this.getContent().querySelector(
      "#new-password-input-container"
    );
    if (newPasswordContainer) {
      const newPasswordInput = new Input({
        id: "newPassword",
        label: "Новый пароль",
        type: "password",
        placeholder: "••••••••••••",
      });
      newPasswordContainer.appendChild(newPasswordInput.render());
    }

    const newPasswordRepeatContainer = this.getContent().querySelector(
      "#new-password-repeat-input-container"
    );
    if (newPasswordRepeatContainer) {
      const newPasswordRepeatInput = new Input({
        id: "newPasswordRepeat",
        label: "Повторите новый пароль",
        type: "password",
        placeholder: "••••••••••••",
      });
      newPasswordRepeatContainer.appendChild(newPasswordRepeatInput.render());
    }

    const buttonContainer =
      this.getContent().querySelector("#button-container");
    if (buttonContainer) {
      const changePasswordButton = new Button({
        id: "change-password-button",
        text: "Сохранить",
      });
      buttonContainer.appendChild(changePasswordButton.render());
    }
  }
}
