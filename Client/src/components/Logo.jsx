import { Link } from "react-router-dom";

function Logo(props) {
    return (
        <section style={{ backgroundColor: 'white' }}>
            <div className="container-1056 logo">
                <Link to="/"><h2 className="logo-content">LOGO</h2></Link>
                {
                    (function () {
                        if (props.location !== "")
                            return (
                                <div className="container-1056" style={{ margin: '0 0', gap: '21px' }}>
                                    <div className="line" style={{ height: '45px' }}></div>
                                    <p className="location-content">{props.location}</p>
                                </div>
                            );
                    }).call(this)
                }
            </div>
        </section>
    )
}
Logo.defaltProps = {
    location: ""
}
export default Logo
