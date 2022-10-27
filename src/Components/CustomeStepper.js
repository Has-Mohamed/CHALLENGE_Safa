import { Step, StepLabel, Stepper } from "@mui/material";
import PropTypes from "prop-types";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import {
  ApartmentOutlined,
  CollectionsOutlined,
  PersonOutline,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { STEPS_LABEL } from "../DummyData /DummyData";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 11,
    left: "calc(-50% + 12px)",
    right: "calc(50% + 12px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.light,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.light,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 6,
    border: "8px solid white",
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 0,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  zIndex: 1,
  color: theme.palette.grey["400"],
  width: 45,
  height: 45,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",

  ...(ownerState.active && {
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.light,
  }),
  ...(ownerState.completed && {
    backgroundColor: "white",
    color: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.light}`,
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <PersonOutline />,
    2: <ApartmentOutlined />,
    3: <CollectionsOutlined />,
    4: <VerifiedUserOutlined />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export const CustomeStipper = (props) => {
  const { activeStep } = props;
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      connector={<ColorlibConnector />}
    >
      {STEPS_LABEL.map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
