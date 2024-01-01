import { Association } from "./association";
import { User } from "./user";

export interface Minute {
    id: number;
    content: string;
    date: string;
    association: Association;
    voters: User[];
}