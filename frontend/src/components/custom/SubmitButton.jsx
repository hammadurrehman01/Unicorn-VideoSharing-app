import { Button } from '@mui/material'

const SubmitButton = ({ text }) => {
    return (
        <Button
            sx={{ color: "white", fontSize: "1rem", backgroundColor: "#8665c1", '&:hover': { backgroundColor: "#8665c1" }, marginTop: "2rem" }}
            component="button"
            role={undefined}
            disableRipple
            tabIndex={-1}
        >
            {text}
        </Button>
    )
}

export default SubmitButton
