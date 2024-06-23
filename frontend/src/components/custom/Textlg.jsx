import { Typography } from '@mui/material'

const Textlg = ({ text, sx }) => {
    return (
        <Typography sx={{
            fontSize: "24px",
            fontWeight: "bold",
            ...sx
        }}>{text}</Typography>
    )
}

export default Textlg
