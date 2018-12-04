var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random()*100)+1)
  var obj = { itemName: [item], itemPrice: price }
  cart.push(obj)
  return console.log(`${item} has been added to your cart.`)
}

function viewCart() {
  if (cart.length > 0){
    var string = 'In your cart, you have'
    for(var i=0; cart.length > i; i++){
      for (var keys in cart[i]){
        string += `${keys} at $${cart[i][keys]}`+`${cart.length === i+1 ? '.' : ', '}`
      }
    }
    console.log(string)
  }else{
    console.log('Your shopping cart is empty.')
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
