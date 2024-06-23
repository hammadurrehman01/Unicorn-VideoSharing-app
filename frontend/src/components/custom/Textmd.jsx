import React from 'react'

const Textmd = ({ text }) => {
    return (
        <Typography sx={{
            fontSize: "24px",
            fontWeight: "medium",
        ...sx
        }}>{text}</Typography>
    )
}

export default Textmd
