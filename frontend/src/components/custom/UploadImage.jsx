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

const UploadImage = ({ title, onchange, name, value }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    console.log("event", event.target.files[0]);
    const image = event.target.files[0];
    if (image) {
      const imageUrl = URL.createObjectURL(image);
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
            role={undefined}
            disableRipple
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            onChange={onchange}

          >
            {title}
            <VisuallyHiddenInput name={name} type="file" accept="image/*" multiple onChange={handleImageUpload} value={value} />
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default UploadImage;
