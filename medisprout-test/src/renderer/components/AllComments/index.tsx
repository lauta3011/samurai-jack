import { useQuery, useQueryClient } from "react-query";
import { Link } from 'react-router-dom';

import TComment from "../../../types/comment";
import CommentAPI from "../../../api";

import Comment from "../../components/Comment";

const AllComments = (): JSX.Element => {
    const { isLoading, isError, data } = useQuery<TComment[]>({ queryKey:'comments', queryFn: CommentAPI.getComments });
    
    if(isLoading) { return <span>loading...</span>}
    
    if(isError) { return <span>ERROR!</span>}
    
    return (
        <div>
            {data?.map((d:TComment, index) => 
                <Link key={index} to={`/comment/${d.id}`} ><Comment id={d.id} body={d.body} name={d.name} email={d.email} postId={d.postId}/></Link>
            )}
        </div>
    )
}

export default AllComments;