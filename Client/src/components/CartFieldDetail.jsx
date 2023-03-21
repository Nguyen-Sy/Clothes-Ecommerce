export default function CartFieldDetail() {
    return (
        <div class="detail-product">
            <div class="field_detail box-detail-product">
                <div class="field_detail-product">
                    <img class="img-product" src="/assets/img/đâm.jpg" alt="" />
                </div>

                <div class="field_detail-unitPrice">
                    <p>120.000 đ</p>
                </div>

                <div class="field_detail-amount">
                    <div class="sub-amout-add">
                        <ion-icon class="icon-sub" name="remove">
                            +
                        </ion-icon>
                        <p class="amount__cart">1</p>
                        <ion-icon class="icon-add" name="add">
                            -
                        </ion-icon>
                    </div>
                </div>

                <div class="field_detail-price">
                    <p>120.000 đ</p>
                </div>

                <div class="field_detail-action">
                    <div class="find-orther-product">
                        <p>Xóa</p>
                        <a href="#top">
                            Tìm sản phẩm tương tự
                            <ion-icon name="caret-down"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
