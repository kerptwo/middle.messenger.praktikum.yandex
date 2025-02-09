import Handlebars from "handlebars";

export default class Block {
  protected element: HTMLElement | null = null;
  protected template: HandlebarsTemplateDelegate;
  protected props: Record<string, any>;

  constructor(template: string, props: Record<string, any> = {}) {
    this.template = Handlebars.compile(template);
    this.props = props;
  }

  render(): HTMLElement {
    const html = this.template(this.props);
    const temp = document.createElement("div");
    temp.innerHTML = html;
    this.element = temp.firstElementChild as HTMLElement;
    return this.element;
  }

  getContent(): HTMLElement {
    if (!this.element) {
      this.render();
    }
    return this.element!;
  }
}
