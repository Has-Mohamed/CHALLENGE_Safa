import { Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import React from "react";
import mailBox from "../Image/mail.png";

const FinalPage = (props) => {
  const { resend } = props;

  return (
    <Paper
      component={Grid}
      sx={{
        p: 4,
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
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

      <Typography sx={{ mt: 2 }} variant="h6">
        congratz, you successfully created your account.
      </Typography>
      <Typography variant="body1">
        We just sent you a confirmation email
        <br />
        Please check your E-mai
      </Typography>

      <Typography sx={{ mt: 5 }} variant="body1">
        Did't receiveit? Check your Spam folder or{" "}
        <Button color="secondary" onClick={resend}>
          Resend Email
        </Button>
      </Typography>
    </Paper>
  );
};

export default FinalPage;
