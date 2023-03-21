export default function CateHeader() {
    return (
        <div className="category__header">
            <div className="category__search">
                <ion-icon name="menu-outline"></ion-icon>
                <p>Tất cả danh mục</p>
            </div>

            <div className="category__sort">
                <div className="sort__title">
                    <p>Sắp xếp theo</p>
                </div>

                <div className="sort__type">
                    <select className="chose-type" name="dropdown">
                        <option value="new" selected>
                            Mới nhất
                        </option>
                        <option value="old" selected>
                            Cũ nhất
                        </option>
                        <option value="price__low-to-high" selected>
                            Giá từ Thấp - Cao
                        </option>
                        <option value="price__high-to-low" selected>
                            Giá từ Cao - Thấp
                        </option>
                        <option value="popular" selected>
                            Phổ biến
                        </option>
                    </select>
                </div>
            </div>
        </div>
    );
}
