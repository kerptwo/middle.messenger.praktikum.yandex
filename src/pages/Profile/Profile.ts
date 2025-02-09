import Block from "../../components/Block";
import template from "./Profile.hbs?raw";
import UserInfoRow from "../../components/UI/UserInfoRow/UserInfoRow";
import Link from "../../components/UI/Link/Link";
import Avatar from "../../components/UI/Avatar/Avatar";

export default class ProfilePage extends Block {
  constructor(props: Record<string, any> = {}) {
    super(template, props);
  }

  afterRender(): void {
    const avatarContainer = this.getContent().querySelector("#avatar-container");
    if (avatarContainer) {
      avatarContainer.innerHTML = "";
      const avatar = new Avatar({
        src: "/path/to/avatar.jpg",
        alt: "Avatar"
      });
      avatarContainer.appendChild(avatar.render());
      if (typeof (avatar as any).afterRender === "function") {
        (avatar as any).afterRender();
      }
    }

    const userInfoRowsContainer = this.getContent().querySelector("#user-info-rows-container");
    if (userInfoRowsContainer) {
      userInfoRowsContainer.innerHTML = "";

      const rowsData = [
        { title: "Почта", value: "pochta@yandex.ru" },
        { title: "Логин", value: "ivanivanov" },
        { title: "Имя", value: "Иван" },
        { title: "Фамилия", value: "Иванов" },
        { title: "Имя в чате", value: "Иван" },
        { title: "Телефон", value: "+7 (909) 967 30 30" }
      ];

      rowsData.forEach((data) => {
        const row = new UserInfoRow(data);
        userInfoRowsContainer.appendChild(row.render());
      });
    }

    const profileLinksContainer = this.getContent().querySelector("#profile-links-container");
    if (profileLinksContainer) {
      profileLinksContainer.innerHTML = "";
      const linksData = [
        { link: "#", text: "Изменить данные" },
        { link: "#", text: "Изменить пароль" },
        { link: "#", text: "Выйти" }
      ];

      linksData.forEach((data) => {
        const linkComponent = new Link(data);
        profileLinksContainer.appendChild(linkComponent.render());
      });
    }
  }
}
