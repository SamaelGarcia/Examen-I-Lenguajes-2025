import { useState } from "react";
import { useRoles } from "../../hooks/useRoles";
import { Title } from "../../components/shared/Title";
import { Link } from "react-router-dom";
import { Edit, Trash } from "lucide-react";

export const RolesPage = () => {
  const [searchField, setSearchField] = useState("");

  const {
    rolesPaginationQuery,
    deleteRoleMutation
  } = useRoles();

  const { data, isLoading } = rolesPaginationQuery(searchField, 1, 10);

  const handleDelete = (id: string) => {
    deleteRoleMutation.mutate(id);
  };

  return (
    <div className="p-4">
      <Title text="Gestión de Roles" />
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <Link to="/roles/create" className="bg-blue-500 text-white px-4 py-2 rounded">
          Crear Rol
        </Link>
      </div>

      {isLoading ? (
        <p>Cargando roles...</p>
      ) : data?.result.items.length === 0 ? (
        <p>No hay roles registrados.</p>
      ) : (
        <table className="w-full border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">Descripción</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.result.items.map((role) => (
              <tr key={role.id} className="border-t">
                <td className="p-2">{role.name}</td>
                <td className="p-2">{role.description}</td>
                <td className="p-2 flex gap-2">
                  <Link to={`/roles/edit/${role.id}`} className="text-blue-600">
                    <Edit />
                  </Link>
                  <button onClick={() => handleDelete(role.id)} className="text-red-600">
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
