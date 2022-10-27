import { TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";

const MuiTextField = (props) => {
  const { name, control, rules, onChange, ...restProps } = props;
  const {
    formState: { errors },
    field: { ref, onChange: fieldChange, ...restField },
  } = useController({
    name,
    control,
    rules: {
      ...rules,

      validate: {
        whiteSpace: (value) => !!value.trim() || `this field is required`,
        ...rules["validate"],
      },
    },
  });
  return (
    <TextField
      inputRef={ref}
      {...restField}
      {...restProps}
      onChange={(e) => {
        fieldChange(e);
        onChange && onChange(e);
      }}
      error={Boolean(errors[name])}
      helperText={errors[name]?.message}
      variant="outlined"
    />
  );
};

export default MuiTextField;
