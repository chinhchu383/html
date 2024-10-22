function nut() {
    var ho = document.getElementById("ho").value.trim();
    ten = document.getElementById("ten").value.trim();
    gt = document.querySelector('input[name="gender"]:checked'); // Lấy giới tính từ radio
    n = document.getElementById("ngay").value;
    thang = document.getElementById("thang").value;
    nam = document.getElementById("nam").value;
    gioiTinh = gt ? gt.value : "Chưa chọn";
    // Kiểm tra các trường nhập
    if (!ho || !ten || !n || !thang || !nam) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    

    alert("Xin chào " + ho + " " + ten + ", bạn sinh ngày " + n + "-" + thang + "-" + nam + ", giới tính: " + gioiTinh + "\nĐã đăng ký thành công.");
}
