import { Button, Container, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ServerError() {

    return(
        <Container>
            <Typography gutterBottom variant="h3">Oops - page not found</Typography>
                <Divider />
            <Button fullWidth component={Link} to="/catalog">Go back to shop</Button>
        </Container>
    )
}