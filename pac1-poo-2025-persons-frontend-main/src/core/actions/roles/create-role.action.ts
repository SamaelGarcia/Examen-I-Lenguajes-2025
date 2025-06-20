import { api } from "../../../config/api";
import { RoleFormDto } from "../../../infrastructure/interfaces/role.request";

export const createRole = async (payload: RoleFormDto) => {
  const { data } = await api.post("/roles", payload);
  return data;
};
