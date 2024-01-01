import { Role } from "./role";

export interface UserRole extends Role {
    association: string;
}