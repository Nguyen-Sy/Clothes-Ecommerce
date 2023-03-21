function ReviewItem(props) {
    return (
        <div className="container-1139 reviewitem-container">
            <img src={props.urlImg} alt="reviewitem-avatar" />
            <p className="reviewitem-name">{props.userName}</p>
            <p className="reviewitem-career">{props.userCareer}</p>
            <p className="reviewitem-heading">{props.commentHeading}</p>
            <p className="reviewitem-desc">{props.commentDesc}</p>
        </div>
    )
}
export default ReviewItem