export default class Product {
    public id: number;
    public name: string;
    public code: string;
    public units: string;
    public unitPrice: number;
    public discount: number;
    constructor(id: number, name: string, code: string, units: string, unitPrice: number, discount: number) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.units = units;
        this.unitPrice = unitPrice;
        this.discount = discount;
    }
    public getTotalWithoutDiscount(quantity: number): number {
        return quantity * this.unitPrice;
    }
    public getTotalWithDiscount(quantity: number): number {
        return quantity * (this.unitPrice - this.discount);
    }
    public getSavingAmount(quantity: number): number {
        return this.getTotalWithoutDiscount(quantity) - this.getTotalWithDiscount(quantity);
    }
}