import Order from '../models/order.js';

export function shipment(order) {

    let deliveryFee = 0;

    if(order.basic < 100) {
        deliveryFee = 20;
    }
    else if(order.basic >= 100 && order.basic <= 200) {
        deliveryFee = 12;
    }
    else {
        deliveryFee = 0;
    }
    return deliveryFee;
}