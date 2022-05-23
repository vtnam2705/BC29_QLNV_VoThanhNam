function Valid() {
    // Kiểm tra ô nhập thông tin rỗng
    this.kiemTraRong = function (value, errorId, mess) {
        if (value === "") {
            //error
            getID(errorId).innerHTML = mess;
            getID(errorId).style.display = "block";
            return false;
        }

        getID(errorId).innerHTML = "";
        getID(errorId).style.display = "none";
        return true;
    };



    // Kiểm tra độ dài ký tự 
    this.kiemTraDoDaiKiTu = function (value, errorId, min, max, mess) {
        if (value.trim().length >= min && value.trim().length <= max) {
            //true
            getID(errorId).innerHTML = "";
            getID(errorId).style.display = "none";
            return true;
        }

        //false
        getID(errorId).innerHTML = mess;
        getID(errorId).style.display = "block";
        return false;
    };


    // Kiểm chuỗi số
    this.kiemChuoiSo = function (value, errorId, mess) {
        var checkString = "/^[0-9]+$/";

        if (value.match(checkString)) {
            //true
            getID(errorId).innerHTML = "";
            getID(errorId).style.display = "none";
            return true;
        }

        //false
        getID(errorId).innerHTML = mess;
        getID(errorId).style.display = "block";
        return false;
    }

    // Kiểm tra chuỗi ký tự
    this.kiemChuoiKyTu = function (value, errorId, mess) {
        var letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

        if (value.match(letter)) {
            //true
            getID(errorId).innerHTML = "";
            getID(errorId).style.display = "none";
            return true;
        }

        //false
        getID(errorId).innerHTML = mess;
        getID(errorId).style.display = "block";
        return false;
    }


    // Kiểm tra email
    this.kiemTraEmail = function (value, errorId, mess) {
        var checkEmail = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
        // "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

        if (value.match(checkEmail)) {
            // true
            getID(errorId).innerHTML = "";
            getID(errorId).style.display = "none";
            return true;
        }

        // false
        getID(errorId).innerHTML = mess;
        getID(errorId).style.display = "block";
        return false;
    }

    // Kiểm tra mật khẩu 
    this.kiemTraMatKhau = function (value, errorId, mess) {
        var checkPass = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/";

        if (value.match(checkPass)) {
            // true
            getID(errorId).innerHTML = "";
            getID(errorId).style.display = "none";
            return true;
        }

        // false
        getID(errorId).innerHTML = mess;
        getID(errorId).style.display = "block";
        return false;
    }

    // Kiểm tra ngày tháng năm
    // this.kiemTraNgay = function (value, errorId, mess) {
    //     var checkDay = 
    // }

    // Kiểm tra lương 
    this.kiemTraLuong = function (value, errorId, mess, min, max) {
        // var checkLuong = "";
        if (value >= min && value <= max) {
            getID(errorId).innerHTML = "";
            getID(errorId).style.display = "none";
            return true;
        } else {
            getID(errorId).innerHTML = mess;
            getID(errorId).style.display = "block";
            return false;
        }
    }


    // Kiểm tra chức vụ
    this.kiemTraChucVu = function (selectID, errorId, mess) {
        if (getID(selectID).selectedIndex !== 0) {
            getID(errorId).innerHTML = "";
            getID(errorId).style.display = "none";
            return true;
        }

        getID(errorId).innerHTML = mess;
        getID(errorId).style.display = "block";
        return false;
    }

    // Kiểm tra giờ làm
    this.kiemTraGioLam = function (value, errorId, mess, minTime, maxTime) {

        if (value >= minTime && value <= maxTime) {
            getID(errorId).innerHTML = "";
            getID(errorId).style.display = "none";
            return true;
        } else {
            getID(errorId).innerHTML = mess;
            getID(errorId).style.display = "block";
            return false;
        }
    }


    // Kiểm tra mã sinh viên tồn tại
    this.kiemTraMaSVTonTai = function (value, errorId, mess, arr) {
        var isStatus = true;

        arr.forEach(function (item) {
            if (item.account === value) {
                //MaSV ton tai
                isStatus = false;
            }
        });

        if (isStatus) {
            //true
            getID(errorId).innerHTML = "";
            getID(errorId).style.display = "none";
            return true;
        }

        //false
        getID(errorId).innerHTML = mess;
        getID(errorId).style.display = "block";
        return false;
    };
}


// Lặp từng phần tử trong nhanVien kiểm tra giá trị từng property
//  Nếu giá trị value trong từng ô nhạp giá trị bằng rỗng => xuất hiện thông báo 



