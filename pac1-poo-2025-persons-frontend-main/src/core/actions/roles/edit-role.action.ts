import { api } from "../../../config/api";
import { RoleFormDto } from "../../../infrastructure/interfaces/role.request";

export const updateRole = async (id: string, payload: RoleFormDto) => {
  const { data } = await api.put(`/roles/${id}`, payload);
  return data;
};
