import Carousel from "react-grid-carousel";
import { useSelector } from "react-redux";
import "../assets/css/NewCollection.css";
import NewCollectionItem from "./NewCollectionItem";
import Vecto from "./Vecto";

function NewCollection() {
    const productList = useSelector((state) => state.productList.value);
    const newCollectionList = productList.slice(0, 3);
    const vecto = { top: "90%", left: "102%" };

    return (
        <div className="container-1139 newcollection-container">
            <div className="heading">New Collection</div>
            <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ullamcorper congue eros
            </p>
            <Carousel cols={3} loop hideArrow={true}>
                {newCollectionList !== []
                    ? newCollectionList.map((item, index) => (
                          <Carousel.Item key={index}>
                              <NewCollectionItem
                                  key={index}
                                  productName={item.name}
                                  urlImg={`https://drive.google.com/uc?export=view&id=${item.images[0]}`}
                              />
                          </Carousel.Item>
                      ))
                    : ""}
            </Carousel>
            <Vecto style={vecto} />
            <div className="decorate-1"></div>
        </div>
    );
}
export default NewCollection;
