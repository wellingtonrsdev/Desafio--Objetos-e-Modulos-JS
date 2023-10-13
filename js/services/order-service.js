import * as ShippingService from './shipping-service.js';
import Order from '../models/order.js';

export function total(order) {
    const shipment = ShippingService.shipment(order);
    const discount = order.basic * order.discount / 100;
    return order.basic - discount + shipment;
}