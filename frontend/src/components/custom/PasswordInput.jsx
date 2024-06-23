import { RemoveRedEye, VisibilityOff } from "@mui/icons-material"
import { Input, Stack } from "@mui/material"
import { useState } from "react"

const PasswordInput = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisible = () => {
        setIsVisible((prev => !prev))
    }

    return (
        <Stack direction={"row"} sx={{ backgroundColor: "#F2F2F2", width: "100%", marginLeft: "auto", alignItems: "center", pr: "8px", mt: "0.5rem", borderRadius: "0.5rem" }}>
            <Input type={isVisible ? "password" : "text"} disableUnderline={true} placeholder="Enter your password" sx={{ py: "6px", px: "16px", borderRadius: "0.5rem", width: "98%" }}></Input>
            {!isVisible && <RemoveRedEye sx={{ cursor: "pointer" }} onClick={toggleVisible} />}
            {isVisible && <VisibilityOff sx={{ cursor: "pointer" }} onClick={toggleVisible} />}
        </Stack>
    )
}

export default PasswordInput
