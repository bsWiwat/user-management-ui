export interface CreateUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roleId: string;
  username: string;
  password: string;
  permissions: {
    permissionId: string;
    isReadable: boolean;
    isWritable: boolean;
    isDeletable: boolean;
  }[];
}

export interface UpdateUserDTO {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roleId: string;
  username: string;
  permissions: {
    permissionId: string;
    isReadable: boolean;
    isWritable: boolean;
    isDeletable: boolean;
  }[];
}
