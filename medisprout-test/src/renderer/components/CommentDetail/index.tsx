import { useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import { Card, CardContent, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import TComment from "../../types/comment";

const CommentDetail = (): JSX.Element => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { id } = useParams();

    //fetch a single comment from the cache using the id passed from url
    const { isLoading, isError, data } = useQuery<TComment>(['comment', id], { initialData: () => {
        const state = queryClient.getQueryState<TComment[]>('comments');
        return state?.data?.find((d:TComment ) => d.id.toString() === id);
    }});

    if(isLoading) { return <span>loading...</span>}
    
    if(isError) { return <span>ERROR!</span>}

    return (
        <Card data-testid="detail-page">
            <CardContent sx={{ backgroundColor: 'secondary.light', }}>
                <ArrowBackIcon data-testid="back-button" onClick={() => navigate('/')} />
            </CardContent>
            <CardContent sx={{ backgroundColor: 'primary.dark' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {data?.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data?.body}
                </Typography> 
            </CardContent>
        </Card>
    )
}

export default CommentDetail;
