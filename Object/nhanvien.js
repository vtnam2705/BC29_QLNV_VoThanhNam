// Convert integer -> float
var unitOfCurrency = new Intl.NumberFormat("vn-VN");
// var minTime = 80;
// var maxTime = 200;

// Tạo Class NhanVien
function NhanVien (_account, _name, _email, _password, _ngayLam, _salary, _chucVu, _thoiGian, _tongLuong, _danhHieu) {
    this.account = _account;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.ngayLam = _ngayLam;
    this.salary = _salary;
    this.chucVu = _chucVu;
    this.thoiGian = _thoiGian;
    this.tongLuong = 0;
    this.danhHieu = "";


    this.tinhLuong = function() {
        if (this.chucVu == "Sếp") {
            this.tongLuong = `${unitOfCurrency.format(parseFloat(this.salary) * 3)} Vnd`;
        } else if (this.chucVu == "Trưởng phòng") {
            this.tongLuong = `${unitOfCurrency.format(parseFloat(this.salary) * 2)} Vnd`;
        } else if (this.chucVu == "Nhân viên") {
            this.tongLuong = `${unitOfCurrency.format(parseFloat(this.salary))} Vnd`
        }
    }

    this.xepLoai = function() {
        if (this.thoiGian >= 192) {
            this.danhHieu =  "Nhân viên xuất sắc";
        } else if (this.thoiGian  >= 176 && this.thoiGian < 192) {
            this.danhHieu = "Nhân viên giỏi";
        } else if (this.thoiGian >= 160 && this.thoiGian < 176) {
            this.danhHieu = "Nhân viên khá";
        } else if (this.thoiGian < 160) {
            this.danhHieu = "Nhân viên trung bình";
        }
    }
}