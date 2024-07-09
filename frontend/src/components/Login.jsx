import { Box, Button, Input, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { KeyboardBackspace, RemoveRedEye, VisibilityOff } from '@mui/icons-material';

import "../index.css"
import Textlg from "./custom/Textlg"
import Textsm from "./custom/Textsm"
import Textmd from "./custom/Textsm"
import SubmitButton from "./custom/SubmitButton";
import PasswordInput from "./custom/PasswordInput";

const Login = () => {
    return (
        <Stack sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#fbf9f9",
            alignItems: "center",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
        }}>
            <Stack sx={{ backgroundColor: "white", overflowY: { xs: "scroll", lg: "hidden" }, width: "40%", borderRadius: "20px", px: "28px", py: "22px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
                <Link to={"/signup"} >
                    <KeyboardBackspace sx={{ cursor: "pointer", color: "#8665c1" }} />
                </Link>
                <Stack direction={"row"} sx={{ alignItems: "center", gap: "9.61px", mt: "0.5rem" }}>
                    <Box
                        component="img"
                        sx={{ height: { xs: 36, lg: 48 }, width: { xs: 36, lg: 48 }, }}
                        alt="Logo"
                        src="/images/Avatar-UI-Unicorn-V2.svg"
                    />
                    <Stack sx={{ justifyContent: "center" }}>
                        <Textlg text="Unicorn" sx={{ fontSize: { xs: "1rem", lg: "24px" } }} />
                        <Textsm text="A Video Sharing App" sx={{ fontSize: { xs: "12px", lg: "16px" } }} />
                    </Stack>
                </Stack>
                <Textlg text="Nice to see you again!" sx={{ marginTop: "20px", fontSize: { xs: "1rem", lg: "24px" } }} />

                <Stack sx={{ marginTop: "1rem", }}>
                    <Textsm text="Email" />
                    <Input disableUnderline={true} placeholder="Enter your email" sx={{ backgroundColor: "#F2F2F2", marginTop: "8px", py: "6px", px: "16px", borderRadius: "0.5rem" }}></Input>
                </Stack>

                <Stack sx={{ marginTop: { xs: "0.3rem", lg: "1rem" } }}>
                    <Textsm text="Password" />
                    <PasswordInput />
                </Stack>

                <SubmitButton text="Login" />
                <Stack direction={"row"} gap={"4px"} sx={{ justifyContent: "center", mt: "1rem" }}>
                    <Textmd text="Already on Unicorn?" />
                    {/* <Link to={"/login"} style={{ textDecoration: "none" }}> */}
                    <Textsm text="Login" sx={{ color: "#8665c1", cursor: "pointer" }} />
                    {/* </Link> */}
                </Stack>

            </Stack>
        </Stack>
    )
}

export default Login