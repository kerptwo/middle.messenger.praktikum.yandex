import Block from "../../Block";
import template from "./UserInfoRow.hbs?raw";

export default class UserInfoRow extends Block {
  constructor(props: Record<string, any> = {}) {
    super(template, props);
  }
}
