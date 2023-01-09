import { useQuery } from "react-query";
import { Paper, Table, TableRow, TableBody, TableContainer, TableCell, TableHead } from '@mui/material/';

import TComment from "../../../types/comment";
import CommentAPI from "../../../api";

import Comment from "../Comment";

const AllComments = (): JSX.Element => {
    const { isLoading, isError, data } = useQuery<TComment[]>({ queryKey:'comments', queryFn: CommentAPI.getComments });

    if(isLoading) { return <span>loading...</span>}
    
    if(isError) { return <span>ERROR!</span>}
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: 'secondary.light', }}>
                <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell >Name</TableCell>
                    <TableCell >Comment</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>                
                {data?.map((d:TComment, index) => 
                    <Comment key={index} id={d.id} body={d.body} name={d.name} email={d.email} postId={d.postId}/>
                )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AllComments;