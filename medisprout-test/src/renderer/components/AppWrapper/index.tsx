import { useQuery } from "react-query";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TComment from "../../types/comment";
import CommentAPI from "../../../api";

import AllComments from "../CommentList";
import CommentDetail from "../CommentDetail";
import { Card } from "@mui/material";

//wrapping the app with the proper routes
const ScreenWrapper = (): JSX.Element => {   
    return (
        <div className="ScreenWrapper">
            <Card sx={{ backgroundColor: 'secondary.dark', color:'primary.light', padding:'15px' }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <AllComments /> } />
                        <Route path="/comment/:id" element={ <CommentDetail /> } />
                    </Routes>
                </BrowserRouter>
            </Card>
        </div>
    )
}

export default ScreenWrapper;