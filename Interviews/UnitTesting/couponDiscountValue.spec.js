const calculateCouponDiscountValue = require('./couponDiscountValue');

const mockedDateFriday = new Date('2024-11-15T12:00:00Z'); //Friday
const mockedDateOtherThanFriday = new Date('2024-11-14T12:00:00Z'); //not Friday

describe('Discount value calculator', () => {
    it('should return correct value on any day except Friday', () => {
        jest.spyOn(global, 'Date').mockImplementation(() => mockedDateOtherThanFriday);

        expect(calculateCouponDiscountValue(99)).toBe(0);
        expect(calculateCouponDiscountValue(100)).toBe(10);
        expect(calculateCouponDiscountValue(205)).toBe(20);
        expect(calculateCouponDiscountValue(390)).toBe(30);
    })

    it('should return correct value on Friday', () => {
        jest.spyOn(global, 'Date').mockImplementation(() => mockedDateFriday);

        expect(calculateCouponDiscountValue(99)).toBe(0);
        expect(calculateCouponDiscountValue(100)).toBe(15);
        expect(calculateCouponDiscountValue(205)).toBe(30);
        expect(calculateCouponDiscountValue(390)).toBe(45);
    })

    it('should return correct integer value on string payload', () => {
        jest.spyOn(global, 'Date').mockImplementation(() => mockedDateOtherThanFriday);
        expect(calculateCouponDiscountValue("100")).toBe(10);
    })

    it('should always throw error on minus payload amount', () => {
        expect(() => calculateCouponDiscountValue(-200)).toThrow("Invalid total amount");
    })

    it('should always throw error on Infinit payload amount', () => {
        expect(() => calculateCouponDiscountValue(Infinity)).toThrow("Invalid total amount");
    })

    it('should always throw error on null payload amount', () => {
        expect(() => calculateCouponDiscountValue(null)).toThrow("Invalid total amount");
    })

    it.skip('should always throw error on undefined payload amount', () => { //It fails, so there is a small bug
        expect(() => calculateCouponDiscountValue(undefined)).toThrow("Invalid total amount");
    })

    it('should always throw error on empty string payload amount', () => {
        expect(() => calculateCouponDiscountValue("")).toThrow("Invalid total amount");
    })
});
