import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../api/product";
import userApi from "../api/user";
import "../assets/css/Buyer.css";
import "../assets/css/Document.css";
import ProfileHeader from "../components/BuyerProfileHeader";
import { setUserInfo } from "../redux/slices/userInfo";

function Document() {
    const dispatch = useDispatch();
    const newUserInfor = useSelector((state) => state.userInfo.value);
    const [userInfor, setUserInfor] = useState(newUserInfor);
    const [isEdit, setIsEdit] = useState(false);
    const [isDisable, setIsDisable] = useState(false);
    const handleChangeInput = (e) => {
        const files = e.target.files[0];
        const accessToken = localStorage.getItem("ggAToken");
        setIsDisable(true);
        productApi
            .uploadImage({
                files,
                token: accessToken,
            })
            .then((res) => {
                console.log(res.data);
                setUserInfor({
                    ...userInfor,
                    photoURL: `https://drive.google.com/uc?export=view&id=${res.data}`,
                });
                setIsDisable(false);
            });
    };

    const handleClick = () => {
        setIsEdit(!isEdit);
        if (isEdit) {
            setIsDisable(true);
            userApi.updateUser(userInfor._id, userInfor).then((res) => {
                dispatch(setUserInfo(res.data));
                setIsDisable(false);
            });
        }
    };

    return (
        <div className="document">
            <ProfileHeader />
            <div className="buyer_profile-content">
                <div className="buyer_profile-content__in4">
                    <form action="">
                        <div className="buyer_box-in4">
                            <div className="buyer_in4__title">
                                <p>Tên</p>
                            </div>

                            <input
                                className={`buyer_in4__content ${
                                    !isEdit ? "inactive" : ""
                                }`}
                                value={userInfor.name}
                                readOnly={!isEdit}
                                onChange={(e) => {
                                    setUserInfor({
                                        ...userInfor,
                                        name: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="buyer_box-in4">
                            <div className="buyer_in4__title">
                                <p>Email</p>
                            </div>
                            <input
                                className={`buyer_in4__content ${
                                    !isEdit ? "inactive" : ""
                                }`}
                                value={userInfor.email}
                                readOnly={!isEdit}
                                onChange={(e) => {
                                    setUserInfor({
                                        ...userInfor,
                                        email: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="buyer_box-in4">
                            <div className="buyer_in4__title">
                                <p>Số điện thoại</p>
                            </div>

                            <input
                                className={`buyer_in4__content ${
                                    !isEdit ? "inactive" : ""
                                }`}
                                value={userInfor.phone}
                                readOnly={!isEdit}
                                onChange={(e) => {
                                    setUserInfor({
                                        ...userInfor,
                                        phone: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="buyer_box-in4">
                            <div className="buyer_in4__title">
                                <p>Ngày sinh</p>
                            </div>
                            <input
                                className={`buyer_in4__content ${
                                    !isEdit ? "inactive" : ""
                                }`}
                                value={userInfor.dateOfBirth}
                                readOnly={!isEdit}
                                onChange={(e) => {
                                    setUserInfor({
                                        ...userInfor,
                                        dateOfBirth: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className="buyer_box-in4">
                            <div className="buyer_in4__title">
                                <p>Địa chỉ</p>
                            </div>
                            <input
                                className={`buyer_in4__content ${
                                    !isEdit ? "inactive" : ""
                                }`}
                                value={userInfor.address}
                                readOnly={!isEdit}
                                onChange={(e) => {
                                    setUserInfor({
                                        ...userInfor,
                                        address: e.target.value,
                                    });
                                }}
                            />
                        </div>
                    </form>
                </div>
                <div class="buyer_profile-content__avatar">
                    <div class="buyer_box-avatar">
                        <img
                            src={userInfor.photoURL}
                            alt=""
                            class="buyer_avatar"
                        />
                        <input
                            className="custom-file-input"
                            id="files"
                            type="file"
                            title=" "
                            style={{ display: "none" }}
                            onChange={(e) => handleChangeInput(e)}
                        />
                        <label for="files" className="file-uploader">
                            Upload
                        </label>
                    </div>
                </div>
            </div>
            <div className="buyer_profile-handle">
                <div className="buyer_box-handle" onClick={() => handleClick()}>
                    <button disabled={isDisable}>
                        {!isEdit ? "Chỉnh sửa thông tin" : "Lưu thông tin"}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Document;
