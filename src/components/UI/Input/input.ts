import Block from "../../Block";
import templateInput from "./Input.hbs?raw";
import { handleFieldBlur } from "./inputValidation";

export interface InputProps {
  id: string;
  label?: string;
  type: string;
  placeholder: string;
  events?: { [key: string]: (event: Event) => void };
}

export default class Input extends Block {
  constructor(props: InputProps) {
    const defaultEvents = { focusout: handleFieldBlur };
    const mergedProps = {
      ...props,
      events: {
        ...defaultEvents,
        ...(props.events || {}),
      },
    };

    super(templateInput, mergedProps);
  }
}
