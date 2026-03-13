// Hiển thị popup đặt món khi nhấn "Mua ngay" và reset form
document.getElementById('buy-now').addEventListener('click', function() {
    const popup = document.getElementById('order-popup');
    popup.style.display = 'flex';
    document.getElementById('dish').value = '';
    document.getElementById('quantity').value = '1';
});

// Đóng popup khi nhấn nút close
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
});

// Thêm món vào giỏ hàng với kiểm tra
document.getElementById('add-to-cart').addEventListener('click', function() {
    const dish = document.getElementById('dish').value.trim();
    const quantity = document.getElementById('quantity').value;

    if (dish && quantity) {
        const cartItems = document.getElementById('cart-items');
        const li = document.createElement('li');
        li.textContent = `${dish} - SL: ${quantity}`;
        cartItems.appendChild(li);
        document.getElementById('order-popup').style.display = 'none';
        
        let total = parseInt(document.getElementById('total').textContent.replace(' VNĐ', '')) || 0;
        total += 50000 * quantity;
        document.getElementById('total').textContent = `${total} VNĐ`;

        alert('Thêm giỏ hàng thành công!');
    } else {
        alert('Thêm giỏ hàng thất bại! Vui lòng nhập đầy đủ món và số lượng.');
    }
});

// Hiển thị giỏ hàng khi nhấn vào biểu tượng giỏ hàng
document.getElementById('cart-icon').addEventListener('click', function() {
    document.getElementById('cart-popup').style.display = 'flex';
});

// Hiển thị popup đăng nhập khi nhấn vào biểu tượng người dùng
document.getElementById('user-icon').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'flex';
});

// Xử lý đăng nhập (ví dụ đơn giản)
document.getElementById('login-submit').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();

    if (username && phone && email && address) {
        alert('Đăng nhập thành công!');
        document.getElementById('login-popup').style.display = 'none';
    } else {
        alert('Đăng nhập thất bại! Vui lòng điền đầy đủ thông tin.');
    }
});