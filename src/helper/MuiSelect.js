import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useController } from "react-hook-form";

const MuiSelect = (props) => {
  const { name, control, rules, label, onChange, data, noBlank, ...restProps } =
    props;
  const {
    formState: { errors },
    field: { ref, onChange: fieldChange, ...restField },
  } = useController({
    name,
    control,
    rules,
  });

  const validationError = errors[name]?.message;
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        inputRef={ref}
        {...restField}
        {...restProps}
        label={label}
        onChange={(e) => {
          fieldChange(e);
          onChange && onChange(e);
        }}
        error={Boolean(errors[name])}
      >
        {data && !noBlank && (
          <MenuItem value="">
            <br />
          </MenuItem>
        )}

        {data?.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.key}
          </MenuItem>
        ))}
      </Select>
      {validationError && (
        <FormHelperText error>{validationError}</FormHelperText>
      )}
    </FormControl>
  );
};

export default MuiSelect;
