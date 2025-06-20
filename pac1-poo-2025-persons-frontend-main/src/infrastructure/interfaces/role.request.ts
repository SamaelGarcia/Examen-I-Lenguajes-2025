export interface RoleFormDto {
  name: string;
  description: string;
}

export interface RoleDto extends RoleFormDto {
  id: string;
}
