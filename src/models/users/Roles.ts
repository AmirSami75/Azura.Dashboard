import { Permission } from "./Permission";

export type Roles = {
  name: string;
  title: string;
  type: string;
  permissions: Permission[];
  id: string;
  creationDate: string;
  modificationDate: string;
};
