import { useFormik, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import { useRoles } from "../../hooks/useRoles";
import { Title } from "../../components/shared/Title";
import {
  roleInitialValues,
  roleValidationSchema,
} from "../../infrastructure/validations/role.validation";

export const CreateRolePage = () => {
  const { createRoleMutation } = useRoles();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: roleInitialValues,
    validationSchema: roleValidationSchema,
    onSubmit: (values) => {
      createRoleMutation.mutate(values, {
        onSuccess: () => navigate("/roles"),
      });
    },
  });

  return (
    <div className="p-4 max-w-lg mx-auto">
      <Title text="Crear Nuevo Rol" />
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label>Nombre</label>
            <input
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full border px-3 py-2 rounded"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>
          <div>
            <label>Descripción</label>
            <input
              name="description"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className="w-full border px-3 py-2 rounded"
            />
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 text-sm">{formik.errors.description}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Crear Rol
          </button>
        </form>
      </FormikProvider>
    </div>
  );
};
