import { Box, Button, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import TextType from "../components/TextType";
import FadeContent from "../components/FadeContent";
import cv from "../assets/AdamGustinResume.pdf";

interface HomeProps {
  theme: Theme;
  isMobile: boolean;
}

export const Home: React.FC<HomeProps> = ({ theme, isMobile }) => {
  return (
    <Box
      id="Home"
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          {/* Bouncing arrow */}
          <Box
            sx={{
              position: "absolute",
              bottom: -350,
              left: "48%",
              transform: "translateX(-50%)",
              animation: "bounce 2s infinite",
              cursor: "pointer",
            }}
            onClick={() => {
              const nextSection = document.getElementById("Experience");
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <BsArrowDownShort size={40} />
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 900 }}>
            Hello, I'm Adam Gustin.
          </Typography>
          <Typography variant={isMobile ? "h5" : "h3"} sx={{ fontWeight: 900 }}>
            A passionate{" "}
            <TextType
              text={[
                "Web Developer.",
                "Software Developer.",
                "Full-Stack Developer.",
                "Frontend Developer.",
                "Backend Developer.",
                "React Developer.",
                "Node.js Developer.",
                "TypeScript Developer.",
                "Java Developer.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              deletingSpeed={25}
              showCursor={true}
              cursorCharacter="|"
              textColors={[isMobile ? "#fff" : theme.palette.secondary.main]}
            />
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="outlined" onClick={() => window.open(cv)}>
              Download CV
            </Button>
            <Button
              variant="outlined"
              sx={{
                ml: 2,
                borderColor: theme.palette.secondary.main,
                "&:hover": { borderColor: theme.palette.secondary.light },
              }}
              onClick={() => {
                const contactSection = document.getElementById("Contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Me
            </Button>
          </Box>
        </FadeContent>
      </Box>
    </Box>
  );
};

export default Home;
