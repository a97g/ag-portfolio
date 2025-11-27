import React, { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import BlurText from "../components/BlurText";
import ProjectCard from "../components/ProjectCard";
import gmlive from "../assets/projects/gmlive.png";
import rspet from "../assets/projects/rspet.png";
import javaplugins from "../assets/projects/javaplugins.png";
import firstaidconnect from "../assets/projects/firstaidconnect.png";
import portfolio from "../assets/projects/portfolio.png";
import bdcms from "../assets/projects/bdcms.png";
import geowoot from "../assets/projects/geowoot.png";
import geometa from "../assets/projects/geometa.png";

export const Projects: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Window resize listener to detect mobile width <800px
  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width:800px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  return (
    <Box
      id="Projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
  );
};

export default Projects;
