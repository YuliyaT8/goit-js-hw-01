function getShippingMessage(country, price, deliveryFee) {
  // Розрахунок загальної вартості
  const totalPrice = price + deliveryFee;

  // Формування повідомлення про доставку
  const message = `Shipping to ${country} will cost ${totalPrice} credits`;

  // Повернення повідомлення
  return message;
}

// Перевірка роботи функції
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"