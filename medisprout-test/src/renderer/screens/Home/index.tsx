import AllComments from "../../components/CommentList";
import { Typography, Card } from "@mui/material";

const Home = (): JSX.Element => {    
    return (
        <div className="HomeScreen">
            <Card sx={{ backgroundColor: 'secondary.dark', color:'primary.light', padding:'15px' }}>
                <Typography variant="h5">home</Typography>
                <AllComments />
            </Card>
        </div>
    )
}

export default Home;