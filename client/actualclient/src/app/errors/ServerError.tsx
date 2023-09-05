import { Container, Divider, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ServerError() {


    const {state} = useLocation();

    return(
        <Container>

            {state?.error ? (
                <>
                    <Typography gutterBottom variant="h3" color="secondary">

                    </Typography>
                    <Divider />
                    <Typography variant="body1">{state.error.detail || "Internal server error"}</Typography>
                </>
            ) : (
                <Typography variant="h5" gutterBottom>Server error</Typography>
            )
        }

        </Container>
    )
}