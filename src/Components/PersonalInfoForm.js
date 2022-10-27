import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";
import {
  COUNTRY_DATA,
  EMAIL_REGEX,
  MINMUM_LENGTH,
  PHONE_VALIDATION,
} from "../DummyData /DummyData";
import MuiSelect from "../helper/MuiSelect";
import MuiTextField from "../helper/MuiTextField";
import { StyledPhone, StyledTextField } from "../helper/StyledTextFields";

const PersonalInfoForm = (props) => {
  const { control, watch, clearErrors } = props;
  const [showPassword, setShowPassword] = useState({
    origin: false,
    repeat: false,
  });

  const showPasswordHandler = (name) =>
    setShowPassword((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));

  return (
    <Paper component={Grid} sx={{ p: 2 }} container spacing={1}>
      <Grid xs={12}>
        <MuiTextField
          name="user_full_name"
          label="FULL NAME"
          placeholder="Enter your full name"
          control={control}
          rules={{ required: "Please enter your full name" }}
          fullWidth
        />
      </Grid>
      <Grid xs={12}>
        <MuiTextField
          name="user_email"
          label="BUSINESS EMAIL"
          placeholder="Enter your business email"
          control={control}
          rules={{
            required: "Please enter your business email",
            pattern: {
              value: EMAIL_REGEX,
              message: "please include an '@' in the email address",
            },
          }}
          fullWidth
        />
      </Grid>
      <Grid xs={6}>
        <MuiSelect
          name="user_nationality"
          label="COUNTRY"
          placeholder="Choose your country"
          control={control}
          rules={{ required: "Please enter your country" }}
          data={COUNTRY_DATA}
        />
      </Grid>
      <Grid xs={6} sx={{ display: "flex" }}>
        <StyledTextField
          name="user_phoneuser_nationality"
          control={control}
          rules={{ required: " " }}
        />
        <StyledPhone
          name="user_phone"
          label="PHONE NUMBER"
          placeholder="Enter your phone number"
          control={control}
          rules={{
            required: "Please enter your phone number",
            ...PHONE_VALIDATION,
          }}
        />
      </Grid>
      <Grid xs={12}>
        <MuiTextField
          name="user_password"
          label="PASSOWRD"
          placeholder="choose a password"
          control={control}
          rules={{
            required: "Please enter your password",
            ...MINMUM_LENGTH,
            validate: {
              passConfirmation: (value) =>
                watch("user_password_confirmation") === value ||
                "passwords do not match",
            },
          }}
          fullWidth
          type={showPassword.origin ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <IconButton
                size="large"
                edge="end"
                onClick={() => showPasswordHandler("origin")}
              >
                {showPassword.origin ? (
                  <VisibilityOutlined />
                ) : (
                  <VisibilityOffOutlined />
                )}
              </IconButton>
            ),
          }}
        />
      </Grid>
      <Grid xs={12}>
        <MuiTextField
          name="user_password_confirmation"
          label="REPEAT PASSOWRD"
          placeholder="Repeat your password"
          control={control}
          onChange={(e) =>
            e.target.value === watch("user_password") &&
            clearErrors("user_password")
          }
          rules={{
            required: "Please enter your password",
            ...MINMUM_LENGTH,
            validate: {
              repeatPassConfirmation: (value) =>
                watch("user_password") === value || "passwords do not match",
            },
          }}
          fullWidth
          type={showPassword.repeat ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <IconButton
                size="large"
                edge="end"
                onClick={() => showPasswordHandler("repeat")}
              >
                {showPassword.repeat ? (
                  <VisibilityOutlined />
                ) : (
                  <VisibilityOffOutlined />
                )}
              </IconButton>
            ),
          }}
        />
      </Grid>
    </Paper>
  );
};

export default PersonalInfoForm;
