import { Stack, Typography, Image } from "@mui/material";
import "../index.css"

const Signup = () => {
    return (
        <Stack sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Stack sx={{
                backgroundColor: "white",
                width: "40%",

            }}>
                <Stack>
                    <Image></Image>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Signup