import Block from "../../Block";
import template from "./ChatWindoow.hbs?raw";
import Input from "../../UI/Input/input";

export default class ChatWindow extends Block {
  constructor(props: Record<string, any> = {}) {
    super(template, props);
  }

  afterRender(): void {
    const form = this.getContent().querySelector("#send-message");
    if (form) {
      const messageInputContainer = form.querySelector(
        "#message-input-container"
      );
      if (messageInputContainer) {
        messageInputContainer.innerHTML = "";
        const messageInput = new Input({
          id: "message",
          type: "text",
          placeholder: "Сообщение",
        });
        messageInputContainer.appendChild(messageInput.render());
      }
    }
  }
}
