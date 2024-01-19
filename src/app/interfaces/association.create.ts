import { Minute } from "./minute";
import { User } from "./user";

export interface AssociationCreate {
    idUsers: number[];
    name: string;
    description: string;
}