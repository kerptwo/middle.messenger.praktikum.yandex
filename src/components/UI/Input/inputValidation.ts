export function validateField(
  field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
): boolean {
  const name = field.name;
  const value = field.value;
  let regex: RegExp | undefined;
  let errorMsg = "";
  let isValid = true;

  switch (name) {
    case "first_name":
    case "second_name":
      // Имя и Фамилия: латиница или кириллица, первая буква заглавная,
      // без пробелов и цифр, допустим только дефис (пример: "Анна-Мария")
      regex = /^[A-ZА-ЯЁ][a-zа-яё]+(?:-[A-ZА-ЯЁ][a-zа-яё]+)*$/;
      errorMsg = `Поле "${name}" должно начинаться с заглавной буквы и содержать только буквы (латиница или кириллица) с возможным дефисом.`;
      break;

    case "login":
      // Логин: от 3 до 20 символов, латиница, может содержать цифры,
      // но не состоять только из цифр; допустимы дефис и нижнее подчёркивание.
      regex = /^(?=.{3,20}$)(?=.*[A-Za-z])[A-Za-z0-9_-]+$/;
      errorMsg =
        "Логин должен быть от 3 до 20 символов, содержать латинские буквы и не состоять только из цифр.";
      break;

    case "email":
      // Email: латиница, может включать цифры, дефис и подчёркивание,
      // обязательно должна быть «собака» (@) и точка после неё,
      // а перед точкой обязательно должны быть буквы.
      regex =
        /^[A-Za-z0-9_-]+@[A-Za-z0-9_-]*[A-Za-z]+[A-Za-z0-9_-]*\.[A-Za-z]+$/;
      errorMsg = "Введите корректный email (например, user@example.com).";
      break;

    case "password":
      // Пароль: от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.
      regex = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;
      errorMsg =
        "Пароль должен быть от 8 до 40 символов, содержать хотя бы одну заглавную букву и одну цифру.";
      break;

    case "phone":
      // Телефон: от 10 до 15 символов, состоит из цифр, может начинаться с +
      regex = /^\+?\d{10,15}$/;
      errorMsg =
        "Телефон должен содержать от 10 до 15 цифр и может начинаться с +.";
      break;

    case "message":
      if (value.trim() === "") {
        isValid = false;
        errorMsg = "Сообщение не должно быть пустым.";
      }
      break;

    default:
      return true;
  }

  if (regex && !regex.test(value)) {
    isValid = false;
  }

  const errorSpan = field.parentElement?.querySelector(
    ".error-message"
  ) as HTMLElement | null;

  if (!isValid) {
    console.log(errorMsg);
    field.classList.add("error");
    if (errorSpan) {
      errorSpan.textContent = errorMsg;
    }
  } else {
    field.classList.remove("error");
    if (errorSpan) {
      errorSpan.textContent = "";
    }
  }

  return isValid;
}

export function handleFieldBlur(event: Event): void {
  const element = event.target;
  // Проверяем, что элемент является одним из типов, у которых есть свойства name и value
  if (
    element instanceof HTMLInputElement ||
    element instanceof HTMLSelectElement ||
    element instanceof HTMLTextAreaElement
  ) {
    if (element.name) {
      validateField(element);
    }
  }
}
