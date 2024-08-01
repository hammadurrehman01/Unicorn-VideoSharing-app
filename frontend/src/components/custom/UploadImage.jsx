import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button, Stack, styled } from "@mui/material";
import { useState } from "react";
import "../../index.css";

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

const UploadImage = ({ title, name, setFieldValue }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      setFieldValue(name, imageFile);
      const imageUrl = URL.createObjectURL(imageFile);
      setImage(imageUrl);
    }
  };

  return (
    <Stack>
      {image ? (
        <img className="h-[128px] object-cover" src={image} alt={title} />
      ) : (
        <Stack
          sx={{
            backgroundColor: "#121212",
            border: "1px solid #F2F2F2",
            py: "32px",
            borderRadius: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          <Button
            sx={{ color: "gray", "&:hover": { background: "none" } }}
            component="label"
            disableRipple
            startIcon={<CloudUploadIcon />}
          >
            {title}
            <VisuallyHiddenInput
              name={name}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default UploadImage;
