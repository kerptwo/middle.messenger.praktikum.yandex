import Handlebars from "handlebars";

export interface BlockProps {
  events?: {
    [key: string]: (event: Event) => void;
  };
  [key: string]: any;
}

export default class Block {
  protected element: HTMLElement | null = null;
  protected template: HandlebarsTemplateDelegate;
  protected props: BlockProps;

  constructor(template: string, props: BlockProps = {}) {
    this.template = Handlebars.compile(template);
    this.props = props;
  }

  render(): HTMLElement {
    const html = this.template(this.props);
    const temp = document.createElement("div");
    temp.innerHTML = html;
    this.element = temp.firstElementChild as HTMLElement;
    this._addEvents();
    return this.element;
  }

  getContent(): HTMLElement {
    if (!this.element) {
      this.render();
    }
    return this.element!;
  }

  protected _addEvents(): void {
    if (!this.element || !this.props.events) {
      return;
    }
    Object.entries(this.props.events).forEach(([event, handler]) => {
      this.element!.addEventListener(event, handler);
    });
  }

  protected _removeEvents(): void {
    if (!this.element || !this.props.events) {
      return;
    }
    Object.entries(this.props.events).forEach(([event, handler]) => {
      this.element!.removeEventListener(event, handler);
    });
  }
}
