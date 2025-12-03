import React from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import BlurText from "../components/BlurText";
import FadeContent from "../components/FadeContent";

const experienceCard = [
  {
    title: "Full Stack Developer",
    company: "Dentsu Creative",
    location: "Toronto Ontario",
    timeframe: "2023 - 2025",
    projects: [
      {
        title: "General Motors Live",
        technologies:
          "React (TypeScript) / Material UI / Node.js (Express) / Firebase Functions / React Native / Symbl AI",
        points: [
          "Designed and developed a full Content Management System and virtual showroom connecting EV buyers with live product experts for real-time Q&A and education.",
          "Built scalable full-stack architecture using Node.js, Firebase Functions, and TypeScript for seamless communication and data handling.",
          "Developed responsive front-end components with React, Material UI, and React Native, ensuring consistent cross-platform UX.",
          "Leveraged Firebase and Google Cloud Platform for secure hosting, authentication, and deployment with high availability.",
          "Integrated Symbl AI for conversational intelligence, providing transcriptions and real-time interaction insights.",
          "Collaborated with design and product teams to refine workflows, managed tasks in JIRA, and delivered on agile milestones.",
        ],
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company: "DevLift Media",
    location: "London Ontario",
    timeframe: "2020 - 2023",
    projects: [
      {
        title: "Glissner",
        technologies: "React (TypeScript) / Material UI / Framer Motion",
        points: [
          "Built a responsive, animated front-ends with React and Motion.dev for a polished, high-performance site.",
          "Improved UX through optimized rendering and dynamic interactions.",
        ],
      },
      {
        title: "Alexandria",
        technologies: "jQuery / API Integration",
        points: [
          "Developed a scalable jQuery API layer for searchable pharmacist content.",
          "Enhanced data delivery speed and accuracy with optimized query logic.",
        ],
      },
      {
        title: "Baseline Investments",
        technologies: "React (TypeScript) / Redux / Tailwind / Firebase",
        points: [
          "Built a full-stack financial app with secure auth and real-time data sync.",
          "Designed robust state management and reporting interface.",
        ],
      },
      {
        title: "LockDocs",
        technologies: "React (TypeScript) / Material UI / Firebase",
        points: [
          "Created end-to-end PDF signing workflow with secure file handling.",
          "Managed full client lifecycle from requirements to deployment.",
        ],
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Personal & Commissioned Projects",
    location: "Ontario",
    timeframe: "2019 - ∞",
    projects: [
      {
        title: "Varied",
        technologies:
          "Java / Laravel (PHP) / MySQL / React (TypeScript) / Material UI / Firebase",
        points: [
          "Commisioned to create web applications booking systems, e-commerce platforms, and portfolio sites for various clients.",
          "Developed an entire suite of Java plugins for a popular Java based video game, utilizing Java and the clients API to create custom features and enhancements for players.",
          "Created a comprehensive web application for a popular Java based video game, Incorporating features pulling from the game's API to display calculations based on specific users accounts.",
          "Utilized Electron, Websockets, & Java to create overlays for a popular Java based video game fed information through a WebSocket server from the client.",
        ],
      },
    ],
  },
];

interface ExperienceProps {
  theme: Theme;
  isMobile: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ theme, isMobile }) => {
  return (
    <Box id="Experience">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            "@media (max-width:800px)": { mt: 2, height: "85%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarColor: "transparent transparent",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                alignSelf: "flex-start",
                textAlign: "center",
                mx: "auto",
                fontWeight: 700,
                mt: isMobile ? 5 : 18,
              }}
            >
              <BlurText
                text="Experience"
                delay={150}
                animateBy="letters"
                direction="top"
              />
            </Typography>

            {experienceCard.map((xp) => (
              <>
                <Box
                  key={xp.title}
                  sx={{
                    px: isMobile ? 0 : 3,
                    py: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",

                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    background: "rgba(0, 0, 0, 0.45)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "22px",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.45)",
                    padding: 3,
                  }}
                >
                  <FadeContent
                    blur={true}
                    duration={1000}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 300, mb: 1 }}>
                      <span
                        style={{
                          color: theme.palette.primary.main,
                          fontWeight: 800,
                        }}
                      >
                        {xp.title}
                      </span>
                      {isMobile ? <br /> : " - "}
                      <span
                        style={{
                          color: theme.palette.secondary.main,
                          fontWeight: 600,
                        }}
                      >
                        {xp.company}
                      </span>
                      , {xp.location} {isMobile ? <br /> : "-"} {xp.timeframe}
                    </Typography>
                    {xp.projects.map((proj) => (
                      <div key={proj.title}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 300, mb: 2 }}
                        >
                          <span
                            style={{
                              color: theme.palette.primary.main,
                              fontWeight: 600,
                              textDecoration: "underline",
                            }}
                          >
                            {proj.title}
                          </span>
                          {" - "}
                          <span
                            style={{
                              fontStyle: "italic",
                              fontSize: "1rem",
                            }}
                          >
                            {proj.technologies}
                          </span>
                        </Typography>
                        {proj.points.map((point, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 1,
                            }}
                          >
                            <Box
                              sx={{
                                width: 10,
                                height: 10,
                                bgcolor: theme.palette.secondary.main,
                                borderRadius: "50%",
                                mr: 2,
                              }}
                            />
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: 500 }}
                            >
                              {point}
                            </Typography>
                          </Box>
                        ))}
                      </div>
                    ))}
                  </FadeContent>
                </Box>

                {xp.company !== "Personal & Commissioned Projects" && (
                  <Box
                    sx={{
                      height: 5,
                      bgcolor: theme.palette.secondary.main,
                      my: 2,
                      ml: "20px",
                      borderRadius: 1,
                      width: "250px",
                      alignSelf: "flex-start",
                    }}
                  />
                )}
              </>
            ))}
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Experience;
