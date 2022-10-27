import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import {
  CITY_DATA,
  COUNTRY_DATA,
  EMAIL_REGEX,
  LANG_DATA,
  PHONE_VALIDATION,
} from "../DummyData /DummyData";
import MuiSelect from "../helper/MuiSelect";
import MuiTextField from "../helper/MuiTextField";
import { StyledPhone, StyledTextField } from "../helper/StyledTextFields";

const CompanyInfoForm = (props) => {
  const { control, watch, setValue } = props;

  return (
    <Paper component={Grid} sx={{ p: 2 }} container spacing={1}>
      <Grid xs={12} sx={{ display: "flex" }}>
        <StyledTextField
          name="company_name"
          label="COMPANY NAME"
          placeholder="Enter your company name"
          control={control}
          rules={{ required: "Please enter your full name" }}
          fullWidth
          sx={{ width: "80% !important", flex: "1 0 auto" }}
        />
        <MuiSelect
          name="lang"
          control={control}
          rules={{ required: " " }}
          data={LANG_DATA}
          noBlank
          sx={{
            // flex: "0 4 auto",
            [`& fieldset`]: {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderLeft: "none",
            },
          }}
        />
      </Grid>
      <Grid xs={12}>
        <MuiTextField
          name="company_address"
          label="ADDRESS"
          placeholder="Enter your address"
          control={control}
          rules={{ required: "Please enter your address" }}
          fullWidth
        />
      </Grid>
      <Grid xs={12}>
        <MuiTextField
          name="company_business_email"
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
          name="company_country_id"
          label="COUNTRY"
          placeholder="Choose your country"
          control={control}
          rules={{ required: "Please enter your country" }}
          data={COUNTRY_DATA}
          onChange={() => setValue("company_city_id", "")}
        />
      </Grid>
      <Grid xs={6}>
        <MuiSelect
          name="company_city_id"
          label="CITY"
          placeholder="Choose your city"
          control={control}
          rules={{ required: "Please enter your country" }}
          disabled={!watch("company_country_id")}
          data={CITY_DATA[watch("company_country_id")]}
        />
      </Grid>
      <Grid xs={6} sx={{ display: "flex" }}>
        <StyledTextField
          name="company_phone_code"
          // placeholder="Enter your phone number"
          control={control}
          rules={{ required: " " }}
          // fullWidth
        />
        <StyledPhone
          name="company_phone"
          label="COMPANY PHONE NUMBER"
          placeholder="Enter your company phone number"
          control={control}
          rules={{
            required: "Please enter your company phone number",
            ...PHONE_VALIDATION,
          }}
          // fullWidth
        />
      </Grid>
      <Grid xs={6} sx={{ display: "flex" }}>
        <StyledTextField
          name="company_extra_data_code"
          // placeholder="Enter your phone number"
          control={control}
          rules={{ required: " " }}
          // fullWidth
        />
        <StyledPhone
          name="company_extra_data"
          label="COMPANY PHONE NUMBER"
          placeholder="Enter your company phone number"
          control={control}
          rules={{
            required: "Please enter company your phone number",
            ...PHONE_VALIDATION,
          }}
          // fullWidth
        />
      </Grid>
    </Paper>
  );
};

export default CompanyInfoForm;
