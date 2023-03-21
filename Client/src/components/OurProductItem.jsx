import Star from "./Start"
import { formatCash } from '../FormatCash'

function OurProductItem(props) {
    return (
        <div className="cart product-card">
            <img src={props.urlImg} alt="ourproduct-img" />
            <div className="card-content-container card-content-container--outproduct">
                <div className="container-1139 ourproduct-rate-container">
                    <Star ratingNumber={props.ratingNumber}/>
                </div>
                <h3 className="card-item-name">{props.productName}</h3>
                <div className="container-1139 price-container--ourproduct">
                    <p className="price">{formatCash(props.price)}đ</p>
                    <p className="discountprice">{formatCash(props.discountPrice)}đ</p>
                </div>
            </div>
        </div>
    )
}
export default OurProductItem