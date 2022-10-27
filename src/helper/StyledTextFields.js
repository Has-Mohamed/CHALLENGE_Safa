import styled from "@emotion/styled";
import MuiTextField from "./MuiTextField";

export const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  [`& fieldset`]: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  width: 60,
}));
export const StyledPhone = styled(MuiTextField)(({ theme }) => ({
  [`& fieldset`]: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft: "none",
  },
  flex: "1 1 auto",
}));
