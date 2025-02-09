import Block from "../../components/Block";
import template from "./ServerError.hbs?raw";
import Link from "../../components/UI/Link/Link";

export default class NotFoundPage extends Block {
  constructor(props: Record<string, any> = {}) {
    super(template, props);
  }

  afterRender(): void {
    const linkContainer = this.getContent().querySelector("#link-container");
    if (linkContainer) {
      linkContainer.innerHTML = "";
      const linkComponent = new Link({
        link: "/chat",
        text: "Назад к чатам",
      });
      linkContainer.appendChild(linkComponent.render());
    }
  }
}
