import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Typography,
  Button,
  TextField,
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
} from "react-icons/si";
import React, { useRef, useEffect, useState } from "react";
import TextType from "./components/TextType";
import DarkVeil from "./components/DarkVeil";
import DotGrid from "./components/DotGrid";
import LogoLoop from "./components/LogoLoop";
import Iridescence from "./components/Iridescence";
import Waves from "./components/Waves";
import GooeyNav from "./components/GooeyNav";
import GlassSurface from "./components/GlassSurface";
import BlurText from "./components/BlurText";
import FadeContent from "./components/FadeContent";
import Silk from "./components/Silk";
import SpotlightCard from "./components/SpotlightCard";
import project1 from "./assets/projects/project1.png";
import project2 from "./assets/projects/project2.png";
import project3 from "./assets/projects/project3.png";
import project4 from "./assets/projects/project4.png";
import project5 from "./assets/projects/project5.png";
import project6 from "./assets/projects/project6.png";
import "./App.css";

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
    img: project1,
    title: "GM LIVE",
    description:
      "GM LIVE was a Content Management System built for General Motors to manage and streamline their digital one-to-one customer video tours and experiences as well as providing a platform for their sales team to manage and organize their customer interactions.",
    points: [
      "Developed and maintained a robust Content Management System leveraging Typescript, React, Flutter and Firebase.",
      "Implemented scalable and efficient front-end components to enhance user experience and streamline content management workflows.",
      "Utilized Firebase and Google Cloud Platform services to deploy and manage the CMS, ensuring high availability and performance.",
    ],
    link: "NA",
  },
  {
    img: project2,
    title: "3400rs",
    description:
      "Popular page among the OldSchool Runescape Community used to display and track a users accomplishments as well as leaderboards.",
    points: [
      "Built with React, Material UI, Bookeo.",
      "Massaging and manipulating data returned from an external API to display user-centric information.",
    ],
    link: "https://3400rs.pages.dev/",
  },
  {
    img: project4,
    title: "First Aid Connect",
    description:
      "First Aid Connect offers certified first aid training in Ottawa, with flexible courses for individuals and workplaces. I created the website and implemented a booking system for users to easily enroll in courses.",
    points: [
      "Built with React, Material UI, Bookeo",
      "I created the website and implemented a booking system for users to easily enroll in courses.",
    ],
    link: "https://firstaidconnect.ca/",
  },
  {
    img: project3,
    title: "Java Plugins",
    description:
      "Large suite of proprietary Java based plugins for OldSchool Runescape third-party client RuneLite.",
    points: [
      "Built with Java & RuneLite API.",
      "Aimed to create custom features & enhancements to improve user experience and provide additional functionalities.",
    ],
    link: "NA",
  },
  {
    img: project6,
    title: "BigDog CMS",
    description:
      "Discord.JS integrated bot & web dashboard for managing a Discord community. Allowing users to submit their own ranking information and have it displayed neatly on a web dashboard.",
    points: [
      "Built with React, TypeScript, Material UI, Firestore Database.",
      "Features Role Management, Custom Commands, Submission Approval.",
    ],
    link: "NA",
  },
  {
    img: project5,
    title: "Portfolio",
    description:
      "Personal portfolio website showcasing my projects, skills, and experience. Built with React and Material-UI.",
    points: ["Built with React, TypeScript, Material UI, Framer Motion"],
    link: "NA",
  },
];

const App: React.FC = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const experienceInnerRef = useRef<HTMLDivElement | null>(null);

  // Contact form state
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  const [sendSuccess, setSendSuccess] = useState<boolean | null>(null);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleScroll = () => {
    const container = document.getElementById("scrollable-card-box");
    if (!container) return;
    let minDistance = Infinity;
    let topIndex = 0;
    cardRefs.current.forEach((ref, idx) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const distance = Math.abs(rect.top - containerRect.top);
        if (distance < minDistance) {
          minDistance = distance;
          topIndex = idx;
        }
      }
    });
    setFocusedIndex(topIndex);
  };

  // Attach scroll event
  useEffect(() => {
    const container = document.getElementById("scrollable-card-box");
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Window resize listener to detect mobile width <800px
  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width:800px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Ensure Experience section and its inner scrollable content start at top on mobile
  useEffect(() => {
    if (!isMobile) return;
    // Scroll page to top (Home) to prevent unexpected snap to other sections
    const home = document.getElementById("Home");
    if (home) {
      home.scrollIntoView({ behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    // Reset internal Experience scrollable area
    if (experienceInnerRef.current) {
      experienceInnerRef.current.scrollTop = 0;
    }
  }, [isMobile]);

  // Contact form submit handler — uses Formspree endpoint if provided in env variable
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
        // Send to Formspree (expects JSON)
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
        // Fallback to mailto if no endpoint is configured
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
          scrollSnapType: "y mandatory",
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
            scrollSnapAlign: "start",
          }}
        >
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
          {/* Content */}
          <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
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
                <Button variant="outlined">Download CV</Button>
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
            overflow: "hidden",
            height: "100vh",
            width: "100vw",
            bgcolor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            scrollSnapAlign: "start",
          }}
        >
          {/* Background */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          >
            <Waves
              lineColor="#0f0f0fff"
              backgroundColor="black"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              maxCursorMove={120}
              xGap={12}
              yGap={36}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
              mt: 10,
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
                mt: 4,
                maxHeight: "90vh",
                overflowY: "auto",
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarColor: "transparent transparent",
              }}
              ref={experienceInnerRef}
              onWheel={(e: React.WheelEvent<HTMLDivElement>) => {
                const target = e.currentTarget;
                const atTop = target.scrollTop === 0;
                const atBottom =
                  target.scrollHeight - target.scrollTop ===
                  target.clientHeight;
                if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
                  // Allow page scroll
                  e.stopPropagation();
                } else {
                  // Prevent page scroll, only scroll the box
                  e.preventDefault();
                }
              }}
            >
              <FadeContent
                blur={true}
                duration={2000}
                easing="ease-out"
                initialOpacity={0}
              >
                {/* Dentsu */}
                <Box
                  sx={{
                    px: isMobile ? 0 : 3,
                    py: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>
                    Full-Stack Developer
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 300, mb: 2 }}>
                    <span
                      style={{
                        color: theme.palette.secondary.main,
                        fontWeight: 500,
                      }}
                    >
                      General Motors - Dentsu Creative
                    </span>
                    , Toronto Ontario {isMobile ? <br /> : "|"} 2023 – 2025
                  </Typography>
                  {[
                    "Developed and maintained a robust Content Management System leveraging Typescript, React, Flutter and Firebase.",
                    "Implemented scalable and efficient front-end components to enhance user experience and streamline content management workflows.",
                    "Utilized Firebase and Google Cloud Platform services to deploy and manage the CMS, ensuring high availability and performance.",
                    "Collaborated with cross-functional teams, including product managers and designers, to gather requirements and deliver tailored solutions.",
                    "Employed JIRA for agile project management, tracking progress, and ensuring timely delivery of project milestones.",
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
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>
                    Full-Stack Developer
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 300, mb: 2 }}>
                    <span
                      style={{
                        color: theme.palette.secondary.main,
                        fontWeight: 500,
                      }}
                    >
                      DevLift Media
                    </span>
                    , London Ontario {isMobile ? <br /> : "|"} 2020 – 2023
                  </Typography>
                  {[
                    "Developed and maintained scalable web applications using primarily React, TypeScript, CSS, and Firebase.",
                    "Implemented responsive UI components and features, ensuring a seamless user experience across devices.",
                    "Worked closely with UX/UI designers to implement pixel-perfect designs and ensure optimal user experience.",
                    "Fostered strong client relationships by collaborating to bring their application visions to life",
                    "Leveraged various agile development methodologies and project management such as JIRA and Trello to concisely and efficiently conduct tasks.",
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
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>
                    Full-Stack Developer
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 300, mb: 2 }}>
                    <span
                      style={{
                        color: theme.palette.secondary.main,
                        fontWeight: 500,
                      }}
                    >
                      Personal & Commissioned Projects
                    </span>
                  </Typography>
                  {[
                    "Commisioned to create web applications house booking systems, e-commerce platforms, and portfolio sites for various clients.",
                    "Developed an entire suite of Java plugins for OldSchool RuneScape, utilizing Java and the clients API to create custom features and enhancements for players.",
                    "Created a comprehensive web application for OldSchool RuneScape, Incorporating features pulling from the game's API to display calculations based on specific users accounts.",
                    "Utilized Electron, Websockets, & Java to create overlays for OldSchool RuneScape fed information through a WebSocket server from the client.",
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
                </Box>
              </FadeContent>
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
              duration={3000}
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
            overflow: "hidden",
            height: "100vh",
            width: "100vw",
            position: "relative",
            bgcolor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box",
            scrollSnapAlign: "start",
          }}
        >
          {/* Background */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          >
            <Silk
              speed={5}
              scale={1}
              color="#5c0a9aff"
              noiseIntensity={1.5}
              rotation={0}
            />
          </Box>

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
              text="Projects"
              delay={150}
              animateBy="letters"
              direction="top"
            />
          </Typography>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              justifyContent: "center",
              zIndex: 1,
              maxWidth: "1280px",
              mt: 2,
              width: "100%",
            }}
          >
            {/* Desktop: Scrollable cards with fixed info. Mobile: stack cards vertically with info inside each card */}
            {!isMobile ? (
              <>
                <Box
                  id="scrollable-card-box"
                  sx={{
                    height: "100vw",
                    overflowY: "auto",
                    width: "50vw",
                    scrollbarWidth: 0,
                    "&::-webkit-scrollbar": { display: "none" },
                    scrollbarColor: "transparent transparent",
                    overflowX: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    scrollSnapType: "y mandatory",
                  }}
                >
                  {projectCards.map((project, idx) => (
                    <div
                      key={idx}
                      data-index={idx}
                      ref={(el) => {
                        cardRefs.current[idx] = el;
                      }}
                      style={{
                        padding: 12,
                        scrollSnapAlign: "start",
                        marginBottom:
                          project.title == "Portfolio" ? "150vh" : 0,
                      }}
                    >
                      <SpotlightCard
                        spotlightColor="rgba(94, 46, 196, 0.79)"
                        className="project-card"
                      >
                        <Typography
                          variant="h3"
                          sx={{ mb: 4, fontWeight: 700, textAlign: "center" }}
                        >
                          {project.title}
                        </Typography>
                        <img
                          src={project.img}
                          alt={project.title}
                          className="project-image"
                        />
                      </SpotlightCard>
                    </div>
                  ))}
                </Box>

                {/* Fixed Information per card */}
                <Box
                  sx={{
                    position: "sticky",
                    top: 40,
                    alignSelf: "flex-start",
                    display: "flex",
                    maxWidth: "400px",
                    zIndex: 20,
                    mt: 3,
                    ml: 4,
                  }}
                >
                  <Box
                    sx={{
                      height: 5,
                      bgcolor: theme.palette.secondary.main,
                      my: 2,
                      ml: "20px",
                      borderRadius: 1,
                      minWidth: "50px",
                      alignSelf: "flex-start",
                      mr: 3,
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 3 }}>
                      {projectCards[focusedIndex].description}
                    </Typography>
                    {projectCards[focusedIndex].points.map((point, idx) => (
                      <Box
                        key={idx}
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            bgcolor: theme.palette.secondary.main,
                            borderRadius: "5px",
                            mr: 2,
                          }}
                        />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {point}
                        </Typography>
                      </Box>
                    ))}
                    {projectCards[focusedIndex].link !== "NA" && (
                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 2, width: "50%" }}
                        onClick={() =>
                          window.open(projectCards[focusedIndex].link, "_blank")
                        }
                      >
                        View
                      </Button>
                    )}
                  </Box>
                </Box>
              </>
            ) : (
              <Box
                id="scrollable-card-box"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  width: "100%",
                  px: 2,
                  scrollbarWidth: 0,
                  "&::-webkit-scrollbar": { display: "none" },
                  scrollbarColor: "transparent transparent",
                  overflowX: "hidden",
                  scrollSnapType: "y mandatory",
                  height: "100vh",
                  overflowY: "scroll",
                }}
                onWheel={(e) => {
                  const target = e.currentTarget;
                  const atTop = target.scrollTop === 0;
                  const atBottom =
                    target.scrollHeight - target.scrollTop ===
                    target.clientHeight;
                  if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
                    // Allow page scroll
                    e.stopPropagation();
                  } else {
                    // Prevent page scroll, only scroll the box
                    e.preventDefault();
                  }
                }}
              >
                {projectCards.map((project, idx) =>
                  project.img !== null ? (
                    <Box
                      sx={{
                        height: "auto",
                        mb: project.title == "Portfolio" ? 15 : 0,
                      }}
                    >
                      <SpotlightCard
                        key={idx}
                        spotlightColor="rgba(94, 46, 196, 1)"
                        className="project-card"
                      >
                        <img
                          src={project.img}
                          alt={project.title ?? `project-${idx}`}
                          className="project-image"
                        />
                        <Typography
                          variant="h4"
                          sx={{ mt: 1, fontWeight: 800 }}
                        >
                          {project.title}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                          {project.points.map((p, pidx) =>
                            p ? (
                              <Box
                                key={pidx}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  mt: 1,
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 8,
                                    height: 8,
                                    bgcolor: theme.palette.secondary.main,
                                    borderRadius: "50%",
                                    mr: 1,
                                  }}
                                />
                                <Typography variant="body2">{p}</Typography>
                              </Box>
                            ) : null
                          )}
                        </Box>
                        {project.link && project.link !== "NA" && (
                          <Button
                            variant="contained"
                            color="secondary"
                            sx={{ mt: 2 }}
                            onClick={() => window.open(project.link, "_blank")}
                          >
                            View
                          </Button>
                        )}
                      </SpotlightCard>
                    </Box>
                  ) : null
                )}
              </Box>
            )}
          </Box>
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
            scrollSnapAlign: "start",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          >
            <Iridescence
              color={[0.4, 0.2, 0.5]}
              mouseReact={false}
              amplitude={0.1}
              speed={0.8}
            />
          </Box>
          <GlassSurface width={"auto"} height={600} borderRadius={24}>
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
              <Typography variant="h3" gutterBottom>
                Contact Me
              </Typography>
              <Typography variant="h6">
                Feel free to reach out via the form below.
              </Typography>
              <Box
                component="form"
                onSubmit={handleContactSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
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
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2 }}
                  disabled={sending}
                >
                  {sending ? "Sending…" : "Send Message"}
                </Button>
              </Box>
            </Box>
          </GlassSurface>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
