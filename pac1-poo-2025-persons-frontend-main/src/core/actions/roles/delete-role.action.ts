import { api } from "../../../config/api";

export const deleteRole = async (id: string) => {
  const { data } = await api.delete(`/roles/${id}`);
  return data;
};
