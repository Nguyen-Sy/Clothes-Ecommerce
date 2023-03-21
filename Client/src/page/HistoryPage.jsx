import { faBell, faCalendar, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "../assets/css/AvatarAndOption.css"
import Document from "../components/Document"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Logo from "../components/Logo"
import UserHistory from "../components/UserHistory"


function HistoryPage(props) {
    const navigate = useNavigate();
    const userInfor = useSelector(state => state.userInfo.value);
    const [option, setOption] = useState('my-account');
    const [childOption, setChildOption] = useState('document');

    useEffect(() => {
        console.log(userInfor)
    }, userInfor)

    const logout = (e) => {
        window.FB.logout()
        console.log("logout success")
        navigate("/login")
    }

    return (
        <div style={{ backgroundColor: 'var(--gray-color)' }}>
            <Header />
            <Logo location="Lịch sử" />
            <section>
                <div className="container-1056" style={{ paddingTop: "32px", alignItems: "start" }}>
                    <div className="container-1056 avatar-option" style={{ margin: "0 0", gap: "32px 0" }}>
                        <div className="container-item" style={{ gap: "0 5px", padding: "16px 0" }}>
                            <img src={userInfor.photoURL} alt="category-avatar" />
                            <div className="category-content">{userInfor.name}</div>
                        </div>
                        <div className="container-item" style={{ gap: "10px 0px", flexDirection: 'column' }}>
                            <div className="container-item" style={{ gap: "0 10px" }}>
                                <FontAwesomeIcon icon={faUser} className="category-icon" />
                                <div className="category-content" onClick={() => { setChildOption('document'); setOption('my-account');  }}>Tài khoản của tôi</div>
                            </div>
                            {
                                function () {
                                    if (option === 'my-account')
                                        return (
                                            <div className="container-item" style={{ gap: '10px 0', flexDirection: 'column' }}>
                                                <div className={childOption === 'document' ? "account-chirdren-option checked" : "account-chirdren-option"} onClick={() => setChildOption('document')}>Hồ sơ</div>
                                                <div className={childOption === 'bank' ? "account-chirdren-option checked" : "account-chirdren-option"} onClick={() => setChildOption('bank')}>Ngân hàng</div>
                                                <div className={childOption === 'address' ? "account-chirdren-option checked" : "account-chirdren-option"} onClick={() => setChildOption('address')}>Địa chỉ</div>
                                                <div className={childOption === 'password' ? "account-chirdren-option checked" : "account-chirdren-option"} onClick={() => setChildOption('password')}>Mật khẩu</div>
                                            </div>
                                        )
                                }.call(this)
                            }
                        </div>
                        <div className="container-item" style={{ gap: "0 10px" }} >
                            <FontAwesomeIcon icon={faCalendar} className="category-icon" />
                            <div className={option === 'history' ? "category-content checked" : 'category-content'} onClick={() => { setOption('history'); }}>Đơn mua</div>
                        </div>
                        <div className="container-item" style={{ gap: "0 10px" }}>
                            <FontAwesomeIcon icon={faBell} className="category-icon" />
                            <div className={option === 'notify' ? "category-content checked" : 'category-content'} onClick={() => { setOption('notify'); }}>Thông báo</div>
                        </div>
                        <div className="container-item" style={{ gap: "0 10px" }}>
                            <FontAwesomeIcon icon={faRightFromBracket} className="category-icon" />
                            <div className={option === 'logout' ? "category-content checked" : 'category-content'} onClick={logout}>Đăng xuất</div>
                        </div>
                    </div>
                    {
                        function () {
                            switch (option) {
                                case 'history':
                                    return (<UserHistory />);
                                case 'my-account':
                                    return (<Document />)
                                default:
                                    return (<div></div>)
                            }
                        }.call(this)
                    }
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default HistoryPage