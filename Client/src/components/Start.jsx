import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Star(props) {
    const star = props.ratingNumber;
    const starArray = [];
    let i = star;

    for (i; i >= 1; i--) {
        starArray.push(1);
    }
    if (i === 1) starArray.push(1);
    else if (i !== 0) starArray.push(0.5);

    return (
        <div className="container" style={props.style}>
            {starArray.map((item, index) => {
                if (item === 1)
                    return (
                        <FontAwesomeIcon
                            icon={faStar}
                            className="checked"
                            key={index}
                        />
                    );
                return (
                    <FontAwesomeIcon
                        icon={faStarHalf}
                        className="checked"
                        key={index}
                    />
                );
            })}
        </div>
    );
}
export default Star;
