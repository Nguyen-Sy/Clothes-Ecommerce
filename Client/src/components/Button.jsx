import { Link } from "react-router-dom";

import "../assets/css/Button.css";

export default function Button({
    to,
    href,
    primary,
    children,
    onClick,
    ...passProps
}) {
    const Comp = "button";

    const props = {
        onClick,
        passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }

    return (
        <Comp className="button_wrapper" {...props}>
            <span>Luu don hang</span>
        </Comp>
    );
}
