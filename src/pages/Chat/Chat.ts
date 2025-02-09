import Block from "../../components/Block";
import template from "./Chat.hbs?raw";
import Navigation from "../../components/common/Navigation/Navigation";
import ChatWindow from "../../components/common/ChatWindoow/ChatWindoow";

export default class ChatPage extends Block {
  constructor(props: Record<string, any> = {}) {
    super(template, props);
  }

  afterRender(): void {
    const navContainer = this.getContent().querySelector(
      "#navigation-container"
    );
    if (navContainer) {
      navContainer.innerHTML = "";
      const navigation = new Navigation();
      navContainer.appendChild(navigation.render());
      if (typeof (navigation as any).afterRender === "function") {
        (navigation as any).afterRender();
      }
    }

    const chatContainer = this.getContent().querySelector(
      "#chat-window-container"
    );
    if (chatContainer) {
      chatContainer.innerHTML = "";
      const chatWindow = new ChatWindow();
      chatContainer.appendChild(chatWindow.render());
      if (typeof (chatWindow as any).afterRender === "function") {
        (chatWindow as any).afterRender();
      }
    }
  }
}
