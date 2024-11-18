const DISCOUNT = {
  BASE: 100,
  AMOUNT: {
    STANDARD: 10,
    SPECIAL: 15,
  }
};

function validateAmount(amount) {
  const parsedAmount = parseFloat(amount);
	
  return Number.isFinite(parsedAmount) && parsedAmount >= 0;
}

function isFriday() {
  const today = new Date();

  return today.getDay() === 5;
}

function calculateDiscountMultiplier(totalAmount = 0) {
  return Math.floor(totalAmount / DISCOUNT.BASE);
}

function calculateCouponDiscountValue(totalAmount = 0) {
  if (!validateAmount(totalAmount)) {
    throw Error('Invalid total amount');
  }

  const discountValue = isFriday()
    ? DISCOUNT.AMOUNT.SPECIAL
    : DISCOUNT.AMOUNT.STANDARD;

  const discountMultiplier = calculateDiscountMultiplier(totalAmount);

  return discountValue * discountMultiplier;
}

module.exports = calculateCouponDiscountValue;
