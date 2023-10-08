import { Button, Container, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IProps {
    item_not_found?: string
}

export default function ServerError({item_not_found = "page"} : IProps) {

    return(
        <Container>
            <Typography gutterBottom variant="h3">Oops - {item_not_found} not found</Typography>
                <Divider />
            <Button fullWidth component={Link} to="/catalog">Go back to shop</Button>
        </Container>
    )
}