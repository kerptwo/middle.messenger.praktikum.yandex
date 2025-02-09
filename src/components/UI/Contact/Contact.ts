import Block from "../../Block";
import template from "./Contact.hbs?raw";

export default class Contact extends Block {
  constructor(props: Record<string, any> = {}) {
    const defaultProps = {
      name: "Андрей",
      arrivalTime: "10:49",
      message: "Изображение",
      counter: "2",
    };
    super(template, { ...defaultProps, ...props });
  }
}
