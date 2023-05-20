let price = document.querySelectorAll('.price');
let sumPrice= 0;
for(let i = 0 ; i < price.length; i++){
    sumPrice += Number(price[i].innerHTML);
}
//console.log(sumPrice);
let cartSum = document.querySelector('#cart_sum');
cartSum.innerHTML = sumPrice;
let discountSum
function Discount () {
    discountSum =Number(sumPrice) - Number(sumPrice) * 0.2;
    return discountSum;
}
discountSum = Discount();
document.getElementById("Mybutton").onclick = function(){
    cartSum.innerHTML = discountSum;
    return cartSum;
}
//console.log(cartSum);
