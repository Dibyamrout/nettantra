let Delete = () => {
    let detail = document.getElementById('cart-detail');
    let price = document.getElementById('price');
    alert('Are you Really Want to Remove')
    detail.remove();
    price.remove();
    var inner = document.getElementById('cart');
    inner.innerHTML = "<h1> Your Cart is Empty </h1>";


}