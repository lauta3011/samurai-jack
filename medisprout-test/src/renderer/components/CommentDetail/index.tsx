import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

import TComment from "../../../types/comment";

const CommentDetail = (): JSX.Element => {
    const queryClient = useQueryClient();
    const { id } = useParams();

    const { isLoading, isError, data } = useQuery<TComment>(['comment', id], { initialData: () => {
        const state = queryClient.getQueryState<TComment[]>('comments');
        return state?.data?.find((d:TComment ) => d.id.toString() === id);
    }});

    if(isLoading) { return <span>loading...</span>}
    
    if(isError) { return <span>ERROR!</span>}

    return (
        <div>
            <span>{data?.body}</span>
        </div>
    )
}

export default CommentDetail;
