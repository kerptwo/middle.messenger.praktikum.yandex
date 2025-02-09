import Block from "../../Block";
import template from "./ChatWindoow.hbs?raw";
import Input from "../../UI/Input/input";

export default class ChatWindow extends Block {
  constructor(props: Record<string, any> = {}) {
    super(template, props);
  }

  afterRender(): void {
    // Находим форму отправки сообщения по id "send-message"
    const form = this.getContent().querySelector("#send-message");
    if (form) {
      // Находим контейнер для поля ввода сообщения внутри формы
      const messageInputContainer = form.querySelector(
        "#message-input-container"
      );
      if (messageInputContainer) {
        messageInputContainer.innerHTML = "";
        // Создаем экземпляр компонента Input для сообщения
        const messageInput = new Input({
          id: "message",
          type: "text",
          placeholder: "Сообщение",
        });
        // Рендерим компонент и вставляем его в контейнер
        messageInputContainer.appendChild(messageInput.render());
      }
    }
  }
}
