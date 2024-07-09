import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button, Stack, styled } from "@mui/material";
import { useState } from "react";
import "../../index.css"

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadImage = ({ title }) => {
  const [file, setFile] = useState("");
  console.log("file =>", file);

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Stack
      sx={{
        backgroundColor: "#F2F2F2",
        py: "32px",
        borderRadius: "0.5rem",
        marginTop: "0.5rem",
      }}
    > 
      {file ? (
        <img className="h-28" src={file} alt={title} />
      ) : (
        <>
          <Button
            sx={{ color: "gray", "&:hover": { background: "none" } }}
            component="label"
            role={undefined}
            disableRipple
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            {title}
            <VisuallyHiddenInput type="file" onChange={handleChange} />
          </Button>
        </>
      )}
    </Stack>
  );
};

export default UploadImage;
