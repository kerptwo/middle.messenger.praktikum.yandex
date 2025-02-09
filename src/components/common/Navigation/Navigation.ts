import Block from "../../Block";
import template from "./Navigation.hbs?raw";
import Link from "../../UI/Link/Link";
import Contact from "../../UI/Contact/Contact";

export default class Navigation extends Block {
  constructor(props: Record<string, any> = {}) {
    super(template, props);
  }

  afterRender(): void {
    const linkProfileContainer = this.getContent().querySelector("#link-profile-container");
    if (linkProfileContainer) {
      linkProfileContainer.innerHTML = "";
      const profileLink = new Link({
        link: "/profile",
        text: "Профиль"
      });
      linkProfileContainer.appendChild(profileLink.render());
    }

    const contactContainer = this.getContent().querySelector("#contact-container");
    if (contactContainer) {
      contactContainer.innerHTML = "";
      const contactComponent = new Contact();
      contactContainer.appendChild(contactComponent.render());
    }
  }
}
