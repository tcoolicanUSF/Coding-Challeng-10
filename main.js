//Coding Challenge 10: E-commerce Event-Driven Product Management
const purchaseProduct = document.getElementById(purchaseProduct) 

const sizeSelector = document.getElementById('size-Selector') 
const priceElement = document.getElementById('product-price')

sizeSelector.addEventListener('change', (event) => {
    const selectedPrice = event.target.value
    priceElement.textContent= `$${selectedPrice}`
})  

const stockBySize = {
    small: 10, 
    medium: 5,
    large: 0
}