import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  FaJava,
  FaHtml5,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiSass,
  SiExpress,
  SiTailwindcss,
  SiPython,
  SiBitbucket,
  SiBabel,
  SiFlutter,
  SiGmail,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import React, { useEffect, useState } from "react";
import TextType from "./components/TextType";
import DarkVeil from "./components/DarkVeil";
import DotGrid from "./components/DotGrid";
import LogoLoop from "./components/LogoLoop";
import GooeyNav from "./components/GooeyNav";
import GlassSurface from "./components/GlassSurface";
import BlurText from "./components/BlurText";
import FadeContent from "./components/FadeContent";
import ProjectCard from "./components/ProjectCard";
import gmlive from "./assets/projects/gmlive.png";
import rspet from "./assets/projects/rspet.png";
import javaplugins from "./assets/projects/javaplugins.png";
import firstaidconnect from "./assets/projects/firstaidconnect.png";
import portfolio from "./assets/projects/portfolio.png";
import bdcms from "./assets/projects/bdcms.png";
import geowoot from "./assets/projects/geowoot.png";
import geometa from "./assets/projects/geometa.png";
import cv from "./assets/AdamGustinResume.pdf";
import "./App.css";
import { BsArrowDownShort } from "react-icons/bs";

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

const items = [
  { label: "Home", href: "#Home" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Contact", href: "#Contact" },
];

const logos = [
  { node: <SiReact />, title: "React" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <FaJava />, title: "Java" },
  { node: <FaHtml5 />, title: "HTML5" },
  { node: <SiFlutter />, title: "Flutter" },
  { node: <SiSass />, title: "Sass" },
  { node: <SiJquery />, title: "jQuery" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiExpress />, title: "Express.js" },
  { node: <FaNodeJs />, title: "Node.js" },
  { node: <IoLogoFirebase />, title: "Firebase" },
  { node: <FaAws />, title: "AWS" },
  { node: <SiPython />, title: "Python" },
  { node: <FaGithub />, title: "GitHub" },
  { node: <SiBitbucket />, title: "Bitbucket" },
  { node: <FaDocker />, title: "Docker" },
  { node: <SiBabel />, title: "Babel" },
];

const projectCards = [
  {
    id: 1,
    img: gmlive,
    title: "GM LIVE",
    description:
      "GM LIVE was a Content Management System built for General Motors to manage and streamline their digital one-to-one customer video tours and experiences as well as providing a platform for their sales team to manage and organize their customer interactions.",
    points: [
      "Designed and developed a full Content Management System and virtual showroom connecting EV buyers with live product experts for real-time Q&A and education.",
      "Developed and maintained a robust Content Management System leveraging Typescript, React, Flutter and Firebase.",
      "Implemented scalable and efficient front-end components to enhance user experience and streamline content management workflows.",
      "Utilized Firebase and Google Cloud Platform services to deploy and manage the CMS, ensuring high availability and performance.",
    ],
    link: "NA",
    github: "NA",
    technologies: [
      "TypeScript",
      "React",
      "Flutter",
      "React Native",
      "Firebase",
      "GCP",
      "Symbl AI",
    ],
  },
  {
    id: 2,
    img: geowoot,
    title: "GeoWoot",
    description:
      "geowoot is a modern web application that tracks real-time coordinates and displays geographical meta data including maps and country-specific information. It features a responsive UI with live updates, reverse geocoding, and integrated Google Maps visualization.",
    points: [
      "Real-time Coordinate Tracking: Monitor and display live geographic coordinates.",
      "Reverse Geocoding: Automatically convert coordinates to city and country names using OpenStreetMap's Nominatim.",
      "Interactive Maps: Embedded Google Maps with adjustable zoom levels (1-20).",
      "Country Metadata: Display country-specific information fetched from geometas.com",
      "Live Updates: Automatic refresh with SWR for real-time data synchronization.",
      "Responsive Design: Mobile-friendly interface with Tailwind CSS and shadcn/ui components.",
    ],
    link: "NA",
    github: "https://github.com/a97g/geowoot",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "PostCSS",
      "shadcn",
      "SWR",
    ],
  },
  {
    id: 2,
    img: geometa,
    title: "Geometa Trainer",
    description:
      "A web application for learning geographical location identification through street view metas. The aim of this project is to help users learn and quickly identify where they are in the world through easy to distinguish objects.",
    points: [
      "Browse metas by 8 geographical regions and 18 categories.",
      "User authentication with registration and login.",
      "Submit new metas with images and country selection.",
      "Track your submissions with approval status.",
      "Admin approval panel for reviewing and managing submissions.",
    ],
    link: "NA",
    github: "https://github.com/a97g/geometa-trainer",
    technologies: [
      "Laravel 8",
      "Vue",
      "MySQL",
      "Laravel Breeze",
      "Vite",
      "Axios",
      "Sanctum",
    ],
  },
  {
    id: 3,
    img: rspet,
    title: "3400rs",
    description:
      "Popular page among the OldSchool Runescape Community used to display and track a users accomplishments as well as leaderboards.",
    points: [
      "Browse and view users leaderboard statistics.",
      "Modern and highly customizable UI.",
      "Massaging and manipulating data returned from an external API to display user-centric information.",
    ],
    link: "https://3400rs.pages.dev/",
    github: "https://github.com/a97g/3400rs",
    technologies: ["React", "Material UI", "APIs"],
  },
  {
    id: 5,
    img: firstaidconnect,
    title: "First Aid Connect",
    description:
      "First Aid Connect offers certified first aid training in Ottawa, with flexible courses for individuals and workplaces. I created the website and implemented a booking system for users to easily enroll in courses.",
    points: [
      "Browse and select from large list of available courses.",
      "Implemented booking system for users to easily enroll in courses.",
    ],
    link: "https://firstaidconnect.ca/",
    github: "NA",
    technologies: ["React", "Material UI", "Bookeo", "Shopify"],
  },
  {
    id: 6,
    img: javaplugins,
    title: "Java Plugins",
    description:
      "Large suite of proprietary Java based plugins for OldSchool Runescape third-party client RuneLite.",
    points: [
      "Built with Java & RuneLite API.",
      "Aimed to create custom features & enhancements to improve user experience and provide additional functionalities.",
    ],
    link: "NA",
    github: "NA",
    technologies: ["Java", "Gradle", "APIs"],
  },
  {
    id: 7,
    img: bdcms,
    title: "Flexible CMS",
    description:
      "Discord.JS integrated bot & web dashboard for managing a Discord community. Allowing users to submit their own ranking information and have it displayed neatly on a web dashboard.",
    points: [
      "Built with React, TypeScript, Material UI, Firestore Database.",
      "Features Role Management, Custom Commands, Submission Approval.",
    ],
    link: "NA",
    github: "NA",
    technologies: [
      "TypeScript",
      "React",
      "Material UI",
      "Firebase",
      "Discord.Js",
    ],
  },
  {
    id: 8,
    img: portfolio,
    title: "Portfolio",
    description:
      "Personal portfolio website showcasing my projects, skills, and experience. Built with React and Material-UI.",
    points: ["Built with React, TypeScript, Material UI, Framer Motion"],
    link: "NA",
    github: "NA",
    technologies: ["TypeScript", "React", "Material UI", "Framer Motion"],
  },
];

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Contact form state
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  const [sendSuccess, setSendSuccess] = useState<boolean | null>(null);
  const [sendError, setSendError] = useState<string | null>(null);

  // Window resize listener to detect mobile width <800px
  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width:800px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Contact form submit handler
  const handleContactSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    setSending(true);
    setSendError(null);
    setSendSuccess(null);

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

    // Basic validation
    if (!contactName || !contactEmail || !contactMessage) {
      setSendError("Please fill in all fields.");
      setSending(false);
      return;
    }

    try {
      if (endpoint) {
        // Send to Formspree
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: contactName,
            email: contactEmail,
            message: contactMessage,
          }),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Send failed: ${res.status} ${text}`);
        }

        setSendSuccess(true);
        setContactName("");
        setContactEmail("");
        setContactMessage("");
      } else {
        // Fallback to mailto
        const subject = encodeURIComponent(
          `Portfolio message from ${contactName}`
        );
        const body = encodeURIComponent(
          `${contactMessage}\n\nFrom: ${contactName} <${contactEmail}>`
        );
        window.location.href = `mailto:adamgustin@me.com?subject=${subject}&body=${body}`;
        setSendSuccess(true);
      }
    } catch (err: unknown) {
      const message =
        err && typeof err === "object" && "message" in err
          ? (err as { message?: string }).message
          : String(err);
      setSendError(message || "An error occurred while sending message.");
      setSendSuccess(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <DarkVeil />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#101010"
          activeColor="white"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          style={{ backgroundColor: "transparent" }}
        />
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: 20,
          left: 0,
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          zIndex: 1000,
          "@media (max-width:800px)": { display: "none" },
        }}
      >
        <GlassSurface width={550} height={70} borderRadius={24}>
          <GooeyNav
            items={items}
            particleCount={50}
            particleDistances={[90, 10]}
            particleR={700}
            initialActiveIndex={0}
            animationTime={300}
            timeVariance={1000}
            colors={[5, 2, 3, 1, 2, 3, 1, 4]}
          />
        </GlassSurface>
      </Box>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          p: 0,
          m: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {/* Welcome Section */}
        <Box
          id="Home"
          sx={{
            minHeight: "100vh",
            width: "100vw",
            bgcolor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            scrollSnapType: "y-proximity",
          }}
        >
          {/* Content */}
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
              <Typography
                variant={isMobile ? "h5" : "h3"}
                sx={{ fontWeight: 900 }}
              >
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
                  textColors={[
                    isMobile ? "#fff" : theme.palette.secondary.main,
                  ]}
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

        {/* Experience Section */}
        <Box
          id="Experience"
          sx={{
            width: "100vw",
            bgcolor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
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
              {/* Dentsu */}
              <Box
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
                      Full-Stack Developer
                    </span>
                    {isMobile ? <br /> : " - "}
                    <span
                      style={{
                        color: theme.palette.secondary.main,
                        fontWeight: 600,
                      }}
                    >
                      Dentsu Creative
                    </span>
                    , Toronto Ontario {isMobile ? <br /> : "-"} 2023 - 2025
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 300, mb: 2 }}>
                    <span
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        textDecoration: "underline",
                      }}
                    >
                      General Motors Live
                    </span>
                    {" - "}
                    <span
                      style={{
                        fontStyle: "italic",
                        fontSize: "1rem",
                      }}
                    >
                      React (TypeScript) / Material UI / Node.js (Express) /
                      Firebase Functions / React Native / Symbl AI
                    </span>
                  </Typography>
                  {[
                    "Designed and developed a full Content Management System and virtual showroom connecting EV buyers with live product experts for real-time Q&A and education.",
                    "Built scalable full-stack architecture using Node.js, Firebase Functions, and TypeScript for seamless communication and data handling.",
                    "Developed responsive front-end components with React, Material UI, and React Native, ensuring consistent cross-platform UX.",
                    "Leveraged Firebase and Google Cloud Platform for secure hosting, authentication, and deployment with high availability.",
                    "Integrated Symbl AI for conversational intelligence, providing transcriptions and real-time interaction insights.",
                    "Collaborated with design and product teams to refine workflows, managed tasks in JIRA, and delivered on agile milestones.",
                  ].map((point, idx) => (
                    <Box
                      key={idx}
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
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
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </FadeContent>
              </Box>
              {/* Divider */}
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
              {/* Devlift */}
              <Box
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
                  duration={1500}
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
                      Full-Stack Developer
                    </span>
                    {isMobile ? <br /> : " - "}
                    <span
                      style={{
                        color: theme.palette.secondary.main,
                        fontWeight: 600,
                      }}
                    >
                      DevLift Media
                    </span>
                    , London Ontario {isMobile ? <br /> : "-"} 2020 - 2023
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 300, mb: 2 }}>
                    <span
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        textDecoration: "underline",
                      }}
                    >
                      Glissner
                    </span>
                    {" - "}
                    <span
                      style={{
                        fontStyle: "italic",
                        fontSize: "1rem",
                      }}
                    >
                      React (TypeScript) / Material UI / Framer Motion
                    </span>
                  </Typography>
                  {[
                    "Built a responsive, animated front-ends with React and Motion.dev for a polished, high-performance site.",
                    "Improved UX through optimized rendering and dynamic interactions.",
                  ].map((point, idx) => (
                    <Box
                      key={idx}
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
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
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                  <Typography variant="h6" sx={{ fontWeight: 300, mb: 2 }}>
                    <span
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        textDecoration: "underline",
                      }}
                    >
                      Alexandria
                    </span>
                    {" - "}
                    <span
                      style={{
                        fontStyle: "italic",
                        fontSize: "1rem",
                      }}
                    >
                      jQuery / API Integration
                    </span>
                  </Typography>
                  {[
                    "Developed a scalable jQuery API layer for searchable pharmacist content.",
                    "Enhanced data delivery speed and accuracy with optimized query logic.",
                  ].map((point, idx) => (
                    <Box
                      key={idx}
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
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
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                  <Typography variant="h6" sx={{ fontWeight: 300, mb: 2 }}>
                    <span
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        textDecoration: "underline",
                      }}
                    >
                      Baseline
                    </span>
                    {" - "}
                    <span
                      style={{
                        fontStyle: "italic",
                        fontSize: "1rem",
                      }}
                    >
                      React (TypeScript) / Redux / Tailwind / Firebase
                    </span>
                  </Typography>
                  {[
                    "Built a full-stack financial app with secure auth and real-time data sync.",
                    "Designed robust state management and reporting interface.",
                  ].map((point, idx) => (
                    <Box
                      key={idx}
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
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
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                  <Typography variant="h6" sx={{ fontWeight: 300, mb: 2 }}>
                    <span
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        textDecoration: "underline",
                      }}
                    >
                      LockDocs
                    </span>
                    {" - "}
                    <span
                      style={{
                        fontStyle: "italic",
                        fontSize: "1rem",
                      }}
                    >
                      React (TypeScript) / Material UI / Firebase
                    </span>
                  </Typography>
                  {[
                    "Created end-to-end PDF signing workflow with secure file handling.",
                    "Managed full client lifecycle from requirements to deployment.",
                  ].map((point, idx) => (
                    <Box
                      key={idx}
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
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
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </FadeContent>
              </Box>
              {/* Divider */}
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
              {/* Personal */}
              <Box
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
                  duration={2000}
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
                      Full-Stack Developer
                    </span>
                    {isMobile ? <br /> : " - "}
                    <span
                      style={{
                        color: theme.palette.secondary.main,
                        fontWeight: 600,
                      }}
                    >
                      Personal & Commissioned Projects
                    </span>
                  </Typography>
                  {[
                    "Commisioned to create web applications house booking systems, e-commerce platforms, and portfolio sites for various clients.",
                    "Developed an entire suite of Java plugins for a popular Java based video game, utilizing Java and the clients API to create custom features and enhancements for players.",
                    "Created a comprehensive web application for a popular Java based video game, Incorporating features pulling from the game's API to display calculations based on specific users accounts.",
                    "Utilized Electron, Websockets, & Java to create overlays for a popular Java based video game fed information through a WebSocket server from the client.",
                  ].map((point, idx) => (
                    <Box
                      key={idx}
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
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
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </FadeContent>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 3,
              height: "200px",
              position: "relative",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <FadeContent
              blur={true}
              duration={500}
              easing="ease-in"
              initialOpacity={0}
            >
              <LogoLoop
                logos={logos}
                speed={90}
                direction="left"
                logoHeight={48}
                gap={50}
                pauseOnHover
                scaleOnHover
                ariaLabel="Skills and Technologies"
              />
            </FadeContent>
          </Box>
        </Box>

        {/* Projects Section */}
        <Box
          id="Projects"
          sx={{
            width: "100vw",
            position: "relative",
            bgcolor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box",
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
              text="Featured Projects"
              delay={150}
              animateBy="letters"
              direction="top"
            />
          </Typography>
          {/* Projects Grid */}
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
            sx={{ py: 6, width: "90%" }}
          >
            {projectCards.map((proj) => (
              <Grid
                key={proj.id}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ProjectCard {...proj} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Section */}
        <Box
          id="Contact"
          sx={{
            minHeight: "100vh",
            width: "100vw",
            position: "relative",
            bgcolor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
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
              mb: isMobile ? 5 : 8,
            }}
          >
            <BlurText
              text="Contact Me"
              delay={150}
              animateBy="letters"
              direction="top"
            />
          </Typography>
          <GlassSurface width={"auto"} height={500} borderRadius={24}>
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                width: "100%",
                maxWidth: 400,
                mr: 5,
                ml: 5,
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></Box>
              <Typography variant="h6">
                Feel free to reach out via the form below.
              </Typography>
              <Box
                component="form"
                onSubmit={handleContactSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  mt: 2,
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  required
                  fullWidth
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
                <TextField
                  label="Message"
                  name="message"
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  rows={5}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                />
                {sendError && (
                  <Typography variant="body2" color="error">
                    {sendError}
                  </Typography>
                )}
                {sendSuccess && (
                  <Typography variant="body2" color="success.main">
                    Message sent — thank you!
                  </Typography>
                )}
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  sx={{
                    mt: 2,
                  }}
                  disabled={sending}
                >
                  {sending ? "Sending…" : "Send Message"}
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Tooltip title="GitHub">
                    <IconButton
                      component="a"
                      href="https://github.com/a97g"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "text.primary",
                        transition: "color 0.3s, transform 0.3s",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    >
                      <SiGithub size={28} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="LinkedIn">
                    <IconButton
                      component="a"
                      href="https://linkedin.com/in/adamgustin"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "text.primary",
                        transition: "color 0.3s, transform 0.3s",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    >
                      <SiLinkedin size={28} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Email">
                    <IconButton
                      component="a"
                      href="mailto:adamgustin@me.com"
                      sx={{
                        color: "text.primary",
                        transition: "color 0.3s, transform 0.3s",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    >
                      <SiGmail size={28} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          </GlassSurface>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
