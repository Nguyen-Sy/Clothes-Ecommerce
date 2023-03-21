export default function ProfileAva(props) {
    return (
        <div class="buyer_profile-content__avatar">
            <div class="buyer_box-avatar">
                <img src={props.userAvatar} alt="" class="buyer_avatar" />
                <button class="buyer_chose-avatar">Chọn Ảnh</button>
            </div>
        </div>
    );
}
