import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import { useForm } from "react-hook-form";
import CompanyInfoForm from "../Components/CompanyInfoForm";
import Confrimation from "../Components/Confrimation";
import { CustomeStipper } from "../Components/CustomeStepper";
import FinalPage from "../Components/FinalPage";
import PersonalInfoForm from "../Components/PersonalInfoForm";
import UploadLogo from "../Components/UploadLogo";
import { STEPS_LABEL, STEP_TWO_FIELDS } from "../DummyData /DummyData";

const Register = (props) => {
  // Stipper handler functions
  const [activeStep, setActiveStep] = React.useState(0);
  const [laod, setLoad] = React.useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    reset();
    setActiveStep(0);
  };

  // Form handler functions
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    clearErrors,
    setValue,
    reset,
  } = useForm({
    mode: "all",
    defaultValues: {
      user_full_name: "",
      user_email: "",
      user_nationality: "",
      user_phone: "",
      user_password: "",
      user_password_confirmation: "",
      user_phoneuser_nationality: "+20",

      company_name: "",
      lang: "en",
      company_address: "",
      company_business_email: "",
      company_country_id: "",
      company_city_id: "",
      company_phone_code: "+20",
      company_phone: "",
      company_extra_data_code: "+20",
      company_extra_data: "",
    },
  });

  // Function move one step and fire register mutaion
  const onSubmit = (data) => {
    console.log(data);

    if (activeStep === STEPS_LABEL.length - 1) {
      delete data["company_phone_code"];
      delete data["company_extra_data_code"];
      data["company_extra_data_code"] =
        data["company_extra_data_code"].slice(1);

      setLoad(true);
      axios
        .post("https://id.safav2.io.safavisa.com/register", data)
        .then(function (response) {
          console.log(response);
          setLoad(false);
          handleNext();
        })
        .catch(function (error) {
          console.log(error);
          setLoad(false);
        });
    } else {
      validateStepFields(activeStep) && handleNext();
    }
  };

  // this function validate fileds par step
  const validateStepFields = (step) => {
    const stepsFields = [STEP_TWO_FIELDS, STEP_TWO_FIELDS];
    const fieldsWithErrors = Object.keys(errors);
    const isStepValid = !stepsFields[step]?.some((field) =>
      fieldsWithErrors.includes(field)
    );
    return step > 1 ? true : isDirty && isStepValid;
  };

  // components array
  const steperComponents = [
    <PersonalInfoForm
      watch={watch}
      clearErrors={clearErrors}
      control={control}
    />,
    <CompanyInfoForm watch={watch} setValue={setValue} control={control} />,
    <UploadLogo watch={watch} setValue={setValue} />,
    <Confrimation watch={watch} />,
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <CustomeStipper activeStep={activeStep} />

      <Box sx={{ m: 5 }} />

      {activeStep === STEPS_LABEL.length ? (
        <React.Fragment>
          <FinalPage resend={handleReset} />
        </React.Fragment>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h6" sx={{ mt: 2, mb: 1, textAlign: "center" }}>
            {STEPS_LABEL[activeStep]}
          </Typography>
          {steperComponents[activeStep]}

          {/* ***** Buttons control ***** */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              justifyContent: "flex-end",
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant="contained"
            >
              Back
            </Button>

            <Button
              size="large"
              sx={{ width: 190 }}
              variant="contained"
              type="submit"
              disabled={laod}
            >
              {activeStep === STEPS_LABEL.length - 1 ? "Confirm" : "Next"}
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
};

export default Register;
