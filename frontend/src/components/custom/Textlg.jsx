import { Typography } from '@mui/material'

const Textlg = ({ text, sx }) => {
    return (
        <Typography sx={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#c5d5ce",

            ...sx
        }}>{text}</Typography>
    )
}

export default Textlg
