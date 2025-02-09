import { validateField, handleFieldBlur } from "../components/UI/Input/inputValidation";

function handleFormSubmit(event: Event): void {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  console.log("id:", form.id);

  let formIsValid = true;

  Array.from(form.elements).forEach((element) => {
    if (
      element instanceof HTMLInputElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement
    ) {
      if (element.name) {
        console.log(`Поле: ${element.name} = ${element.value}`);
        if (!validateField(element)) {
          formIsValid = false;
        }
      }
    }
  });

  if (!formIsValid) {
    console.log("Проверьте введённые данные.");
  } else {
    console.log("Форма прошла валидацию.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll<HTMLFormElement>("form");

  forms.forEach((form) => {
    form.addEventListener("submit", handleFormSubmit);

    Array.from(form.elements).forEach((element) => {
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLSelectElement ||
        element instanceof HTMLTextAreaElement
      ) {
        if (element.name) {
          element.addEventListener("blur", handleFieldBlur);
        }
      }
    });
  });
});
