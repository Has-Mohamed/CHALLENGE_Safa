import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import mailBox from "../Image/mail.png";

const Confrimation = (props) => {
  const { watch } = props;

  return (
    <Paper
      component={Grid}
      sx={{ p: 4, flexDirection: "column", alignItems: "center" }}
      container
    >
      <img
        alt="mail box"
        src={mailBox}
        style={{
          width: 170,
          height: 170,
        }}
      />

      <Typography sx={{ mt: 2 }} color="red" variant="body1">
        We will send a message for this e-mail
      </Typography>
      <Typography sx={{ mt: 2 }} variant="body1">
        {watch("user_email")}
      </Typography>
    </Paper>
  );
};

export default Confrimation;
