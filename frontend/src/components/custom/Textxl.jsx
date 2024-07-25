import { Typography } from '@mui/material'

const Textxl = ({ text, sx }) => {
    return (
        <Typography sx={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#c5d5ce",

            ...sx

        }}
        >{text}</Typography>
    )
}

export default Textxl
