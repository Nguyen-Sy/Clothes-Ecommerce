import Star from "./Start";
import { formatCash } from '../FormatCash'

function BestSellerItem(props) {

    const styleContainer = {margin: '0 0'}

    return (
        <div className="container-1139 card">
            <img src={props.urlImg} alt="bestseller-img" />
            <div className="container-1139 card-content-container">
                <Star ratingNumber={props.ratingNumber} style={styleContainer}/>
                <p className="card-item-name">{props.productName}</p>
                <div className="container-1139 price-container">
                    <p className="price">{formatCash(props.Price)}đ</p>
                    <p className="discountprice">{formatCash(props.discountPrice)}đ</p>
                </div>
            </div>
        </div>
    )
}
export default BestSellerItem