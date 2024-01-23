import { OrderState } from "./order-state";
import { Product } from "./product";

export interface Order {
    id: number;
    created_at: Date;
    amount: number;
    price: number;
    assigned_to_driver_at: Date;
    delivered_at: Date;
    last_modified_at: Date;
    last_modified_by: string;
    product: Product[];
    orderState: OrderState
}