export default function CateItem() {
    const arr = [
        {
            name: "cate 1",
            price: "price 1",
            picture: "ảnh",
        },
        {
            name: "cate 2",
            price: "price 2",
        },
        {
            name: "cate 3",
            price: "price 3",
        },
        {
            name: "cate 4",
            price: "price 4",
        },
        {
            name: "cate 5",
            price: "price 5",
        },
        {
            name: "cate 5",
            price: "price 5",
        },
        {
            name: "cate 5",
            price: "price 5",
        },
        {
            name: "cate 5",
            price: "price 5",
        },
    ];

    const arr2 = [
        {
            name: "test",
            price: "test",
        },
        {
            name: "test",
            price: "test",
        },
    ];

    return (
        <div className="cate__items-result">
            <div className="box__list-item">
                <div className="row enfold">
                    {arr.map((item) => {
                        return (
                            <div className="cate__item col-4">
                                <img
                                    src="https://traigiongthuha.com/uploads/cache/news/news_529.jpg"
                                    alt=""
                                    className="img__product"
                                />
                                <p className="name__product">{item.itemID}</p>
                                <p className="price__product">{item.status}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="row enfold">
                    {arr2.map((item) => {
                        return (
                            <div className="cate__item col-2">
                                <img
                                    src="https://vanmau.com.vn/uploads/2019/05/23/hinh-anh-ga-mai_032835905.jpg"
                                    alt=""
                                    className="img__product"
                                />
                                <p className="name__product">{item.name}</p>
                                <p className="price__product">{item.price}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
