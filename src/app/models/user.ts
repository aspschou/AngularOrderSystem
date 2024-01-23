import { Order } from "./order";
import { UserRole } from "./user-role";

export interface User {
    id: number;
    name: string;
    display_name: string;
    address_line: string;
    postal_code: string;
    city: string;
    country_code: string;
    phone_number: string;
    mail: string;
    password: string;
    user_role: UserRole;
    orders: Order[];
}