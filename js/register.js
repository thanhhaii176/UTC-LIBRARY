document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!fullname || !username || !password || !confirmPassword) {
      alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (password !== confirmPassword) {
      alert("❌ Mật khẩu xác nhận không khớp!");
      return;
    }
    const userData = {
      fullname: fullname,
      username: username,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    alert("✅ Đăng ký thành công! Bạn sẽ được chuyển đến trang đăng nhập.");
    window.open("login.html", "_self");
  });
});
