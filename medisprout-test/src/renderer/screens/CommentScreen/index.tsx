import CommentDetail from '../../components/CommentDetail'
import { Typography, Card } from "@mui/material";

const Comment = (): JSX.Element => {
    return (
        <Card sx={{ backgroundColor: 'secondary.dark', color:'primary.light', padding:'15px' }}>
            <Typography variant='h5'>los comments</Typography>
            <CommentDetail />
        </Card>
    )
}

export default Comment;