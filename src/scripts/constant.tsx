export const emailRegex = new RegExp("\\S+@\\S+\\.\\S+");
export const passwordRegex = new RegExp(
  "^(.*(([A-Za-z]+(.*)[0-9]+)|([0-9]+(.*)[A-Za-z]+))(.*))$"
);
export const contactRegex = new RegExp("^[0-9]{11,12}$");
