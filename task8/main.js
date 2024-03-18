calculateTotal = () => { 
    const productName = document.getElementById('product').value; 
    const quantity = parseFloat(document.getElementById('quantity').value); 
    const price = parseFloat(document.getElementById('price').value); 
 
    if (!productName  `isNaN(quantity)`    `isNaN(price)`) { 
        alert('Пожалуйста, введите корректные данные для продукта.'); 
        return; 
    } 
 
    if (quantity <= 0 || price <= 0) { 
        alert('Количество и цена должны быть больше нуля.'); 
        return; 
    } 
 
    const productCost = quantity * price; 
    const totalCostElement = document.getElementById('totalCost'); 
    totalCostElement.textContent = `Общая стоимость продукта` `"${productName}": ${productCost} руб.`; 
}
