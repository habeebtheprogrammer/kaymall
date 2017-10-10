var addbtn = document.getElementsByClassName('addToCart');
addbtn[0].addEventListener("click",addToCart)
var addToCart = () => {
    var node = document.getElementsByClassName('addedItems');
    var num = node[0].innerHTML;
    num = parseInt(num);
    num += 1;
    node[0].innerHTML = num;
    alert("added successfully");
}
