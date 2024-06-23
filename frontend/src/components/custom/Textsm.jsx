import { Typography } from "@mui/material"

const Textsm = ({ text, sx }) => {
    return (
        <Typography sx={{
            fontSize: "16px",
            ...sx
        }}
        >{text}</Typography>
    )
}

export default Textsm
