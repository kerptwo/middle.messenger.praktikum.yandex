import Block from "../../Block";
import template from "./Avatar.hbs?raw";

export default class Avatar extends Block {
  constructor(props: Record<string, any> = {}) {
    const defaultProps = {
      src: "/icon-avatar.svg",
      alt: "avatar",
    };

    super(template, { ...defaultProps, ...props });
  }
}
