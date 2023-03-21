export default function Rattings() {
    const ratting = [
        {
            name_guest: "Tên khách hàng",
            date: "2022-10-04",
            commnet: "Lời nhận xét của khách hàng",
        },
        {
            name_guest: "Tên khách hàng",
            date: "2022-10-04",
            commnet: "Lời nhận xét của khách hàng",
        },
    ];

    return (
        <div className="product-ratings padding__25px">
            <div className="rating__header padding__14px">
                <p>Đánh giá sản phẩm</p>
            </div>

            <div className="rating__list">
                {ratting.map((item) => {
                    return (
                        <div className="item__guest">
                            <div className="guest__avatar">
                                <img src="/assets/img/user.png" alt="" />
                            </div>

                            <div className="guest__main">
                                <div className="guest__author-name fon-size__12px">
                                    <span>{item.name_guest}</span>
                                </div>

                                <div className="rating__time fon-size__12px margin-top__12px">
                                    <span>{item.date}</span>
                                </div>

                                <div className="rating__judge">
                                    {item.commnet}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
