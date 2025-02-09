import Block from "../../Block";
import templateButton from "./Button.hbs?raw";

export default class Button extends Block {
  constructor(props: Record<string, any> = {}) {
    super(templateButton, props);
    this.initEvents();
  }

  private initEvents(): void {}
}
