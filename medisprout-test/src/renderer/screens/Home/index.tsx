import AllComments from "../../components/CommentList";
import { Breadcrumbs, Link, Card } from "@mui/material";

const Home = (): JSX.Element => {    
    return (
        <div className="HomeScreen">
            <Card sx={{ backgroundColor: 'secondary.dark', color:'primary.light', padding:'15px' }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ padding:'15px', color:'primary.light' }}>
                    <Link underline="hover" color="inherit" href="/">
                        HOME
                    </Link>
                </Breadcrumbs>
                <AllComments />
            </Card>
        </div>
    )
}

export default Home;