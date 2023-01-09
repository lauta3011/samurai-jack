import TComment from "../../../types/comment";
import "./style.css";

const Comment = (props: TComment): JSX.Element => {
    return (
        <div className="Comment">
            <span>{props.email}</span>
            <span>{props.name}</span>
            <span>{props.body}</span>
        </div>
    )
}

export default Comment;