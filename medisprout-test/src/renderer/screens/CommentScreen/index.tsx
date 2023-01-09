import CommentDetail from '../../components/CommentDetail'
import { Typography, Breadcrumbs, Link, Card } from "@mui/material";

const Comment = (): JSX.Element => {
    return (
        <Card sx={{ backgroundColor: 'secondary.dark', color:'primary.light', padding:'15px' }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ padding:'15px', color:'primary.light' }}>
                <Link underline="hover" color="inherit" href="/">
                    HOME
                </Link>
                <Typography sx={{ color:"white" }}>COMMENT</Typography>
            </Breadcrumbs>
            <CommentDetail />
        </Card>
    )
}

export default Comment;