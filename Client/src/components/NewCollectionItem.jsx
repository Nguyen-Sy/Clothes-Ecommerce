
function NewCollectionItem(props) {
    return (
        <div className="collection-item">
            <img src={props.urlImg} alt="listItemImage"/>
            <div className="collection-listitem-desc">{props.productName}</div>
        </div>
    )
};
export default NewCollectionItem;