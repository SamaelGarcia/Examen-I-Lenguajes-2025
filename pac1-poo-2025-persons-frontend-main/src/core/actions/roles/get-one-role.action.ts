import { api } from "../../../config/api";
import { RoleResponse } from "../../../infrastructure/interfaces/role.response";

export const getOneRole = async (id: string): Promise<{ result: RoleResponse }> => {
  const { data } = await api.get(`/roles/${id}`);
  return data;
};
