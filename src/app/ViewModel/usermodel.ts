
export interface IUserModel {
    FirstName : string;
    LastName: string;
    Password: string;
    EmailAddress: string;
    Id: string;
    RoleId: string;
    RoleName: string;
}

export class UserModel implements IUserModel{
    FirstName: string;
    LastName: string;
    Password: string;
    EmailAddress: string;
    Id: string;
    RoleId: string;
    RoleName: string;
}

export class UserRoleModel {
    RoleId: string;
    RoleName: string;
}