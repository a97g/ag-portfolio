import React, { useEffect, useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
} from "@mui/material";
import "./App.css";

import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Nav from "./sections/Nav";
import Background from "./sections/Background";

// Gfont
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap";
document.head.appendChild(fontLink);

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00000",
    },
    secondary: {
      main: "#5e2ec4ff",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: "Figtree, Arial, sans-serif",
  },
});

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width:800px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background />
      <Nav />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          height: "100vh",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <Home theme={theme} isMobile={isMobile} />
        <Experience theme={theme} isMobile={isMobile} />
        <Projects />
        <Contact isMobile={isMobile} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
