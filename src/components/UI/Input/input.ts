import Block from "../../Block";
import templateInput from "./Input.hbs?raw";
import { handleFieldBlur } from "./inputValidation";

export default class Input extends Block {
  constructor(props: Record<string, any> = {}) {
    super(templateInput, props);
    this.initEvents();
  }

  private initEvents(): void {
    const inputElement = this.getContent().querySelector("input");
    if (inputElement) {
      inputElement.addEventListener("blur", handleFieldBlur);
    }
  }
}
