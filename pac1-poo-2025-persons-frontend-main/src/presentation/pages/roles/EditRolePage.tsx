import { useParams, useNavigate } from "react-router-dom";
import { useRoles } from "../../hooks/useRoles";
import { useFormik, FormikProvider } from "formik";
import { Title } from "../../components/shared/Title";
import {
  roleInitialValues,
  roleValidationSchema,
} from "../../infrastructure/validations/role.validation";
import { Loader } from "../../components/shared/Loader";

export const EditCountryPage = () => {
  const { roleId } = useParams();
  const navigate = useNavigate();
  const { oneRoleQuery, editRoleMutation } = useRoles();

  const { data, isLoading } = oneRoleQuery(roleId!);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: data?.result || roleInitialValues,
    validationSchema: roleValidationSchema,
    onSubmit: (values) => {
      editRoleMutation.mutate(
        { id: roleId!, data: values },
        {
          onSuccess: () => navigate("/roles"),
        }
      );
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <Title text="Editar Rol" />
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
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Guardar Cambios
          </button>
        </form>
      </FormikProvider>
    </div>
  );
};
