const names = ["Laptop", "Smartphone", "Headphone", "Monitor", "Keyboard"];
const prices = [1200, 450, 80, 300, 150];
const stocks = [10, 0, 50, 15, 20];

const highEndProducts = () => {
    const highEnd = names.filter((_, index) => prices[index] > 500);
    alert("Sản phẩm cao cấp: " + (highEnd.length > 0 ? highEnd.join(", ") : "Không có"));
};

const checkStatus = () => {
    const outOfStock = stocks.some(stock => stock === 0);
    const aboveFloor = prices.every(price => price > 100);
    alert(
        `Ít nhất 1 sản phẩm hết hàng: ${outOfStock ? "Có" : "Không"}
Toàn bộ giá sàn trên 100: ${aboveFloor ? "Đúng" : "Sai"}`
    );
};

const calcCapital = () => {
    const totalCapital = prices.reduce((total, price, index) => {
        return total + (price * stocks[index]);
    }, 0);
    alert(`Tổng giá trị tài sản trong kho: ${totalCapital.toLocaleString()} VNĐ`);
};

const applySale = () => {
    prices.forEach((price, index) => {
        prices[index] = price * 0.9;
    });
    alert("Đã cập nhật giảm giá 10% cho tất cả sản phẩm!");
};

const searchProducts = () => {
    const keyword = prompt("Nhập từ khóa cần tìm:");

    let resultText = "";
    names.forEach((name, index) => {
        if (name.toLowerCase().includes(keyword.toLowerCase())) {
            resultText += `${name} | Giá: ${prices[index]} | Kho: ${stocks[index]}`; 
        }
    });

    if (resultText === "") {
        alert("Không tìm thấy sản phẩm nào.");
    } 
};

const showInventory = () => {
    const statusReport = names.map((name, index) => {
        const status = stocks[index] > 0 ? "Còn hàng" : "Hết hàng";
        return `${name}: ${status}`;
    });
    alert("Báo cáo kho:" + statusReport.join("\n"));
};

const manager = () => {
    let loop = true;
    
    while (loop) { 
        const choice = +prompt(`
            --- QUẢN LÝ KHO HÀNG ---
            1. Lọc sản phẩm cao cấp
            2. Kiểm định dữ liệu
            3. Phân tích vốn hóa
            4. Chiết khấu 10%
            5. Tìm kiếm sản phẩm
            6. Báo cáo tồn kho
            7. Thoát
            Chọn (1-7):
        `);

        switch (choice) {
            case 1: 
                highEndProducts(); 
                break;
            case 2: 
                checkStatus(); 
                break;
            case 3: 
                calcCapital(); 
                break;
            case 4: 
                applySale(); 
                break;
            case 5: 
                searchProducts(); 
                break;
            case 6: 
                showInventory(); 
                break;
            case 7:
                alert("Tạm biệt!");
                loop = false;
                break;
            default: 
                alert("Lựa chọn không hợp lệ");
                break;
        }
    }
}
manager();