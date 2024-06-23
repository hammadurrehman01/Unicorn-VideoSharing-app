import { Typography } from '@mui/material'

const Textxl = ({ text, sx }) => {
    return (
        <Typography sx={{
            fontSize: "32px",
            fontWeight: "bold",
            ...sx

        }}
        >{text}</Typography>
    )
}

export default Textxl
