export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  role: Role;
  permissions: Permission[];
  dateCreate: string;
  dateUpdate: string;
  dateDelete: string | null;
}

export interface Role {
  roleId: string;
  roleName: string;
}

export interface Permission {
  permissionId: string;
  permissionName: string;
}

export interface UserPermission {
  permissionId: string;
  permission: Permission;
  isReadable: boolean;
  isWritable: boolean;
  isDeletable: boolean;
}
