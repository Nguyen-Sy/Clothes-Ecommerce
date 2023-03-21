import Carousel from "react-grid-carousel";
import { useSelector } from "react-redux";
import "../assets/css/Review.css";
import ReviewItem from "./ReviewItem";

function Review() {
    const reviewList = useSelector((state) =>
        state.productList.value.slice(0, 2)
    );

    return (
        <div className="container-1139 review-container">
            <h2 className="review-heading">What People Say About Us</h2>
            <p className="review-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ullamcorper congue eros
            </p>
            <Carousel cols={2} loop containerStyle={{ maxWidth: "1139px" }}>
                {reviewList.map((item, index) => (
                    <Carousel.Item key={index}>
                        <ReviewItem
                            userName={"Anisa Zahra"}
                            userCarrer={"Founder milenial"}
                            commentHeading={
                                "Comfortable and met all my expectations! I ordered a medium and it fit perfectly"
                            }
                            commentDesc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet`}
                            urlImg={`https://drive.google.com/uc?export=view&id=${item.images[0]}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
export default Review;
