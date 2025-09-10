import { createTheme, ThemeProvider, CssBaseline, Container, Box, Typography, Paper, Button, Grid } from '@mui/material';
import { FaJava, FaHtml5, FaNodeJs, FaAws,FaGithub,FaDocker } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiReact, SiJavascript, SiTypescript, SiJquery, SiSass,SiExpress, SiTailwindcss, SiPython, SiBitbucket,SiBabel, SiFlutter } from 'react-icons/si';
import React from 'react';
import TextType from './components/TextType';
import DarkVeil from './components/DarkVeil';
import DotGrid from './components/DotGrid';
import GradualBlur from './components/GradualBlur';
import LogoLoop from './components/LogoLoop';
import Iridescence from './components/Iridescence';
import Waves from './components/Waves';
import GooeyNav from './components/GooeyNav';
import GlassSurface from './components/GlassSurface';

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

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* GooeyNav sticky and centered */}
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
        <Box id="Home" sx={{ minHeight: '100vh', width: '100vw', bgcolor: theme.palette.primary.dark, color: theme.palette.primary.contrastText, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', scrollSnapAlign: 'start' }}>
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
              <Button variant='outlined' sx={{ ml: 2, borderColor: theme.palette.secondary.main, '&:hover': { borderColor: theme.palette.secondary.light } }}>
                Contact Me
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Experience Section */}
        <Box id="Experience" sx={{ minHeight: '100vh', width: '100vw', bgcolor: theme.palette.primary.main, color: theme.palette.text.primary, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', scrollSnapAlign: 'start' }}>
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
            <Typography variant="h3" gutterBottom sx={{ alignSelf: 'flex-start', textAlign: 'left', mx: 'auto', fontWeight: 700, mt: 3 }}>Experience</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '80%', mt: 4 }}>
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
                "Employed strong usage of various agile development methodologies and project management such as JIRA and Trello to concisely and efficiently conduct tasks."].map((point, idx) => (
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
            </Box>
          </Box>
          <Box sx={{ mt: 3, height: '200px', position: 'relative', overflow: 'hidden', width: '100%'}}>
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
          </Box>
        </Box>

        {/* Projects Section */}
        <Box id="Projects" sx={{ minHeight: '100vh', width: '100vw', bgcolor: theme.palette.primary.main, color: theme.palette.text.primary, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', scrollSnapAlign: 'start' }}>
          <Typography variant="h3" gutterBottom>Projects</Typography>
          <Typography variant="h6">Projects</Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6">Project One</Typography>
                <Typography variant="body2">P1</Typography>
                <Button variant="contained" sx={{ mt: 2 }}>View</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6">Project Two</Typography>
                <Typography variant="body2">P2</Typography>
                <Button variant="contained" sx={{ mt: 2 }}>View</Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Contact Section */}
        <Box id="Contact" sx={{ minHeight: '100vh', width: '100vw', bgcolor: theme.palette.primary.dark, color: theme.palette.primary.contrastText, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', scrollSnapAlign: 'start' }}>
          <Typography variant="h3" gutterBottom>Contact</Typography>
          <Typography variant="h6">Contact details descriptor</Typography>
        </Box>
        <GradualBlur 
          target="page"
          position="bottom"
          height="10rem"
          strength={3}
          divCount={10}
          curve="bezier"
          exponential={true}
          opacity={0.7}
        />
      </Container>      
    </ThemeProvider>
  );
};

export default App;
