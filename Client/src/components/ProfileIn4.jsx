import { useEffect, useState } from "react";

export default function ProfileIn4(props) {
    const isEdit = props.isEdit;
    const userInfor = props.userInfor;
    const [name, setName] = useState(userInfor.name ? userInfor.name : "");
    const [email, setEmail] = useState(userInfor.email ? userInfor.email : "");
    const [phone, setPhone] = useState(userInfor.phone ? userInfor.phone : "");
    const [dayOfBirth, setDayOfBirth] = useState(
        userInfor.dayOfBirth ? userInfor.dayOfBirth : ""
    );

    useEffect(() => {
        props.setUserInfor({
            ...userInfor,
            name,
            email,
            phone,
            dayOfBirth,
        });
    },[]);

    return (
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
                        value={name}
                        readOnly={!isEdit}
                        onChange={(e) => {
                            setName(e.target.value);
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
                        value={email}
                        readOnly={!isEdit}
                        onChange={(e) => {
                            setEmail(e.target.value);
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
                        value={phone}
                        readOnly={!isEdit}
                        onChange={(e) => {
                            setPhone(e.target.value);
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
                        type="text"
                        value={dayOfBirth}
                        readOnly={!isEdit}
                        onChange={(e) => {
                            setDayOfBirth(e.target.value);
                        }}
                    />
                </div>
            </form>
        </div>
    );
}
