 let product = { 
    name: "Phone", 
    price: 79900, 
    inStock: true, 
    brand: "Apple iPhone", 
    specifications: { 
        screenSize: "6.1 дюймов", 
        camera: "12 Мп", 
        memory: "256 Гб" 
    }, 
    discount: { 
        percentage: 25, 
        expirationDate: "2024-02-29" 
    } 
}; 
  
let customer = { 
    name: "Виктор", 
    budget: 72715 
}; 
  
if (customer.budget < product.price) { 
    console.log(`Извините, ${customer.name}, у вас недостаточно средств для покупки товара ${product.name}.`); 
} else { 
    console.log(`Уважаемый ${customer.name}, ваш бюджет позволяет совершить покупку продукта ${product.name}:`); 
    console.log(`Технические характеристики товара:`); 
    console.log(product.specifications); 
 
    if (product.discount) { 
        let discountedPrice = product.price * (1 - product.discount.percentage / 100); 
        console.log(`Скидка ${product.discount.percentage}% актуальна до ${product.discount.expirationDate}.`); 
        console.log(`Цена со скидкой: ${discountedPrice} !`); 
    } else { 
        console.log(`Цена товара: ${product.price}`); 
    } 
}