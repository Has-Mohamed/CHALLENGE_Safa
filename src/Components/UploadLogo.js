import { AddCircle } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
import placeholder from "../Image/img-placeholder.png";

const UploadLogo = (props) => {
  const { watch, setValue } = props;
  const [imgUrl, setImgUrl] = useState(null);

  // Change placeholder image to selected image
  const handleImage = (file) => {
    let reader = new FileReader();
    reader.onload = function (event) {
      setImgUrl(event.target.result);
      setValue("company_avatar", file);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    let avatar = watch("company_avatar");
    if (avatar) {
      handleImage(avatar);
    }
    return () => {};
  }, []);

  return (
    <Paper
      component={Grid}
      sx={{ p: 4, flexDirection: "column", alignItems: "center" }}
      container
    >
      <Box
        sx={{
          width: 170,
          height: 170,
          border: "8px solid white",
          borderRadius: "50%",
          boxShadow: "0px 0px 0px 1px rgb(0 0 0 / 20%)",
          position: "relative",
        }}
      >
        <label htmlFor="logo-image">
          <input
            type="file"
            id="logo-image"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files.item(0);
              if (file.size > 500000) {
                alert("image size is more than 500 KB");
                return;
              }
              handleImage(file);
            }}
            style={{ display: "none" }}
          />
          <IconButton
            component="span"
            size="small"
            color="secondary"
            aria-label="upload"
            sx={{
              position: "absolute",
              top: -10,
              right: -10,
              bgcolor: "white",
            }}
          >
            <AddCircle fontSize="large" />
          </IconButton>
        </label>

        <img
          alt="logo"
          src={imgUrl ?? placeholder}
          style={{
            width: 170,
            height: 170,
            borderRadius: "50%",
          }}
        />
      </Box>

      <Typography sx={{ mt: 2 }} variant="body1">
        Only image with a size lower than 500 KB are allowed
      </Typography>
    </Paper>
  );
};

export default UploadLogo;
