export default function ProductDetail(props) {
    return (
        <div className="product-page_product-detail padding__25px">
            <div className="product-page_detail__header padding__14px">
                <p>Mô tả sản phẩm</p>
            </div>

            <div className="product-page_detail__content">
                <span>
                    {props.product ? props.product.desc : "Description"}
                </span>
            </div>
        </div>
    );
}
