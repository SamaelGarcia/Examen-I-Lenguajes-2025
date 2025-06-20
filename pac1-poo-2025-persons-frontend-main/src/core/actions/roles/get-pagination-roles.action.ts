import { api } from "../../../config/api";
import { PageResponse } from "../../../infrastructure/interfaces/page.response";
import { RoleResponse } from "../../../infrastructure/interfaces/role.response";

export const getPaginationRoles = async (
  term: string,
  page: number,
  take: number
): Promise<{ result: PageResponse<RoleResponse> }> => {
  const { data } = await api.get(`/roles?term=${term}&page=${page}&take=${take}`);
  return data;
};
