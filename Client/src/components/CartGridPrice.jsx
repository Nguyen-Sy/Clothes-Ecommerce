
export default function CartGridPrice() {
    return (
        <div class="gird-price">
            <div class="item2">
                <div class="price-voucher">
                    <p>
                        <ion-icon class="color-red" name="newspaper"></ion-icon>
                        Voucher
                    </p>
                </div>

                <div class="choose-voucher">
                    <p>Chọn hoặc Nhập mã giảm giá</p>
                </div>
            </div>

            <div class="item3">
                <div class="action-delete">
                    <p>Xóa</p>
                </div>

                <div class="action-save">
                    <p>Lưu vào mục Đã thích</p>
                </div>
            </div>
            <div class="item4">
                <div class="amount-product">
                    <p>Tổng thanh toán: </p>
                    <p class="color-red font-20">0 đ</p>
                </div>

                <div class="btn-pay">
                    <p>Mua ngay</p>
                </div>
            </div>
        </div>
    );
}
