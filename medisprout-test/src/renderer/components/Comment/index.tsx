import TComment from "../../types/comment";
import { useNavigate } from 'react-router-dom';
import { TableRow, TableCell,  } from '@mui/material/';

const Comment = (props: TComment): JSX.Element => {
    const navigate = useNavigate();

    return (
        <TableRow data-testid="single-comment" sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: 'primary.dark', '&:hover': { backgroundColor: 'primary.main' }}} onClick={() => navigate(`/comment/${props.id}`)} key={props.id} >
            <TableCell component="th" scope="row">{props.email}</TableCell>
            <TableCell align="right">{props.name}</TableCell>
            <TableCell align="right">{props.body}</TableCell>
        </TableRow>
    )
}

export default Comment;