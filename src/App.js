import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";
import Register from "./Pages/Register";
import { Container } from "@mui/system";

const theme = createTheme({
  palette: {
    secondary: { main: red["500"] },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{ height: "100vh", display: "flex", alignItems: "center" }}
      >
        <Register />
      </Container>
    </ThemeProvider>
  );
}

export default App;
