import * as Yup from "yup";

export const roleInitialValues = {
  name: "",
  description: "",
};

export const roleValidationSchema = Yup.object({
  name: Yup.string().required("Nombre requerido"),
  description: Yup.string().required("Descripción requerida"),
});
