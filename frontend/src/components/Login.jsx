import { Box, Button, CircularProgress, Input, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { KeyboardBackspace, RemoveRedEye, VisibilityOff } from '@mui/icons-material';

import "../index.css"
import Textlg from "./custom/Textlg"
import Textsm from "./custom/Textsm"
import Textmd from "./custom/Textsm"
import SubmitButton from "./custom/SubmitButton";
import PasswordInput from "./custom/PasswordInput";
import { loginUser } from "../services/apiService";
import { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../schema";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const initialValues = {
    email: "",
    password: "",
};

const Login = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { errors, values, handleChange, handleSubmit, touched, setFieldValue } =
        useFormik({
            initialValues,
            validationSchema: loginSchema,
            onSubmit: (values) => {
                console.log("values ===>", values);
                setLoading(true)
                loginUserMutation.mutate();
            },
        });

    const loginUserMutation = useMutation({
        mutationFn: async () => {
            const response = await loginUser(values);
            console.log("response", response);

            const status = response.statusCode;
            if (status == 200) {
                navigate("/dashboard");
            }
            return response;
        },
        onSuccess: (data, action) => {
            console.log("data", data);
            setLoading(false);
            toast.success("You are Logged in successfully!");
        },
        onError: (error, action) => {
            setLoading(false);
            console.log(error);
            toast.error(error.response.data.message || "Something went wrong");
        }
    });

    return (
        <Stack sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#121212",
            alignItems: "center",
            justifyContent: "center",
            pt: "10px",
            pb: "10px",
        }}>
            <Stack sx={{ width: "40%", borderRadius: "20px", px: "28px", py: "22px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", }}>
                <Link to={"/signup"} >
                    <KeyboardBackspace sx={{ cursor: "pointer", color: "#8665c1" }} />
                </Link>
                <Stack direction={"column"} sx={{ alignItems: "center", gap: "3px" }}>
                    <svg style={{ width: "20%" }} viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z" stroke="#E9FCFF" strokeWidth="1.38962" strokeMiterlimit="10"></path><path d="M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z" stroke="url(#paint0_linear_53_10115)" strokeWidth="6.99574" strokeMiterlimit="10" strokeLinecap="round"></path><path d="M18.1915 27.6963C20.1641 27.6963 21.7285 28.7066 21.7285 30.9021C21.7285 33.0976 20.1621 34.2433 18.1915 34.2433H16.8854V37.8677H14.1733V27.6984H18.1915V27.6963Z" fill="#E9FCFF"></path><path d="M25.2053 27.6963V35.4868H28.484V37.8657H22.4932V27.6963H25.2053Z" fill="#E9FCFF"></path><path d="M35.3142 27.6963L39.4553 37.8657H36.5328L35.9162 36.1763H32.1939L31.5773 37.8657H28.6548L32.7959 27.6963H35.3101H35.3142ZM34.9143 33.5663L34.2144 31.7832C34.1582 31.6395 33.954 31.6395 33.8978 31.7832L33.1979 33.5663C33.1541 33.6767 33.2354 33.7975 33.3562 33.7975H34.756C34.8747 33.7975 34.958 33.6767 34.9143 33.5663Z" fill="#E9FCFF"></path><path d="M40.9491 27.6963L42.8592 30.5188L44.7694 27.6963H48.0355L44.2132 33.2559V37.8657H41.5011V33.2559L37.6787 27.6963H40.9449H40.9491Z" fill="#E9FCFF"></path><path d="M16.894 32.1396V29.9129C16.894 29.8212 16.9982 29.7671 17.0732 29.8191L18.6771 30.9315C18.7417 30.9773 18.7417 31.0731 18.6771 31.1189L17.0732 32.2313C16.9982 32.2834 16.894 32.2313 16.894 32.1375V32.1396Z" fill="#232323"></path><defs><linearGradient id="paint0_linear_53_10115" x1="2.23416" y1="20.3361" x2="26.863" y2="44.9649" gradientUnits="userSpaceOnUse"><stop stopColor="#007EF8"></stop><stop offset="1" stopColor="#FF4A9A"></stop></linearGradient></defs></svg>
                    <Stack sx={{ justifyContent: "center" }}>
                        <Textlg
                            text="Nice to see you again!"
                            sx={{ color: "#c5d5ce", fontSize: { xs: "1rem", lg: "24px" } }}
                        />
                    </Stack>
                </Stack>
                <Stack sx={{ marginTop: "1rem", }}>
                    <Textsm text="Email" />
                    <Input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        disableUnderline={true}
                        placeholder="Enter your email"
                        sx={{
                            border: "1px solid #F2F2F2",
                            color: "white",
                            marginTop: "8px",
                            py: "6px",
                            px: "16px",
                            borderRadius: "0.5rem",

                        }}
                    ></Input>
                    {errors.email && touched.email && (
                        <Typography
                            sx={{ color: "white", fontSize: "12px", marginLeft: "6px" }}
                        >
                            {errors.email}
                        </Typography>
                    )}
                </Stack>

                <Stack sx={{ marginTop: "1rem" }}>
                    <Textsm text="Password" />
                    <PasswordInput name="password"
                        errors={errors}
                        onchange={handleChange}
                        value={values.password} />
                    {errors.password && touched.password && (
                        <Typography
                            sx={{ color: "white", fontSize: "12px", marginLeft: "6px" }}
                        >
                            {errors.password}
                        </Typography>
                    )}
                </Stack>

                <Button
                    sx={{
                        color: "white",
                        fontSize: "1rem",
                        backgroundColor: "#8665c1",
                        "&:hover": { backgroundColor: "#8665c1" },
                        marginTop: "2rem",
                    }}
                    component="button"
                    role={undefined}
                    disableRipple
                    tabIndex={-1}
                    onClick={() => {

                        handleSubmit()
                    }}
                >
                    {loading ? <CircularProgress sx={{ color: "#6640aa" }} size={30} /> : "Login"}
                </Button>
            </Stack>
        </Stack>
    )
}

export default Login