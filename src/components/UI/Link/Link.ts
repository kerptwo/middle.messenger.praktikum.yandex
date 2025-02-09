import Block from "../../Block";
import templateLink from "./Link.hbs?raw";

export default class Link extends Block {
  constructor(props: Record<string, any> = {}) {
    super(templateLink, props);
  }
}
