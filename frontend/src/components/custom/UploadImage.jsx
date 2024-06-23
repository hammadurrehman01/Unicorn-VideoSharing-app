import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Stack, styled } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const UploadImage = ({ title }) => {
    return (
        <Stack sx={{ backgroundColor: "#F2F2F2", py: "32px", borderRadius: "0.5rem", marginTop: "0.5rem" }}>
            <Button
                sx={{ color: "gray", "&:hover": { background: "none" } }}
                component="label"
                role={undefined}
                disableRipple
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                {title}
                <VisuallyHiddenInput type="file" />
            </Button>
        </Stack>
    )
}

export default UploadImage
