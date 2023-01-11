import TComment from "../../types/comment";
import { useNavigate } from 'react-router-dom';
import { TableRow, TableCell,  } from '@mui/material/';

const Comment = (props: TComment): JSX.Element => {
    const navigate = useNavigate();

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: 'primary.dark', '&:hover': { backgroundColor: 'primary.main' }}} onClick={() => navigate(`/comment/${props.id}`)} key={props.id} >
            <TableCell component="th" scope="row">{props.email}</TableCell>
            <TableCell align="right">{props.name.length >= 20 ? props.name.slice(0, 20).trim() + '...' : props.name}</TableCell>
            <TableCell align="right">{props.body.length >= 20 ? props.body.slice(0, 30).trim() + '...' : props.body}</TableCell>
        </TableRow>
    )
}

export default Comment;