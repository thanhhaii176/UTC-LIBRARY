const total = localStorage.getItem('total') || 0;
    document.getElementById("amount").innerText = parseInt(total).toLocaleString() + "đ";
document.getElementById("pay").addEventListener("click", function(e) {
    alert("Thanh toán thành công");
    localStorage.removeItem('cart');
    window.location.href="../html/success.html";
});