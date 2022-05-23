var dsnv = new DanhSachNhanVien();
var validation = new Valid();

// Thông tin nhân viên vẫn còn hiển thị khi reload web
getLocalStorage();


// Get Element by ID
function getID(id) {
    return document.getElementById(id);
}

// Create Element 
function createEle(element) {
    return document.createElement(element);
}

// Get information nhân viên
function LayThongTinNV(isAdd) {
    var _account = getID("tknv").value;
    var _name = getID("name").value;
    var _email = getID("email").value;
    var _password = getID("password").value;
    var _ngayLam = getID("datepicker").value;
    var _salary = getID("luongCB").value;
    var _chucVu = getID("chucvu").value;
    var _thoiGian = getID("gioLam").value;

    //flag (cờ) - isValid la true hợp lệ / false: k hợp lệ
    var isValid = true;

    // Check validation
    // Tài khoản
    if (isAdd) {
        isValid &=
            validation.kiemTraRong(_account, "tbTKNV", "(*) Vui lòng nhập tài khoản") &&
            validation.kiemTraDoDaiKiTu(
                _account,
                "tbTKNV",
                4,
                6,
                "(*) Vui lòng nhập từ 4 - 6 ký tự"
            ) &&
            validation.kiemTraMaSVTonTai(
                _account,
                "tbTKNV",
                "(*) Tài khoản nhân viên đã tồn tại",
                dsnv.arr
            );
        // &&
        // validation.kiemChuoiSo(
        //     _account, 
        //     "tbTKNV", 
        //     "(*) Tài khoản là chuỗi số");
    }

    // Họ và tên
    isValid &=
        validation.kiemTraRong(_name, "tbTen", "(*) Vui lòng nhập họ tên") &&
        validation.kiemChuoiKyTu(_name, "tbTen", "(*) Vui lòng nhập chuỗi ký tự");

    // Email
    isValid &=
        validation.kiemTraRong(_email, "tbEmail", "(*) Vui lòng nhập email") &&
        validation.kiemTraEmail(_email, "tbEmail", "(*) Vui lòng nhập đúng form abc@gmail.com")


    // Password
    isValid &=
        validation.kiemTraRong(_password, "tbMatKhau", "(*) Vui lòng nhập mật khẩu") &&
        validation.kiemTraDoDaiKiTu(_password, "tbMatKhau", 6, 10, "(*) Vui lòng nhập từ 6 - 10 ký tự")
    // && validation.kiemTraMatKhau(_password, "tbMatKhau", "Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt")


    // Salary
    isValid &= validation.kiemTraLuong(
        _salary,
        "tbLuongCB",
        "(*) Mức lương trong khoảng từ 1.000.000 - 20.000.000",
        1000000,
        20000000
    )


    // Chức vụ
    isValid &= validation.kiemTraChucVu(
        "chucvu",
        "tbChucVu",
        "(*) Vui lòng chọn đúng chức vụ",
    )


    // Giờ làm 
    isValid &= validation.kiemTraGioLam(
        _thoiGian,
        "tbGiolam",
        "(*) Thời gian làm việc từ 80 - 200 giờ",
        80,
        200
    )






    //check isValid
    if (!isValid) return;
    // Tạo đối tượng nhanVien từ class NhanVien
    var nhanVien = new NhanVien(
        _account,
        _name,
        _email,
        _password,
        _ngayLam,
        _salary,
        _chucVu,
        _thoiGian,
    )

    // Tinh tong luong
    nhanVien.tinhLuong();

    // Xếp loại nhân viên
    nhanVien.xepLoai();

    return nhanVien;
}

// Creat table
function taoBang(data) {
    var content = "";
    data.forEach(function (item) {
        content += `
            <tr>
                <td>${item.account}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.ngayLam}</td>
                <td>${item.chucVu}</td>
                <td>${item.tongLuong}</td>
                <td>${item.danhHieu}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-update" data-toggle="modal" data-target="#myModal" onclick="suaNV('${item.name}')">
                        Sửa
                    </button>

                    <button type="button" class="btn btn-danger btn-delete" onclick="deleteNV('${item.name}')">
                        Xóa
                    </button>
                </td>
            </tr>
        `
    })
    getID("tableDanhSach").innerHTML = content;

}

// Tính năng 
// Delete nhân viên
function deleteNV(id) {
    dsnv.xoaNV(id);
    taoBang(dsnv.arr);
    setLocalStorage();
}

// Sửa nhân viên
function suaNV(id) {
    var nv = dsnv.suaNV(id);
    if (nv) {
        getID("tknv").value = nv.account;
        getID("name").value = nv.name;
        getID("email").value = nv.email;
        getID("datepicker").value = nv.ngayLam;
        getID("luongCB").value = nv.salary;
        getID("chucvu").value = nv.chucVu;
        getID("gioLam").value = nv.thoiGian;
    }

    // Display block button "Cập nhật"
    getID("btnCapNhat").style.display = "block";

    // Disabled button "Thêm người dùng"
    // getID("btnThemNV").disabled = true;
}

// Cập nhật nhân viên
getID("btnCapNhat").onclick = function () {
    var nhanVien = LayThongTinNV();
    // console.log(worker);
    dsnv.capNhat(nhanVien);
    taoBang(dsnv.arr);
    setLocalStorage();
}


// Validation 


// Search info
// getID("btnTimNV").onclick = function () {
//     // var timKiemNV = dsnv.timKiemNV();
//     // console.log(timKiemNV)
//     var keyword = getID("searchName").value;
//     var mangTimKiem = dsnv.timKiemNV(keyword);
//     taoBang(mangTimKiem)
// }

getID("searchName").addEventListener("keyup", function () {
    var keyword = getID("searchName").value;
    var mangTimKiem = dsnv.timKiemNV(keyword);
    taoBang(mangTimKiem);
})

// Click button to display
getID("btnThemNV").onclick = function () {
    var nhanVien = LayThongTinNV(true);
    if (nhanVien) {
        dsnv.themNV(nhanVien);
        taoBang(dsnv.arr);
        setLocalStorage();
    }
    // if (_thoiGian) {
    // }
}



// Save data in Local storage
function setLocalStorage() {
    // Convert JSON to string
    var dataString = JSON.stringify(dsnv.arr);
    localStorage.setItem("Danh sách nhân viên", dataString);
}

// Get data to display on data table
function getLocalStorage() {
    if (localStorage.getItem("Danh sách nhân viên")) {
        var dataString = localStorage.getItem("Danh sách nhân viên");
        // Convert string to JSON
        var dataJson = JSON.parse(dataString);
        dsnv.arr = dataJson;
        taoBang(dsnv.arr);
    }
}