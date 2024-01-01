import { Association } from "./association";
import { Minute } from "./minute";
import { Role } from "./role";
import { User } from "./user";

export interface AssociationRole extends Role {
    member: User
}