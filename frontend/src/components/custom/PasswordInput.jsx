import { RemoveRedEye, VisibilityOff } from "@mui/icons-material"
import { Input, Stack } from "@mui/material"
import { useState } from "react"

const PasswordInput = ({ value, onchange, errors, name }) => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisible = () => {
        setIsVisible((prev => !prev))
    }

    return (
        <Stack direction={"row"} sx={{ border: "1px solid #F2F2F2", width: "100%", marginLeft: "auto", alignItems: "center", justifyContent: "space-between", pr: "8px", mt: "0.5rem", borderRadius: "0.5rem" }}>
            <Input name={name} value={value} type={isVisible ? "password" : "text"} disableUnderline={true} onChange={onchange} placeholder="Enter your password" sx={{
                color: "white",
                py: "6px",
                px: "16px",
                borderRadius: "0.5rem",

            }}></Input>
            {!isVisible && <RemoveRedEye sx={{ cursor: "pointer", color: "#c5d5ce" }} onClick={toggleVisible} />}
            {isVisible && <VisibilityOff sx={{ cursor: "pointer", color: "#c5d5ce" }} onClick={toggleVisible} />}
        </Stack>
    )
}

export default PasswordInput
