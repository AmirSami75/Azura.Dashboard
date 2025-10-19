import { Roles } from "./Roles";

export type UserProps = {
  branchId: string;
  mobile: string;
  fullName: string;
  userName: string;
  personelCode: string;
  email: string;
  phone: string;
  address: string;
  isActive: boolean;
  isLocked: boolean;
  parentId: string;
  parentName: string;
  roles: Roles[];
};
