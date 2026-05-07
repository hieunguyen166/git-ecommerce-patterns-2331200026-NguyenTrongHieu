import { InventoryService } from '../../services/InventoryService.js';
import { PaymentService } from '../../services/PaymentService.js';
import { ShippingService } from '../../services/ShippingService.js';

class CheckoutFacade {

    constructor() {
        this.inventoryService = new InventoryService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
    }

    placeOrder(orderDetails) {

        const inStock =
            this.inventoryService.checkStock(
                orderDetails.productIds
            );

        console.log("Checking stock...");

        if (!inStock) {
            console.log("Products out of stock");
            return;
        }

        console.log("Products available");

        const paymentSuccess =
            this.paymentService.processPayment(
                orderDetails.userId
            );

        console.log("Processing payment...");

        if (!paymentSuccess) {
            console.log("Payment failed");
            return;
        }

        console.log("Payment successful");

        this.shippingService.arrangeShipping(
            orderDetails.shippingInfo
        );

        console.log("Shipping arranged");

        console.log("Order placed successfully");
    }
}

export { CheckoutFacade };
