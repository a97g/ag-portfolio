import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";

export interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
  points: string[];
  technologies: string[];
  link: string;
  github: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  title,
  description,
  points,
  technologies,
  link,
  github,
}) => {
  const hasLive = link && link !== "NA";
  const hasGithub = github && github !== "NA";

  return (
    <Card
      sx={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: "rgba(0, 0, 0, 0.40)",
        border: "1px solid rgba(255, 255, 255, 0.10)",
        borderRadius: "22px",
        boxShadow: "0 10px 35px rgba(0,0,0,0.55)",
        padding: 3,
        height: "100%",
        width: "600px",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.35s ease",
        transform: "translateY(0px)",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 18px 45px rgba(119, 0, 255, 0.25)",
          borderColor: "rgba(119, 0, 255, 0.25)",
        },
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: "14px",
        }}
      >
        <CardMedia
          component="img"
          src={img}
          alt={title}
          sx={{
            height: 400,
            objectFit: "cover",
            transition: "transform 0.45s ease",
            "&:hover": {
              transform: "scale(1.08)",
            },
          }}
        />
      </Box>

      <CardContent sx={{ p: 0, mt: 2, minHeight: "200px" }}>
        <Typography variant="h5" fontWeight={700} mb={1} color="white">
          {title}
        </Typography>

        <Typography variant="body1" color="rgba(255,255,255,0.85)" mb={2}>
          {description}
        </Typography>

        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          {points.map((p, i) => (
            <li key={i}>
              <Typography color="rgba(255,255,255,0.9)" variant="body2">
                {p}
              </Typography>
            </li>
          ))}
        </Box>
      </CardContent>

      <Stack direction="row" spacing={1} flexWrap="wrap" mb={3}>
        {technologies.map((tech, i) => (
          <Chip
            key={i}
            label={tech}
            size="small"
            sx={{
              bgcolor: "rgba(255,255,255,0.10)",
              color: "white",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.25)",
              transition: "all 0.35s ease",
              marginTop: "10px !important",
              "&:hover": {
                bgcolor: "rgba(119, 0, 255, 0.25)",
                borderColor: "white",
                transform: "translateY(-2px)",
              },
            }}
          />
        ))}
      </Stack>

      <Box
        sx={{
          mt: "auto",
          pt: 2,
          display: "flex",
          justifyContent: hasLive && hasGithub ? "space-between" : "center",
          gap: 2,
        }}
      >
        {hasLive && (
          <Button
            variant="outlined"
            href={link}
            target="_blank"
            sx={{
              flex: 1,
              color: "white",
              borderColor: "rgb(94, 46, 196)",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "white",
                boxShadow: "0 0 10px rgba(255,255,255,0.3)",
              },
            }}
          >
            Live Demo
          </Button>
        )}

        {hasGithub && (
          <Button
            variant="outlined"
            href={github}
            target="_blank"
            sx={{
              flex: 1,
              color: "white",
              borderColor: "rgba(255,255,255,0.40)",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "white",
                boxShadow: "0 0 10px rgba(255,255,255,0.3)",
              },
            }}
          >
            GitHub
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default ProjectCard;
