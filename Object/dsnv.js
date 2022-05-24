// Tạo Class danh sách sinh viên với các thuộc tính và phương thức
function DanhSachNhanVien() {
    this.arr = [];

    // Find index
    this.findIndex = function (account) {
        var index = -1;
        this.arr.forEach(function(item, i) {
            if (item.account == account) {
                index = i;
            }
        });

        return index;
    }


    // Them nhan vien
    this.themNV = function (nv) {
        this.arr.push(nv)
    };
    

    // Delete nhan vien
    this.xoaNV = function (account) {
        var index = this.findIndex(account);

        if (index > -1) {
            this.arr.splice(index, 1);
        }
    }; 

    // Sửa nhân viên
    this.suaNV = function (account) {
        var index = this.findIndex(account);
        if (index !== -1) {
            return this.arr[index];
        }

        return null;
    };

    // Cập nhật nhân viên
    this.capNhat = function (nv) {
        var index = this.findIndex(nv.account);
        if (index !== -1) {
            this.arr[index] = nv; 
        }
    };

    // Tim kiem nhan vien 
    this.timKiemNV = function (keyword) {
        /*
            - Tạo mangTimKiem = []
            - Duyet mang arr
            - Nếu item.tenSV trùng với keyword
                => thêm sv vào mangTimKiem
            - Trả về manTimKiem
        */
        var mangTimKiem = [];
        this.arr.forEach(function (item) {
            if (item.danhHieu.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                mangTimKiem.push(item);
            }
        })

        return (mangTimKiem);
    };
    
}

