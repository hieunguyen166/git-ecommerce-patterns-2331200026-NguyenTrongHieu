// Base Decorator
class ProductDecorator {

    constructor(product) {
        this.product = product;
    }

    getPrice() {
        return this.product.getPrice();
    }

    getDescription() {
        return this.product.getDescription();
    }
}

class GiftWrapDecorator extends ProductDecorator {

    constructor(product) {
        super(product);
    }

    getPrice() {

        return this.product.price + 5;
    }

    getDescription() {

        return this.product.name + ", gift wrapped";
    }
}

class ExtendedWarrantyDecorator extends ProductDecorator {

    constructor(product) {
        super(product);
    }

    getPrice() {

        return this.product.getPrice() + 20;
    }

    getDescription() {

        return this.product.getDescription()
            + ", with extended warranty";
    }
}

class BaseProduct {

    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    getPrice() {
        return this._price;
    }

    getDescription() {
        return this._name;
    }
}

export {
    BaseProduct, ExtendedWarrantyDecorator, GiftWrapDecorator, ProductDecorator
};

