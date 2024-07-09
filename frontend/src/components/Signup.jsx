import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../index.css";
import Textlg from "./custom/Textlg";
import Textxl from "./custom/Textxl";
import Textsm from "./custom/Textsm";
import Textmd from "./custom/Textsm";
import UploadImage from "./custom/UploadImage";
import PasswordInput from "./custom/PasswordInput";
import { useFormik } from "formik";
import { signUpSchema } from "../schema";
import { useState } from "react";

const initialValues = {
  fullname: "",
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
 

  const { errors, values, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (_values, action) => {
        action.resetForm();
      },
    });
 
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#fbf9f9",
        alignItems: "center",
        justifyContent: "center",
        pt: "10px",
        pb: "10px",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "white",
          overflowY: { xs: "scroll", lg: "hidden" },
          width: "40%",
          borderRadius: "20px",
          px: "28px",
          py: "22px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack direction={"row"} sx={{ alignItems: "center", gap: "9.61px" }}>
          <Box
            component="img"
            sx={{ height: { xs: 36, lg: 48 }, width: { xs: 36, lg: 48 } }}
            alt="Logo"
            src="/images/Avatar-UI-Unicorn-V2.svg"
          />
          <Stack sx={{ justifyContent: "center" }}>
            <Textlg
              text="Unicorn"
              sx={{ fontSize: { xs: "1rem", lg: "24px" } }}
            />
            <Textsm
              text="A Video Sharing App"
              sx={{ fontSize: { xs: "12px", lg: "16px" } }}
            />
          </Stack>
        </Stack>
        <Textlg
          text="Welcome to Unicorn!"
          sx={{ marginTop: "20px", fontSize: { xs: "1rem", lg: "24px" } }}
        />
        <Stack direction={{ xs: "column", lg: "row" }} gap={"1.5rem"}>
          <Stack sx={{ marginTop: "1rem" }}>
            <Textsm text="Fullname*" />
            <p className="bg-red-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium officiis quod incidunt amet doloribus eos facilis hic minus voluptatibus harum aut a aliquam necessitatibus vero consectetur molestiae, doloremque ullam laborum!</p>
            <Input
              disableUnderline={true}
              onChange={handleChange}
              type="text"
              value={values.fullname}
              name="fullname"
              placeholder="Enter your fullname"
              sx={{
                backgroundColor: "#F2F2F2",
                marginTop: "8px",
                py: "6px",
                px: "16px",
                borderRadius: "0.5rem",
              }}
            ></Input>
            {errors.fullname && touched.fullname && (
              <Typography
                sx={{ color: "red", fontSize: "12px", marginLeft: "6px" }}
              >
                {errors.fullname}
              </Typography>
            )}
          </Stack>
          <Stack sx={{ marginTop: { xs: "0rem", lg: "1rem" } }}>
            <Textsm text="Email*" />
            <Input
              onChange={handleChange}
              type="email"
              value={values.email}
              disableUnderline={true}
              name="email"
              placeholder="Enter your email"
              sx={{
                backgroundColor: "#F2F2F2",
                marginTop: "8px",
                py: "6px",
                px: "16px",
                borderRadius: "0.5rem",
              }}
            ></Input>
            {errors.email && touched.email && (
              <Typography
                sx={{ color: "red", fontSize: "12px", marginLeft: "6px" }}
              >
                {errors.email}
              </Typography>
            )}
          </Stack>
        </Stack>

        <Stack direction={{ xs: "column", lg: "row" }} gap={"1.5rem"}>
          <Stack sx={{ marginTop: "1rem", width: "50%" }}>
            <Textsm text="Username*" />
            <Input
              type="text"
              onChange={handleChange}
              disableUnderline={true}
              value={values.username}
              name="username"
              placeholder="Enter your username"
              sx={{
                backgroundColor: "#F2F2F2",
                marginTop: "8px",
                py: "6px",
                px: "16px",
                borderRadius: "0.5rem",
                width: "100%",
              }}
            ></Input>
            {errors.username && touched.username && (
              <Typography
                sx={{ color: "red", fontSize: "12px", marginLeft: "6px" }}
              >
                {errors.username}
              </Typography>
            )}
          </Stack>
          <Stack sx={{ marginTop: { xs: "0rem", lg: "1rem" }, width: "50%" }}>
            <Textsm text="Password*" />
            <PasswordInput
              errors={errors}
              onchange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Typography
                sx={{ color: "red", fontSize: "12px", marginLeft: "6px" }}
              >
                {errors.password}
              </Typography>
            )}
          </Stack>
        </Stack>

        <Stack direction={{ xs: "column", lg: "row" }} gap={"1.5rem"}>
          <Stack sx={{ marginTop: "1rem", width: { xs: "100%", lg: "49%" } }}>
            <Textsm text="Profile Picture" />
            <UploadImage title="Profile Picture" />
          </Stack>
          <Stack
            sx={{
              marginTop: { xs: "0", lg: "1rem" },
              width: { xs: "100%", lg: "49%" },
            }}
          >
            <Textsm text="Cover Image" />
            <UploadImage title="Cover Image" />
          </Stack>
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
          onClick={handleSubmit}
        >
          Sign up
        </Button>
        <Stack
          direction={"row"}
          gap={"4px"}
          sx={{ justifyContent: "center", mt: "1rem" }}
        >
          <Textmd text="Already on Unicorn?" />
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <Textsm text="Login" sx={{ color: "#8665c1", cursor: "pointer" }} />
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Signup;
