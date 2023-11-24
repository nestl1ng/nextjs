const requiredMessage = "Заполните все поля";
export const validation = {
  password: {
    // required: requiredMessage,
    minLength: {
      value: 6,
      message: "Длина не менее 6 символов",
    },
  },
  name: {
    //required: requiredMessage,
    pattern: {
      value: /^[А-Яа-яЁё]+$/,
      message: "Текст только на кириллице",
    },
  },
  message: {
    //required: requiredMessage,
    pattern: {
      value: /^AnAnAs|ananas$/,
      message: "ananas или AnAnAs",
    },
  },
};

export const formInputs = [
  {
    name: "name",
    label: "Name: ",
    type: "text",
    rules: validation.name,
  },
  {
    name: "password",
    label: "Password: ",
    type: "password",
    rules: validation.password,
  },
  {
    name: "message",
    label: "Message: ",
    type: "text",
    rules: validation.message,
  },
  { name: "btn", type: "submit" },
];
