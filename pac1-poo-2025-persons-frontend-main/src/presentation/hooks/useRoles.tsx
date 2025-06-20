import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPaginationRoles } from "../core/actions/roles/get-pagination-roles.action";
import { getOneRole } from "../core/actions/roles/get-one-role.action";
import { createRole } from "../core/actions/roles/create-role.action";
import { updateRole } from "../core/actions/roles/edit-role.action";
import { deleteRole } from "../core/actions/roles/delete-role.action";
import { RoleResponse } from "../infrastructure/interfaces/role.response";
import { RoleDto, RoleFormDto } from "../types/role.types";

export const useRoles = () => {
  const queryClient = useQueryClient();

  const rolesPaginationQuery = (searchTerm: string = "", page: number = 1, pageSize: number = 10) =>
    useQuery({
      queryKey: ["roles", { searchTerm, page, pageSize }],
      queryFn: () => getRoles(searchTerm, page, pageSize),
    });

  const oneRoleQuery = (roleId: string) =>
    useQuery({
      queryKey: ["role", roleId],
      queryFn: () => getRoleById(roleId),
      enabled: !!roleId,
    });

  const createRoleMutation = useMutation({
    mutationFn: (data: RoleFormDto) => createRole(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });

  const editRoleMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: RoleFormDto }) => updateRole(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });

  const deleteRoleMutation = useMutation({
    mutationFn: (id: string) => deleteRole(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });

  return {
    rolesPaginationQuery,
    oneRoleQuery,
    createRoleMutation,
    editRoleMutation,
    deleteRoleMutation,
  };
};
