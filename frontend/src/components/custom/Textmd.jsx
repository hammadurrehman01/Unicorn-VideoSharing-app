import React from 'react'

const Textmd = ({ text }) => {
    return (
        <Typography sx={{
            fontSize: "24px",
            fontWeight: "medium",
            color: "#c5d5ce",

        ...sx
        }}>{text}</Typography>
    )
}

export default Textmd
