const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /\d/;
export const validators = {
  username: (value) => {
    if (value.length === 0) {
      return "⚠ No debe estar vacío.";
    }
    if (value.length > 35) {
      return "⚠ No debe tener más de 35 carácteres.";
    }
    if (!emailRegex.test(value)) {
      return "⚠ Debe ser un e-mail válido.";
    }
  },
  password: (value) => {
    if (value.length < 6 || value.length > 10) {
      return "⚠ Debe tener entre 6 y 10 carácteres.";
    }
    if (!passwordRegex.test(value)) {
      return "⚠ Debe tener al menos un número.";
    }
  },
};

export function validate({ username, password }) {
  return {
    username: validators.username(username),
    password: validators.password(password),
  };
}
