import { createTheme, ThemeProvider, CssBaseline, Container, Box, Typography, Paper, Button, Grid, TextField } from '@mui/material';
import { FaJava, FaHtml5, FaNodeJs, FaAws,FaGithub,FaDocker } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiReact, SiJavascript, SiTypescript, SiJquery, SiSass,SiExpress, SiTailwindcss, SiPython, SiBitbucket,SiBabel, SiFlutter } from 'react-icons/si';
import React, { useRef, useEffect, useState } from 'react';
import TextType from './components/TextType';
import DarkVeil from './components/DarkVeil';
import DotGrid from './components/DotGrid';
import GradualBlur from './components/GradualBlur';
import LogoLoop from './components/LogoLoop';
import Iridescence from './components/Iridescence';
import Waves from './components/Waves';
import GooeyNav from './components/GooeyNav';
import GlassSurface from './components/GlassSurface';
import BlurText from './components/BlurText';
import FadeContent from './components/FadeContent';
import Silk from './components/Silk';
import SpotlightCard from './components/SpotlightCard';
import CardSwap, { Card } from './components/CardSwap'
import project1 from './assets/projects/project1.png';
import project2 from './assets/projects/project2.png';
import project3 from './assets/projects/project3.png';
import project4 from './assets/projects/project4.png';
import project5 from './assets/projects/project5.png';
import project6 from './assets/projects/project6.png';
import './App.css';

// Gfont
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap';
document.head.appendChild(fontLink);

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00000',
    },
    secondary: {
      main: '#5e2ec4ff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: 'Figtree, Arial, sans-serif',
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
  { node: <SiBabel />, title: "Babel" } 
];

const projectCards = [
  {
    img: project1,
    title: "GM LIVE",
    description: "",
    points: [
      "Developed and maintained a robust Content Management System leveraging Typescript, React, Flutter and Firebase.", 
      "Implemented scalable and efficient front-end components to enhance user experience and streamline content management workflows.", 
      "Utilized Firebase and Google Cloud Platform services to deploy and manage the CMS, ensuring high availability and performance."
    ],
    link: "NA"
  },
  {
    img: project2,
    title: "3400rs",
    description: "Popular page among the OldSchool Runescape Community used to display and track a users accomplishments as well as leaderboards.",
    points: [
      "Built with React, Material UI, Bookeo",
      "I created the website and implemented a booking system for users to easily enroll in courses."
    ],
    link: "https://firstaidconnect.ca/"
  },
  {
    img: project3,
    title: "BigDog CMS",
    description: "Popular page among the OldSchool Runescape Community used to display and track a users accomplishments as well as leaderboards through pulling data from an API allocated to store users data.",
    points: [
      "Built with React & TypeScript",
      "Massaging and manipulating data returned from an external API to display user-centric information."
    ],
    link: "https://3400rs.pages.dev"
  },
  {
    img: project4,
    title: "First Aid Connect",
    description: "First Aid Connect offers certified first aid training in Ottawa, with flexible courses for individuals and workplaces. I created the website and implemented a booking system for users to easily enroll in courses.",
    points: [
      "Built with React, Material UI, Bookeo",
      "I created the website and implemented a booking system for users to easily enroll in courses."
    ],
    link: "https://firstaidconnect.ca/"
  },
  {
    img: project5,
    title: "Portfolio",
    description: "Personal portfolio website showcasing my projects, skills, and experience. Built with React and Material-UI.",
    points: [
      "Built with React, TypeScript, Material UI, Framer Motion"
    ],
    link: "https://firstaidconnect.ca/"
  },
    {
    img: project6,
    title: "Portfolio",
    description: "Personal portfolio website showcasing my projects, skills, and experience. Built with React and Material-UI.",
    points: [
      "Built with React, TypeScript, Material UI, Framer Motion"
    ],
    link: "https://firstaidconnect.ca/"
  }
];

const App: React.FC = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    const container = document.getElementById('scrollable-card-box');
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
    const container = document.getElementById('scrollable-card-box');
    if (!container) return;
    container.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'fixed', top: 20, left: 0, width: '100vw', display: 'flex', justifyContent: 'center', backgroundColor: 'transparent', zIndex: 10, 
        '@media (max-width:800px)': { display: 'none' } }}>
        <GlassSurface
          width={550}
          height={70}
          borderRadius={24}
        >
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
      <Container maxWidth={false} disableGutters sx={{ p: 0, m: 0, height: '100vh', overflowY: 'auto', scrollSnapType: 'y mandatory' }}>
        {/* Welcome Section */}
        <Box id="Home" sx={{ overflow: 'hidden', minHeight: '100vh', width: '100vw', bgcolor: theme.palette.primary.dark, color: theme.palette.primary.contrastText, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', scrollSnapAlign: 'start' }}>
          {/* Background */}
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
            <DarkVeil />
          </Box>
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
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
              style={{ backgroundColor: 'transparent' }}
            />
          </Box>
          {/* Content */}
          <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <Typography variant="h2" sx={{fontWeight: 900}}>Hello, I'm Adam Gustin.</Typography>
            <Typography variant="h3" sx={{fontWeight: 900}}>A passionate <TextType 
              text={['Web Developer.', 'Software Developer.', 'Full-Stack Developer.', 'Frontend Developer.', 'Backend Developer.', 'React Developer.', 'Node.js Developer.', 'TypeScript Developer.', 'Java Developer.']}
              typingSpeed={75}
              pauseDuration={1500}
              deletingSpeed={25}
              showCursor={true}
              cursorCharacter="|"
              textColors={[theme.palette.secondary.main ]}
            /></Typography> 
            <Box sx={{ mt: 2 }}>
              <Button variant='outlined'>
                Download CV
              </Button>
              <Button variant='outlined' sx={{ ml: 2, borderColor: theme.palette.secondary.main, '&:hover': { borderColor: theme.palette.secondary.light } }}
                onClick={() => {
                  const contactSection = document.getElementById('Contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                Contact Me
              </Button>
            </Box>
            </FadeContent>
          </Box>
        </Box>

        {/* Experience Section */}
        <Box id="Experience" sx={{ overflow: 'hidden', minHeight: '100vh', width: '100vw', bgcolor: theme.palette.primary.main, color: theme.palette.text.primary, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', scrollSnapAlign: 'start' }}>
          {/* Background */}
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
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
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1, mt: 10,
            '@media (max-width:800px)': { mt: 2 }
            }}>
            <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80%',
                  mt: 4,
                  maxHeight: '90vh',
                  overflowY: 'auto',
                }}
                onWheel={e => {
                  const target = e.currentTarget;
                  const atTop = target.scrollTop === 0;
                  const atBottom = target.scrollHeight - target.scrollTop === target.clientHeight;
                  if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
                    // Allow page scroll
                    e.stopPropagation();
                  } else {
                    // Prevent page scroll, only scroll the box
                    e.preventDefault();
                  }
                }}
              >
            <Typography variant="h3" gutterBottom sx={{ alignSelf: 'flex-start', textAlign: 'left', mx: 'auto', fontWeight: 700, mt: 4}}>
              <BlurText
                text="Experience"
                delay={150}
                animateBy="letters"
                direction="top"
              />
            </Typography>
              <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
              {/* Dentsu */}
              <Box sx={{ px: 3, py: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>Full-Stack Developer</Typography>
                <Typography variant="h6" sx={{ fontWeight: 300, mb: 2 }}><span style={{color: theme.palette.secondary.main, fontWeight: 500}}>General Motors - Dentsu Creative</span>, Toronto Ontario | 2023 – 2025</Typography>
                {["Developed and maintained a robust Content Management System leveraging Typescript, React, Flutter and Firebase.", 
                "Implemented scalable and efficient front-end components to enhance user experience and streamline content management workflows.", 
                "Utilized Firebase and Google Cloud Platform services to deploy and manage the CMS, ensuring high availability and performance.",
                "Collaborated with cross-functional teams, including product managers and designers, to gather requirements and deliver tailored solutions.",
                "Employed JIRA for agile project management, tracking progress, and ensuring timely delivery of project milestones."].map((point, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ width: 10, height: 10, bgcolor: theme.palette.secondary.main, borderRadius: '50%', mr: 2 }} />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{point}</Typography>
                  </Box>
                ))}
              </Box>
              {/* Divider */}
              <Box sx={{ height: 5, bgcolor: theme.palette.secondary.main, my: 2, ml: '20px', borderRadius: 1, width: '250px', alignSelf: 'flex-start' }} />
              {/* Devlift */}
              <Box sx={{ px: 3, py: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>Full-Stack Developer</Typography>
                <Typography variant="h6" sx={{ fontWeight: 300, mb: 2 }}><span style={{color: theme.palette.secondary.main, fontWeight: 500}}>DevLift Media</span>, London Ontario | 2020 – 2023</Typography>
                {["Developed and maintained scalable web applications using primarily React, TypeScript, CSS, and Firebase.",
                "Implemented responsive UI components and features, ensuring a seamless user experience across devices.",
                "Worked closely with UX/UI designers to implement pixel-perfect designs and ensure optimal user experience.",
                "Fostered strong client relationships by collaborating to bring their application visions to life",
                "Leveraged various agile development methodologies and project management such as JIRA and Trello to concisely and efficiently conduct tasks."].map((point, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ width: 10, height: 10, bgcolor: theme.palette.secondary.main, borderRadius: '50%', mr: 2 }} />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{point}</Typography>
                  </Box>
                ))}
              </Box>
              {/* Divider */}
              <Box sx={{ height: 5, bgcolor: theme.palette.secondary.main, my: 2, ml: '20px', borderRadius: 1, width: '250px', alignSelf: 'flex-start' }} />
              {/* Devlift */}
              <Box sx={{ px: 3, py: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 900}}>Full-Stack Developer</Typography>
                <Typography variant="h6" sx={{ fontWeight: 300, mb: 2 }}><span style={{color: theme.palette.secondary.main, fontWeight: 500}}>Personal & Commissioned Projects</span></Typography>
                {["Commisioned to create web applications house booking systems, e-commerce platforms, and portfolio sites for various clients.",
                "Developed an entire suite of Java plugins for OldSchool RuneScape, utilizing Java and the clients API to create custom features and enhancements for players.",
                "Created a comprehensive web application for OldSchool RuneScape, Incorporating features pulling from the game's API to display calculations based on specific users accounts.",
                "Utilized Electron, Websockets, & Java to create overlays for OldSchool RuneScape fed information through a WebSocket server from the client."].map((point, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ width: 10, height: 10, bgcolor: theme.palette.secondary.main, borderRadius: '50%', mr: 2 }} />
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{point}</Typography>
                  </Box>
                ))}
              </Box>
          </FadeContent>
            </Box>
          </Box>
          <Box sx={{ mt: 3, height: '200px', position: 'relative', overflow: 'hidden', width: '100%'}}>
            <FadeContent blur={true} duration={3000} easing="ease-in" initialOpacity={0}>
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
        <Box id="Projects" sx={{ overflow: 'hidden', minHeight: '100vh', width: '100vw', position: 'relative', bgcolor: theme.palette.primary.main, color: theme.palette.text.primary, display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box', scrollSnapAlign: 'start' }}>
          {/* Background */}
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Silk
              speed={5}
              scale={1}
              color="#5c0a9aff"
              noiseIntensity={1.5}
              rotation={0}
            />
          </Box>

          <Box sx={{ display: 'flex', position: 'relative', zIndex: 1, maxWidth: '1280px', mt: 15 }}>
            {/* Scrollable Cards */}
            <Box
              id="scrollable-card-box"
              sx={{
                height: '100vw',
                overflowY: 'auto',
                width: '60vw',
                scrollbarWidth: 0,
                '&::-webkit-scrollbar': { display: 'none' }, 
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                scrollSnapType: 'y mandatory',
              }}
            >
              {projectCards.map((project, idx) => (
                <div
                  key={idx}
                  data-index={idx}
                  ref={el => { cardRefs.current[idx] = el; }}
                  style={{ padding: 12, scrollSnapAlign: 'start' }}
                >
                  <SpotlightCard spotlightColor="rgba(94, 46, 196, 0.2)" className="project-card">
                    <Typography variant="h2" sx={{ mb: 2, fontWeight: 700, textAlign: 'center' }}>{project.title}</Typography>
                    <img src={project.img} alt={project.title} className="project-image"/>
                  </SpotlightCard>
                </div>
              ))}
            {/* Add extra space at the bottom for two cards */}
            </Box>

            {/* Fixed Information per card */}
            <Box sx={{
              position: 'sticky',
              top: 40,
              alignSelf: 'flex-start',
              maxWidth: '400px',
              zIndex: 20,
              mt: 3
            }}>
              <Typography variant="h3" sx={{fontWeight: 700}}>{projectCards[focusedIndex].title}</Typography>
              <Typography variant="body1" sx={{mb: 3}}>{projectCards[focusedIndex].description}</Typography>
              {projectCards[focusedIndex].points.map((point, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ width: 10, height: 10, bgcolor: theme.palette.secondary.main, borderRadius: '10px', mr: 2 }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>{point}</Typography>
                </Box>
              ))}
              {projectCards[focusedIndex].link !== "NA" && (
                <Button variant="contained" color="secondary" sx={{ mt: 2, width: '50%' }} onClick={() => window.open(projectCards[focusedIndex].link, "_blank")}>View</Button>
              )}
            </Box>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box id="Contact" sx={{ minHeight: '100vh', width: '100vw', position: 'relative', bgcolor: theme.palette.primary.dark, color: theme.palette.primary.contrastText, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', scrollSnapAlign: 'start' }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Iridescence
              color={[0.4, 0.2, 0.5]}
              mouseReact={false}
              amplitude={0.1}
              speed={0.8}
            />
          </Box>
          <GlassSurface
            width={550}
            height={600}
            borderRadius={24}
          >
            <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%', maxWidth: 400, mx: 'auto' }}>
              <Typography variant="h3" gutterBottom>Contact Me</Typography>
              <Typography variant="h6">Feel free to reach out via the form below.</Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }} noValidate autoComplete="off">
                <TextField label="Name" name="name" variant="outlined" required fullWidth />
                <TextField label="Email" name="email" type="email" variant="outlined" required fullWidth />
                <TextField label="Message" name="message" variant="outlined" required fullWidth multiline rows={5} />
                <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>Send Message</Button>
              </Box>
            </Box>
          </GlassSurface>
        </Box>

        {/* <GradualBlur 
          target="page"
          position="bottom"
          height="10rem"
          strength={3}
          divCount={10}
          curve="bezier"
          exponential={true}
          opacity={0.7}
        /> */}
      </Container>      
    </ThemeProvider>
  );
};

export default App;
