import { Typography } from "@mui/material"

const Textsm = ({ text, sx }) => {
    return (
        <Typography sx={{
            fontSize: "16px",
            color: "#c5d5ce",
            ...sx
        }}
        >{text}</Typography>
    )
}

export default Textsm
