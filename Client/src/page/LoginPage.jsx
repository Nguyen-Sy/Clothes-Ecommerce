import { useState } from "react";
import Carousel from "react-grid-carousel";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function LoginPage() {
    const [isSignup, setIsSignUp] = useState(false);

    return (
        <div>
            <section>
                <div className="container-1139">
                    <h1 className="logo">LOGO</h1>
                </div>
            </section>
            <div className="loginform">
                <div className="container-1139 loginform-container">
                    <Carousel
                        hideArrow={true}
                        cols={1}
                        rows={1}
                        containerStyle={{ maxWidth: "40.65%" }}
                        loop
                        autoplay={3000}
                    >
                        <Carousel.Item>
                            <img
                                src={require("../assets/img/hero-image.png")}
                                alt="login"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={require("../assets/img/img1.jpg")}
                                alt="login"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={require("../assets/img/img2.jpg")}
                                alt="login"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={require("../assets/img/img3.jpg")}
                                alt="login"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={require("../assets/img/img4.jpg")}
                                alt="login"
                            />
                        </Carousel.Item>
                    </Carousel>
                    {function () {
                        if (isSignup)
                            return <SignUpForm onSignUpChange={setIsSignUp} />;
                        return <LoginForm onSignUpChange={setIsSignUp} />;
                    }.call(this)}
                </div>
            </div>
        </div>
    );
}
export default LoginPage;
