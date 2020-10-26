export default class Product {
    // constructor is template to create the object
    constructor(name, price, quantity, maxQuantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.maxQuantity = maxQuantity;
    }

    setName(newProductName) {
        this.name = newProductName;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getQuantity() {
        return this.quantity;
    }

    dispense() {
        if (this.quantity > 0) {
            this.quantity -= 1;
            return true;
        }
        return false;        
    }

    restock(amount) {
        if (amount + this.quantity <= this.maxQuantity) {
            this.quantity += amount;
            return true;
        }
        return false;
    }
}